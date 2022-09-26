import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#7F6238",
      contrastText: "rgb(30,30,30)",
    },
    secondary: {
      main: "#5F255F",
      contrastText: "#ffffff",
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
});

theme = responsiveFontSizes(theme);

export default theme;
