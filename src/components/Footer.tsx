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

const theme = createTheme();
const Footer = () => {

    return(
        <>
        <AppBar component="footer" position="absolute" sx={{ bgcolor: "#4B4B4C", color: "white", height: "50px", top: "100vh"}}>
            <Toolbar  sx={{display: {xs: 'flex', justifyContent: 'space-between'}}}>

            </Toolbar>
        </AppBar>          
        </>


            /*<ThemeProvider theme={theme}>
    
    </ThemeProvider>*/
    )
}

export default Footer;
