import { Image } from "@mui/icons-material";
import { Box, Button, Container, IconButton, Paper } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

export default function () {
  return (
    <>
      <Paper
        sx={{ 
          display: "flex",
          p: 2.5,
          justifyContent:"space-between"
        }}
        >
        <Box 
        component="img"
        maxWidth="40px"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/JW_Logo.svg/240px-JW_Logo.svg.png">
        </Box>
        <IconButton >
          <MenuIcon />
        </IconButton>
      </Paper>
    </>
  );
}
