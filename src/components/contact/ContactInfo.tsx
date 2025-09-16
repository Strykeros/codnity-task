import { Typography, Box } from '@mui/material';
import type { SvgIconComponent } from '@mui/icons-material';

interface ContactInfoProps {
    icon: SvgIconComponent;
    text: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ icon: IconComponent, text }) => {
    return (
        <Typography
                        variant="h1" 
                className="contact-text"
        >
        <Box
            sx={{
                display: 'flex',
                justifyItems: "center",
                alignItems: "center",
                flexDirection: "column",
                cursor: 'pointer',
                textDecoration: 'none',
                color: 'inherit',
            }}
        >
            <IconComponent
                sx={{
                    color: "inherit",
                    fontSize: "inherit",
                    margin: "0 0 15px 0"
                }}
            />
            <Typography
                variant="h4"
                sx={{ color: "inherit", wordBreak: "break-all" }}
                className="contact-text"
            >
                {text}
            </Typography>
        </Box>            
        </Typography>

    )
}

export default ContactInfo;
