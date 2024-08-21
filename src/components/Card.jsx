import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Card, CardContent } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#e0e0e0",
  ...theme.typography.body2,
  padding: theme.spacing(6),
  textAlign: "center",
  color: "#424242",
  fontWeight: "bold",
}));

export default function () {
  return (
    <Box sx={{ mt: 8 }}>
        <Grid 
        justifyContent="space-around"
        container spacing={6} 
        columnSpacing={{ sm:2 , md:4 }}
        >
          <Grid item md={2}>
            <Item>ITEM 1</Item>
          </Grid>
          <Grid item md={6}>
            <Item>ITEM 2</Item>
          </Grid>
          <Grid item md={4}>
            <Item>ITEM 3</Item>
          </Grid>
          <Grid item md={6}>
            <Item>ITEM 4</Item>
          </Grid>
          <Grid item md={4}>
            <Item>ITEM 5</Item>
          </Grid>
          <Grid item md={2}>
            <Item>ITEM 6</Item>
          </Grid>
        </Grid>
    </Box>
  );
}
