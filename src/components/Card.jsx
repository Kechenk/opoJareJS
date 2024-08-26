import { Box, Grid, Paper } from "@mui/material";
import BoxTrial from "./ui/BoxTrial";
import { BoxSize } from "./ui/BoxSize";
import Tombol from "./ui/Tombol";
// import Tombol from "./ui/Tombol";


export default function () {
  return (
    <Box sx={{ mt: 8 }}>
      <Grid
        justifyContent="space-around"
        container
        columnSpacing={2}
        rowSpacing={3}
      >

        {/* <BoxSize.MD />
        <BoxSize.XS />
        <BoxSize.XS /> */}

        <BoxTrial  md={12} xs={12} height="21em">
          <Tombol>
            wow
          </Tombol>
        </BoxTrial>
        <BoxTrial md={4} xs={4}>
        </BoxTrial>
        <BoxTrial md={4} xs={4} />
        <BoxTrial md={4} xs={4}>
        </BoxTrial>
        

      </Grid>
    </Box>
  );
}
