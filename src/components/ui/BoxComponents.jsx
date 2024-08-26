import { Box } from "@mui/material";
import React from "react";

const BoxComponents = () => {
  return (
    <Box
      component="img"
      src="/img/bg.png"
      sx={{
        width: "100%",
        position: "relative",
        verticalAlign: "middle",
        borderRadius: 2,
      }}
    />
  );
};

export default BoxComponents;
