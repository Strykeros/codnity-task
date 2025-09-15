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
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState, type MouseEvent } from "react";
import { Link } from "react-router-dom";

let headerTheme = createTheme();

const headerStyle = {
  Header: {
    background: "rgba(0, 0, 0, 0.6)",
    borderRadius: "0",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(0)",
    WebkitBackdropFilter: "blur(0)",
  },
  HeaderTitle: {
    color: "white",
  },
};

headerTheme = responsiveFontSizes(headerTheme);
interface MenuItem {
  text: string;
  link: string;
}

const menuItems: MenuItem[] = [
  { text: "Home", link: "/" },
  { text: "About", link: "/about" },
  { text: "Contact", link: "/contact" },
];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (e: MouseEvent<HTMLElement>) => {
    setAnchorElNav(e.currentTarget);
  };
  const handleCloseNavMenu = () => setAnchorElNav(null);

  return (
    <ThemeProvider theme={headerTheme}>
      <AppBar position="fixed" sx={headerStyle.Header}>
        <Toolbar
          sx={{ display: { xs: "flex", justifyContent: "space-between" } }}
        >
          <Link to={menuItems[0].link}>
            <Typography variant="h4" sx={headerStyle.HeaderTitle}>
              SpaceX statistics
            </Typography>
          </Link>
          <IconButton
            size="large"
            edge="end"
            aria-label="menu"
            sx={{ color: "white", display: { xs: "flex", md: "none" } }}
            onClick={handleOpenNavMenu}
          >
            {Boolean(anchorElNav) ? <CloseIcon /> : <MenuIcon />}
          </IconButton>

          <Menu
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "flex", md: "none" },
              "& .MuiPaper-root": {
                backgroundColor: "black",
                width: "100%",
              },
            }}
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
            <MenuList
              sx={{
                backgroundColor: "black",
                color: "white",
                padding: "0",
                margin: "0",
              }}
            >
              {menuItems.map((item, index) => (
                <Link key={index} to={item.link} >
                  <MenuItem
                    sx={{
                      color: "white",
                      backgroundColor: "inherit",
                      justifyContent: "center",
                    }}
                  >
                    {item.text}
                  </MenuItem>
                </Link>
              ))}
            </MenuList>
          </Menu>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {menuItems.map((item, index) => (
                <Link key={index} to={item.link}>
                  <Button sx={{ color: "white" }}>{item.text}</Button>
                </Link>
              ))}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
