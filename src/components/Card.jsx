import { Box, Grid, Paper, Typography } from "@mui/material";


export default function () {
  return (
    <Box sx={{ mt: 8 }}>
      <Grid
        justifyContent="space-around"
        container
        columnSpacing={2}
        rowSpacing={3}
      >
        <Grid item xs={12} md={12}>
          <Box
            component="div"
            height="21em"
            maxWidth="100%"
            bgcolor="rgb(18, 158, 84, 0.7)"
            sx={{
              borderRadius: 2,
              backgroundImage: 'url("/img/bg.png")',
              backgroundSize: "cover",
            }}
          >
            <Text>
              YEAH
            </Text>
          </Box>
        </Grid>
        <Grid item xs={6} md={6}>
          <Box
            component="div"
            height="10em"
            maxWidth="100%"
            bgcolor="rgb(18, 158, 84, 0.7)"
            sx={{
              borderRadius: 2,
              backgroundImage: 'url("/img/bg.png")',
              backgroundSize: "cover",
            }}
          >
            tes
          </Box>
        </Grid>
        <Grid item xs={6} md={6}>
          <Box
            component="div"
            height="10em"
            maxWidth="100%"
            bgcolor="rgb(18, 158, 84, 0.7)"
            sx={{
              borderRadius: 2,
              backgroundImage: 'url("/img/bg.png")',
              backgroundSize: "cover",
            }}
          >
            tes
          </Box>
        </Grid>

        <Grid item xs={6} md={6}>
          <Box bgcolor="rgb(18, 158, 84, 0.7)" borderRadius={2}>
            <Typography lineHeight="1em" component="span">
              tesss
            </Typography>
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
