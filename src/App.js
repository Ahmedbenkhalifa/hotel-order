import { useState } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import "./App.css";
import theme from "./assets/theme";
import Routes from "./Routes";
import { BrowserRouter } from "react-router-dom";
import OrderContext from "./context/orderContext";
import ResetContext from "./context/resetContext";

function App() {
  const [order, setOrder] = useState({});
  const [reset, setReset] = useState(false);
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <OrderContext.Provider value={{ order, setOrder }}>
        <ResetContext.Provider value={{ reset, setReset }}>
          <CssBaseline />
          <Routes />
        </ResetContext.Provider>
        </OrderContext.Provider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
