import { Image } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Paper,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function () {
  // const [anchorEl, setanchorEl] = React.useState(null);
  // const open = Boolean(anchorEl);
  // const handleClick = (event) => {
  //   setanchorEl(event.currentTarget);
  // }
  // const handleClose = () => {
  //   setanchorEl(null);
  // };

  return (
    <>
      <Paper
        sx={{
          display: "flex",
          p: 2.5,
          justifyContent: "space-between",
        }}
      >
        <Box
          component="img"
          maxWidth="40px"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/National_emblem_of_Indonesia_Garuda_Pancasila.svg/223px-National_emblem_of_Indonesia_Garuda_Pancasila.svg.png"
        ></Box>
        <IconButton>
          <MenuIcon />
            {/* <MenuItem onClick={handleClose}>a</MenuItem>
            <MenuItem onClick={handleClose}>b</MenuItem>
            <MenuItem onClick={handleClose}>c</MenuItem> */}
        </IconButton>
      </Paper>
    </>
  );
}
