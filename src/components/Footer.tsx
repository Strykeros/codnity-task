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
        <AppBar component="footer" position="absolute" sx={{ bgcolor: "green", color: "white", height: "100px", top: "100vh"}}>
            <Toolbar  sx={{display: {xs: 'flex', justifyContent: 'space-between'}}}>

            </Toolbar>
        </AppBar>          
        </>


            /*<ThemeProvider theme={theme}>
    
    </ThemeProvider>*/
    )
}

export default Footer;
