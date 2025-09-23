import React from 'react';
import { Typography, Box, CircularProgress } from '@mui/material';
import GlassCard from '../GlassCard';

const LoadingState: React.FC = () => {
  return (
    <Box 
      sx={{ 
        minHeight: '100vh',
        padding: 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <GlassCard sx={{ padding: 4, textAlign: 'center' }}>
        <Box>
          <CircularProgress size={60} sx={{ mb: 2 }} />
          <Typography variant="h5" color="black">
            Loading Starlink Data...
          </Typography>
        </Box>
      </GlassCard>
    </Box>
  );
};

export default LoadingState;