import { Box, Grid } from "@mui/material";


interface SectionProps {

    imageSrc: string,
    imageAltStr: string,
    headerTxt: string,
    paragraphTxt: string,
}

const AboutSection: React.FC<SectionProps> = ({ imageSrc, imageAltStr, headerTxt, paragraphTxt }) => {
    return (
        <Grid container spacing={0} sx={{ alignItems: "center" }} columns={8}>
            <Grid size={{ xs: 12, md: 3}}>
                <Box className="section-image" sx={{ width: "100%" }}>
                    <Box component="img" src={imageSrc} alt={imageAltStr} sx={{
                        width: "100%",
                        height: "auto",
                        display: "block",
                        borderRadius: 2 
                    }} />
                </Box>
            </Grid>
            
            <Grid size={{ xs: 12, md: 5 }}>
                <Box className="section-content" sx={{ padding: { xs: "16px", md: "20px" } }}>
                    <h2 style={{ margin: "0 0 16px 0", fontSize: "1.75rem", fontWeight: 600 }}>
                        {headerTxt}
                    </h2>
                    <p style={{ margin: 0, lineHeight: 1.6, color: "rgba(0, 0, 0, 0.8)" }}>
                        {paragraphTxt}
                    </p>
                </Box>
            </Grid>
        </Grid>
    )
}

export default AboutSection;
