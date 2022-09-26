import { Box, Modal, Typography } from "@mui/material";
import React from "react";
import Check from "../assets/images/Check";

const SuccessModal = ({ open, handleClose }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "300px",
    height: "300px",
    transform: "translate(-50%, -50%)",
    borderRadius: 2,
    display: "flex",
    backgroundColor: "rgba(225,221,209,1)",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <Modal sx={{ backdropFilter: "blur(3px)" }} open={open} onClose={handleClose}>
      <Box sx={style}>
        <Check width="150px" />
      <Typography color='primary' sx={{textTransform:'uppercase'}}>Votre commande a été envoyée.</Typography>
      </Box>
    </Modal>
  );
};

export default SuccessModal;
