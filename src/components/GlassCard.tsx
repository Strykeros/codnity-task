import Card from '@mui/material/Card';
import type { SxProps, Theme } from '@mui/material/styles';
import CardContent from '@mui/material/CardContent';


const glassStyle = {
    Glass: {
        background: "rgba(255, 255, 255, 0.5)",
        borderRadius: "16px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(6.5px)",
        WebkitBackdropFilter: "blur(6.5px)",
        color: "black",
        padding: "20px",
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center"
    }
}

interface GlassCardProps {
    children: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
    sx?: SxProps<Theme>;
    cardContentSx?: SxProps<Theme>;
    padding?: number | string;
    elevation?: number;
    hover?: boolean;
    fullHeight?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({ onClick, children, sx = {}, cardContentSx = {}, ...props }) => {
    return (
        <Card sx={{...glassStyle.Glass, ...sx}} onClick={onClick} {...props}>
            <CardContent sx={{ flexGrow: 1, ...cardContentSx }}>
                {children}
            </CardContent>
        </Card>
    )
}

export default GlassCard;
