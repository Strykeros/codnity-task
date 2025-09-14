import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Box,
  Button,
  Menu,
  MenuList,
  MenuItem,
  ThemeProvider, createTheme
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState, type MouseEvent } from "react";

const theme = createTheme();
const menuItemTexts: string[] = ["Home", "Blog", "About us", "Contact"];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (e: MouseEvent<HTMLElement>) => {
    setAnchorElNav(e.currentTarget);
  };
  const handleCloseNavMenu = () => setAnchorElNav(null);

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="fixed" sx={{ bgcolor: "green", color: "white" }}>
        <Toolbar  sx={{display: {xs: 'flex', justifyContent: 'space-between'}}}>
          <Typography variant="h4">
            Codnity test
          </Typography>
          <IconButton
            size="large"
            edge="end"
            aria-label="menu"
            sx={{ color: "white", display: { xs: "flex", md: "none" } }}
            onClick={handleOpenNavMenu}
          >
              {Boolean(anchorElNav) ? <CloseIcon/> : <MenuIcon />}
          </IconButton>
          <Menu
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{ display: { xs: "flex", md: "none" } }}
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <MenuList>
              {menuItemTexts.map((text) => (
                <MenuItem sx={{ color: "inherit" }}>{text}</MenuItem>
              ))}
            </MenuList>
          </Menu>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {menuItemTexts.map((text) => (
              <Button sx={{ color: "inherit" }}>{text}</Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>      
    </ThemeProvider>

  );
};

export default Header;
