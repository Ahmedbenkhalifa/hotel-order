import React from "react";
import { Routes as RoutesRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Menu from "./pages/Menu";

const Routes = () => {
  return (
    <>
      <Navbar />
      <RoutesRouter>
        <Route path="/" element={<Menu />} />
        {/* <Route path="/:roomNbr" element={<Menu />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </RoutesRouter>
    </>
  );
};

export default Routes;
