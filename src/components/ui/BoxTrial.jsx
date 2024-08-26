import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Tombol from "./Tombol";

const BoxTrial = ({ children, xs, md, height = '10em' }) => {
  return (
    <Grid item xs={xs} md={md}>
      <Box
        bgcolor="rgb(18, 158, 84, 0.7)"
        borderRadius={2}
        display="flex"
        justifyContent="center"
        alignItems="center"
        height={height}
        sx={{
          backgroundImage: 'url("/img/bg.png")',
          backgroundSize: 'cover',
          borderRadius: 2,
        }}
      >
        <Typography variant="h3" fontWeight="bold" color="white" component="div">
          {children}
        </Typography>
      </Box>
    </Grid>
  );
};

export default BoxTrial;
