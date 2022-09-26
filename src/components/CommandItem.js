import { Box, Button, Divider, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import CommandControl from "./CommandControl";
import moment from "moment";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import { useTranslation } from "react-i18next";

const CommandItem = ({ command }) => {
  const { t } = useTranslation();
  const [status, setStatus] = useState(command?.status);
  const changeStatus = (newStatus) => {
    setStatus(newStatus);
  };
  return (
    <Paper sx={{ px: 1, pt: 2, mb: 3, backgroundColor: "rgba(225,221,209,0.5)" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <Typography variant="h6" color="primary" sx={{mb:0.5}}>
            Chambre n°{command.room}
          </Typography>
          {command.startTime && command.endTime && (
            <Typography variant="body1" color="primary">
              entre
              <span style={{ fontWeight: "600" }}>
                {" "}
                {moment(command.startTime).format("HH:mm")}{" "}
              </span>
              et{" "}
              <span style={{ fontWeight: "600" }}> {moment(command.endTime).format("HH:mm")} </span>
            </Typography>
          )}

          <Typography variant="body1">petit déjeuner pour {command.person} personne(s)</Typography>
          {command.allergic && (
            <Typography align="center" color="secondary" sx={{ display: "flex",mt:1 }}>
              <WarningAmberIcon />
              allergique au GLUTEN
            </Typography>
          )}
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", ml: 1 }}>
          <Button variant="outlined" color={status === "Validée" ? "success" : "error"}>
            {status}
          </Button>
          <Typography variant="body2" align="center">
            créé le {moment(command.createdAt).format("DD/MM")} à{" "}
            {moment(command.createdAt).format("HH:mm")}
          </Typography>
        </Box>
      </Box>
      <Divider variant="middle" sx={{ my: 1 }} />
      <ul>
        {Object.keys(command.order).map((key, index) => (
          <Typography component="li" align="left" variant="body1" key={index}>
            {t(key)}: {command.order[key]}
          </Typography>
        ))}
      </ul>
      {command.note && (
        <TextField label="Note:" multiline fullWidth value={command.note} variant="filled"  sx={{
          cursor:'default',
          width:'90%',
          display:'block',
          m:'0 auto'
        }} />
      )}
      <Divider variant="middle" sx={{ mt: 1 }} />
      <Box sx={{ display: "flex", justifyContent: "flex-end", mr: 8 }}>
        <CommandControl changeStatus={changeStatus} idCommand={command._id} />
      </Box>
    </Paper>
  );
};

export default CommandItem;
