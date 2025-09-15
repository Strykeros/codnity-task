import {
  AppBar,
  IconButton,
  Typography,
  Link,
  Grid,
} from "@mui/material";
import { GitHub, Twitter, LinkedIn, Email } from "@mui/icons-material";

const footerStyle = {
  footer: {
    backgroundColor: "black",
    borderRadius: "0",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(16px)",
    WebkitBackdropFilter: "blur(16px)",
    height: { xs: "auto", lg: "100px" },
    minHeight: { xs: "150px", lg: "100px" },
    top: "100vh",
    color: "white",
    position: "absolute",
    padding: { xs: 2, lg: 0 },
  },
  toolbar: {
    justifyContent: { xs: "center", md: "center" },
    alignItems: "center",
    flexDirection: { xs: "column", md: "row" },
    height: "100%",
    gap: { xs: 2, lg: 0 },
    padding: { xs: 1, lg: 0 },
  },
};

const Footer = () => {
  return (
    <AppBar component="footer" sx={footerStyle.footer}>
      <Grid container sx={footerStyle.toolbar}>
        
        <Grid 
          size={{ md: 4, xs: 12 }} 
          sx={{ 
            textAlign: "center",
            order: { xs: 1, lg: 0 }
          }}
        >
          <Typography variant="body2" sx={{ color: "white" }}>
            © {new Date().getFullYear()} SpaceX Statistics. All rights reserved.
          </Typography>
        </Grid>

        <Grid
          container
          size={{ md: 4, xs: 12 }}
          spacing={{ xs: 1, lg: 0 }}
          sx={{
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            textAlign: "center",
            order: { xs: 2, lg: 2 },
            gap: { xs: 1, lg: 0 }
          }}
        >
          <Grid size={{ md: 4, xs: 12 }}>
            <Link
              href="#"
              color="inherit"
              underline="hover"
              sx={{ color: "white" }}
            >
              Privacy Policy
            </Link>
          </Grid>

          <Grid size={{ md: 4, xs: 12 }}>
            <Link
              href="#"
              color="inherit"
              underline="hover"
              sx={{ color: "white" }}
            >
              Terms of Service
            </Link>
          </Grid>
          
          <Grid size={{ md: 4, xs: 12 }}>
            <Link
              href="#"
              color="inherit"
              underline="hover"
              sx={{ color: "white" }}
            >
              Contact
            </Link>
          </Grid>
        </Grid>

        <Grid
          size={{ md: 4, xs: 12 }}
          sx={{ 
            display: "flex", 
            justifyContent: "center", 
            gap: 1,
            order: { xs: 3, lg: 3 }
          }}
        >
          <IconButton
            sx={{ color: "white" }}
            size="small"
            href="https://github.com"
            target="_blank"
          >
            <GitHub />
          </IconButton>
          <IconButton
            sx={{ color: "white" }}
            size="small"
            href="https://twitter.com"
            target="_blank"
          >
            <Twitter />
          </IconButton>
          <IconButton
            sx={{ color: "white" }}
            size="small"
            href="https://linkedin.com"
            target="_blank"
          >
            <LinkedIn />
          </IconButton>
          <IconButton
            sx={{ color: "white" }}
            size="small"
            href="mailto:contact@spacexstats.com"
          >
            <Email />
          </IconButton>
        </Grid>
        
      </Grid>
    </AppBar>
  );
};

export default Footer;
