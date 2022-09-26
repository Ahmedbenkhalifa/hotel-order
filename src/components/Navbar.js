import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import {  Typography, useTheme } from "@mui/material";
import { hexToRgba } from "../utils/colors";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const [scrolled, setIsScrolled] = useState(false);
  const theme = useTheme();
  const handleNav = () => setIsScrolled(window.scrollY > 0);
  window.addEventListener("scroll", handleNav);

  return (
    <AppBar
      position="fixed"
      elevation={scrolled ? 8 : 0}
      sx={{
        background: hexToRgba(theme.palette.background.default, 0.9),
        transition: ".2s",
        backdropFilter: scrolled ? "blur(5px)" : "inherit",
        boxShadow: "0px 5px 10px rgb(230,230,230)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            px: 0,
          }}
        >
          <img
            src={logo}
            alt="logo codeWindev"
            width={"160px"}
            height={"60px"}
            style={{ cursor: "pointer", objectFit: "contain" }}
          />
          <Typography
            textAlign="center"
            variant="body1"
            color="secondary"
            sx={{
              fontSize: { md: "20px" },
              fontWeight: "500",
              pr: { md: 4, xs: 0 },
            }}
          >
            Room Service
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
