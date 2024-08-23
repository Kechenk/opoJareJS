import { Button, Container, Link, Typography } from "@mui/material";
import * as React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import { Outlet } from "react-router-dom";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


// import Router from "./main/router"

function App() {
  return (
    <Container sx={{ p: 4 }}>
      <Typography>
        <Navbar />
        <Outlet />
      </Typography>
    </Container>
  );
}

export default App;
