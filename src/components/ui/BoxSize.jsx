import { Grid } from "@mui/material";
import React from "react";
import BoxTrial from "./BoxTrial";

const MD = () => (
  // <Grid item xs={12} md={12}>
    <BoxTrial>Keceng</BoxTrial>
  // </Grid>
);


const XS = () => (
  <Grid item xs={6} md={6}>
    <BoxTrial>Keceng</BoxTrial>
  </Grid>
);

export const BoxSize = {
  MD,
  XS,
};
