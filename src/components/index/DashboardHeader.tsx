import React from 'react';
import { Typography, Box } from '@mui/material';
import GlassCard from '../GlassCard';

const DashboardHeader: React.FC = () => {
  return (
    <Box sx={{ textAlign: 'center', mb: { xs: 2, sm: 4 } }}>
      <GlassCard>
        <Typography 
          variant="h2" 
          component="h1" 
          sx={{ 
            fontWeight: 'bold', 
            mb: { xs: 1, sm: 2 }, 
            color: 'black',
            fontSize: { xs: '2rem', sm: '3rem' }
          }}
        >
          Starlink Dashboard
        </Typography>
        <Typography 
          variant="h6" 
          sx={{ 
            opacity: 0.8, 
            color: 'black',
            fontSize: { xs: '1rem', sm: '1.25rem' }
          }}
        >
          Real-time SpaceX Starlink Constellation Data
        </Typography>            
      </GlassCard>
    </Box>
  );
};

export default DashboardHeader;