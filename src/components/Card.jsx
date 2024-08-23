import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Paper,
  Stack,
} from "@mui/material";

export default function () {
  return (
    <>
      <Box sx={{ mt: 2 }}>
        <Grid container>
          <Grid item md={2}>
            <Card>
              <Grid
                container
                spacing={2}
                sx={{
                  justifyContent: "center",
                  fontWeight: "bold",
                }}
              >
                <CardContent>
                  Hi
                </CardContent>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
