import React from 'react';
import { Typography, Box } from '@mui/material';
import GlassCard from '../GlassCard';

interface ErrorStateProps {
  error: string;
}

const ErrorState: React.FC<ErrorStateProps> = ({ error }) => {
  return (
    <Box sx={{ minHeight: '100vh', padding: 2 }}>
      <GlassCard sx={{ padding: 4, textAlign: 'center', }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'black', mb: 2 }}>
          Error Loading Data
        </Typography>
        <Typography color="black">{error}</Typography>
      </GlassCard>
    </Box>
  );
};

export default ErrorState;