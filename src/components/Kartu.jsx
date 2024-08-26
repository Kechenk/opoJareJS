import { Box, Card, Grid, Paper, Stack, Typography, withStyles } from "@mui/material";
import BoxComponents from "./ui/BoxComponents.jsx"

export default function () {
  return (
    <Box sx={{ mt: 8 }}>
      <Grid
        justifyContent="space-around"
        container
        columnSpacing={2}
        rowSpacing={3}
        direction="row"
      >
        <Grid xs={12} md={12} container>
          <Box item container bgcolor="rgb(18, 158, 84, 0.7)" borderRadius={2}>
            <Stack
              sx={{
                alignItems: "center",
                direction: "column",
                flexGrow: 1,
              }}
            >
              <Typography variant="h5">My-Title</Typography>
            </Stack>

            <BoxComponents />
          </Box>
        </Grid>
        <Grid xs={6} md={6} container>
          <Box item container bgcolor="rgb(18, 158, 84, 0.7)" borderRadius={2}>
            <Stack
              sx={{
                alignItems: "center",
                direction: "column",
                flexGrow: 1,
              }}
            >
              <Typography variant="h5">My-Title</Typography>
            </Stack>

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
          </Box>
        </Grid>
        <Grid xs={6} md={6} container>
          <Box item container bgcolor="rgb(18, 158, 84, 0.7)" borderRadius={2}>
            <Stack
              sx={{
                alignItems: "center",
                direction: "column",
                flexGrow: 1,
              }}
            >
              <Typography variant="h5">My-Title</Typography>
            </Stack>

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
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
