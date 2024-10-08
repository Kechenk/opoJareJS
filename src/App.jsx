import { Button, Container, Link, Typography } from "@mui/material";
import * as React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import { Outlet } from "react-router-dom";
import "@fontsource/plus-jakarta-sans";

// import Router from "./main/router"

function App() {
  return (
    <Container sx={{ p: 4 }}>
      <Navbar />
      <Outlet />
    </Container>
  );
}

export default App;
