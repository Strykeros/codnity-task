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
        /*height: "100%",
        minHeight: '200px',*/
    }
}

interface GlassCardProps {
    children: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
    sx?: SxProps<Theme>;
    padding?: number | string;
    elevation?: number;
    hover?: boolean;
    fullHeight?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({ onClick, children, sx = {}, ...props }) => {
    return (
        <Card sx={glassStyle.Glass} onClick={onClick} {...props}>
            <CardContent>
                {children}
            </CardContent>
        </Card>
    )
}

export default GlassCard;
