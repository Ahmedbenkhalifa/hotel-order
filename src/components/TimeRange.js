import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";
import { Box, Stack, TextField, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import moment from "moment";
const TimeRange = ({ startTime, endTime, errorTime, setStartTime, setEndTime, setErrorTime }) => {
  const { t } = useTranslation();
  const handleTimeStart = (newValue) => {
    if (newValue.getHours() >= 7 && newValue.getHours() <= 12) {
      setStartTime(newValue);
      setErrorTime(false);
    } else if (newValue.getHours() === 6 && newValue.getMinutes() >= 30) {
      setErrorTime(false);
      setStartTime(newValue);
    } else {
      setErrorTime(true);
    }
  };
  const handleTimeEnd = (newValue) => {
    if (newValue.getHours() >= 7 && newValue.getHours() <= 12) {
      setEndTime(newValue);
      setErrorTime(false);
    } else if (newValue.getHours() === 6 && newValue.getMinutes() >= 30) {
      setErrorTime(false);
      setEndTime(newValue);
    } else {
      setErrorTime(true);
    }
  };
  return (
    <Box>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Box sx={{ display: { md: "flex" }, alignItems: "center" }}>
          <Typography sx={{ fontSize: "18px" }}>{t("served_time")}</Typography>
          <Stack spacing={1} direction="row" sx={{ ml: 1, alignItems: "center" }}>
            <MobileTimePicker
              ampmInClock
              value={startTime}
              onChange={handleTimeStart}
              renderInput={(params) => <TextField {...params} sx={{ width: "140px" }} />}
            />
            <Typography sx={{ fontSize: "18px" }}>{t("and")}</Typography>
            <MobileTimePicker
              ampmInClock
              value={endTime}
              onChange={handleTimeEnd}
              renderInput={(params) => <TextField {...params} sx={{ width: "140px" }} />}
            />
          </Stack>
          {moment(startTime).format("HH:mm") + "/" + moment(endTime).format("HH:mm")}
        </Box>
      </LocalizationProvider>
      {errorTime && (
        <Typography color="error" sx={{ display: "flex" }}>
          <WarningAmberIcon fontSize="small" />
          {t("error_time")}
        </Typography>
      )}
      <Typography variant="body2" sx={{ mt: { xs: 1, md: 0 } }}>
        {t("avaibility_time")}
      </Typography>
    </Box>
  );
};

export default TimeRange;
