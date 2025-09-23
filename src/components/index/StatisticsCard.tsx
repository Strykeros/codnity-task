import React from 'react';
import { Typography, Box } from '@mui/material';
import GlassCard from '../GlassCard';

interface StatisticsCardProps {
  value: string | number;
  label: string;
}

const StatisticsCard: React.FC<StatisticsCardProps> = ({ value, label }) => {
  return (
    <GlassCard sx={{ height: '100%' }}>
      <Box sx={{ textAlign: 'center', width: '100%', p: { xs: 1, sm: 2 } }}>
        <Typography 
          variant="h3" 
          sx={{ 
            fontWeight: 'bold', 
            color: "black", 
            mb: 1,
            fontSize: { xs: '1.5rem', sm: '2rem', md: '3rem' }
          }}
        >
          {typeof value === 'number' ? value.toLocaleString() : value}
        </Typography>
        <Typography 
          variant="body1" 
          sx={{ 
            fontWeight: '500', 
            color: 'black',
            fontSize: { xs: '0.9rem', sm: '1rem' }
          }}
        >
          {label}
        </Typography>
      </Box>
    </GlassCard>
  );
};

export default StatisticsCard;