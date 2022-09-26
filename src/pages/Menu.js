import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Grid,
  Divider,
  Paper,
  Checkbox,
  Button,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import Breakfast_well from "../components/BreakfastWell";
import orderContext from "../context/orderContext";
import Breakfast_gourmet from "../components/BreakfastGourmet";
import axios from "axios";
import { useParams, useSearchParams } from "react-router-dom";
import SuccessModal from "../components/SuccessModal";
import { useModal } from "../hooks/useModal";
import TimeRange from "../components/TimeRange";
import resetContext from "../context/resetContext";

const Menu = () => {
  const [searchParams] = useSearchParams();
  const roomNbr = searchParams.get("room");
  const [open, handleOpen, handleClose] = useModal();
  const { t } = useTranslation();
  const { order ,setOrder} = useContext(orderContext);
  const { setReset } = useContext(resetContext);
  const [person, setPerson] = useState(1);
  const [note, setNote] = useState("");
  const [allergic, setAllergic] = useState(false);
  const [errorNumber, setErrorNumber] = useState(false);
  const [errorTime, setErrorTime] = useState(false);
  const [startTime, setStartTime] = useState(new Date(2022, 6, 20, 6, 30));
  const [endTime, setEndTime] = useState(new Date(startTime.getTime() + 900000));
  console.log(roomNbr)
  const handlePerson = (event) => {
    if (parseInt(event.target.value) < 0 || parseInt(event.target.value) > 10) {
      setErrorNumber(true);
    } else {
      setErrorNumber(false);
      setPerson(event.target.value);
    }
  };
  const handleAllergic = (event) => {
    setAllergic(event.target.checked);
  };
  const handleNote = (event) => {
    setNote(event.target.value);
  };
  const addOrder = async (formData) => {
    try {
      await axios.post("/api/hotel/addCommand", formData);
      handleOpen();
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = () => {
    if (!errorNumber && !errorTime) {
      setReset(true);
      addOrder({ order, person, room: roomNbr, allergic, note, startTime, endTime }).then(() =>
        setReset(false)
      );
      setAllergic(false);
      setPerson(1);
      setNote("");
      setStartTime(new Date(2022, 6, 20, 6, 30));
      setOrder({})
    }
  };
  useEffect(() => {
    setEndTime(new Date(startTime.getTime() + 900000));
  }, [startTime]);
  return (
    <Container
      component={Paper}
      maxWidth="lg"
      sx={{ mt: 7, px: 2, py: 4, background: "rgba(225,221,209,0.5)" }}
    >
      <Box sx={{ display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
        <Typography variant="h6" color="secondary" sx={{ fontWeight: "550" }}>
          {t("breakfast")}
        </Typography>
        <TextField
          type="number"
          inputProps={{ inputMode: "numeric", min: 1, max: 10, style: { textAlign: "center" } }}
          color="secondary"
          variant="standard"
          sx={{ maxWidth: "55px" }}
          value={person}
          onChange={handlePerson}
        />
        <Typography variant="h6" color="secondary" sx={{ fontWeight: "550" }}>
          {t("person")}
        </Typography>
      </Box>
      {errorNumber && (
        <Typography variant="body2" color="error" textAlign="center">
          {t("error_number")}
        </Typography>
      )}
      <Typography sx={{ mt: 1 }}>{t("advice")}</Typography>
      <Divider sx={{ my: 1 }} />
      <Grid container>
        <Breakfast_well />
        <Divider
          flexItem
          orientation="vertical"
          sx={{ display: { md: "block", xs: "none" }, mx: 1.5 }}
        />
        <Divider sx={{ display: { md: "none", xs: "block" }, width: "100%", mt: 2 }} />
        <Breakfast_gourmet />
      </Grid>
      <Divider sx={{ my: 1 }} />
      <Typography variant="body1">{t("allergic_gluten")}</Typography>
      <Typography textAlign="start" sx={{ ml: 1, fontWeight: "550" }}>
        {t("tick_box")}
        <Checkbox color="secondary" checked={allergic} onChange={handleAllergic} />
      </Typography>
      <Divider sx={{ my: 1 }} />
      <TimeRange
        startTime={startTime}
        endTime={endTime}
        setStartTime={setStartTime}
        setEndTime={setEndTime}
        errorTime={errorTime}
        setErrorTime={setErrorTime}
      />
      <Divider sx={{ my: 2 }} />
      <Typography sx={{ mb: 1 }} variant="h5" color="primary">
        {t("add_note")}
      </Typography>
      <TextField
        multiline
        minRows={"2"}
        fullWidth
        placeholder={t("write_here") + " ...."}
        label="Note"
        variant="filled"
        onChange={handleNote}
        value={note}
      />
      <Button
        disabled={errorNumber || errorTime}
        onClick={handleSubmit}
        variant="contained"
        sx={{ color: "rgba(225,221,209,0.9)", display: "block", m: "5px auto 0" }}
      >
        {t("send")}
      </Button>
      {/* {!roomNbr && (
        <Typography variant="body2" color="error" textAlign="center" sx={{mt:1}}>
         {t("error_room")}
        </Typography>
      )} */}
      <Divider sx={{ my: 2 }} />
      <Typography textAlign="center">
        {t("daily_press")}
        <Typography
          variant="body1"
          component="a"
          sx={{
            ml: 1,
            cursor: "pointer",
            color: "#76A6F1",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
          href="https://www.pressreader.com/"
          target="_blank"
        >
          pressreader.com
        </Typography>
      </Typography>
      <SuccessModal open={open} handleClose={handleClose} />
    </Container>
  );
};

export default Menu;
