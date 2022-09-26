import React, { useState } from "react";
import { Box, ButtonGroup, useMediaQuery, useTheme } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import axios from "axios";

const CommandControl = ({ idCommand, changeStatus }) => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  const [loading, setLoading] = useState(false);
  const handleClick = async (newStatus) => {
    setLoading(true);
    try {
      await axios.put(`/api/hotel/updateStatus/${idCommand}`, {
        newStatus,
      });
      setLoading(false);
      changeStatus(newStatus);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <Box sx={{ my: 2, maxWidth: "100%" }}>
      <LoadingButton
        color="primary"
        onClick={() => handleClick("Invalide")}
        loading={loading}
        loadingPosition="start"
        startIcon={<HighlightOffIcon sx={{ display: isMatch ? "none" : "" }} />}
        variant="outlined"
      >
        Annuler
      </LoadingButton>
      <LoadingButton
        color="primary"
        onClick={() => handleClick("Validée")}
        loading={loading}
        loadingPosition="start"
        sx={{ ml: 2, color: "white" }}
        startIcon={<CheckCircleOutlineIcon sx={{ display: isMatch ? "none" : "" }} />}
        variant="contained"
      >
        Valider
      </LoadingButton>
    </Box>
  );
};

export default CommandControl;
