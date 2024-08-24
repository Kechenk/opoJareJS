import { Box, Paper, Grid, styled, Card } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(8),
  whiteSpace: "nowrap",
  textAlign: "center",
  // color: "#424242",
  fontWeight: "bold",
}));

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
          <Box sx={{ backgroundColor : "transparent" }}>
            <Item>yes</Item>
          </Box>
        </Grid>
        <Grid item xs={6} md={6}>
          <Item>yes</Item>
        </Grid>
        <Grid item xs={6} md={6}>
          <Item>yes</Item>
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
