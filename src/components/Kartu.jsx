import * as React from "react";
import { Box, Paper, Grid, styled } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#e0e0e0",
  ...theme.typography.body2,
  // padding: theme.spacing(8),
  whiteSpace: "nowrap",
  textAlign: "center",
  color: "#424242",
  fontWeight: "bold",
}));

export default function () {
  return (
    <Box sx={{ mt: 8 }}>
      <Grid
        justifyContent="space-around"
        container
        columnSpacing={{ md: 4, sm:2 }}
        rowSpacing={2}
      >
        <Grid item xs={3} md={2}
        >
          <Item sx={{ padding:3 }}
          >ITEM 1</Item>
        </Grid>
        <Grid item xs={3} md={6}>
          <Item>ITEM 2</Item>
        </Grid>
        <Grid item xs={3} md={4}>
          <Item>ITEM 3</Item>
        </Grid>
         {/* <Grid item xs={1} sm={2} md={6} lg={6}>
            <Item>ITEM 4</Item>
          </Grid>
          <Grid item xs={1} sm={2} md={4} lg={4}>
            <Item>ITEM 5</Item>
          </Grid>
          <Grid item xs={1} sm={2} md={2} lg={2}>
            <Item>ITEM 6</Item>
          </Grid> */}
      </Grid>
    </Box>
  );
}
