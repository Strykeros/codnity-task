import React from 'react';
import { Grid, Typography, Box, Chip } from '@mui/material';
import GlassCard from '../GlassCard';
import type { Launch } from '../types';

interface LatestLaunchProps {
  latestLaunch: Launch | null;
}

const LatestLaunch: React.FC<LatestLaunchProps> = ({ latestLaunch }) => {
  return (
    <Grid container spacing={3} sx={{ mb: 4 }}>
      <Grid size={12}>
        <GlassCard>
          <Box sx={{ width: '100%' }}>
            <Typography 
              variant="h5" 
              sx={{ fontWeight: 'bold', mb: 2 }}
            >
              Latest Starlink Launch
            </Typography>
            {latestLaunch ? (
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 4 }}>
                  <Typography variant="body2" sx={{ mb: 0.5, fontWeight: 'bold' }}>
                    Mission Name
                  </Typography>
                  <Typography variant="body1" sx={{  color: 'black' }}>
                    {latestLaunch.name}
                  </Typography>
                </Grid>
                <Grid size={{ xs: 12, sm: 4 }}>
                  <Typography variant="body2" sx={{ fontWeight: 'bold' , mb: 0.5 }}>
                    Launch Date
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'black' }}>
                    {new Date(latestLaunch.date_utc).toLocaleDateString()}
                  </Typography>
                </Grid>
                <Grid size={{ xs: 12, sm: 4 }}>
                  <Typography variant="body2" sx={{ fontWeight: 'bold' , mb: 0.5 }}>
                    Status
                  </Typography>
                  <Chip 
                    label={latestLaunch.success ? 'SUCCESS' : 'FAILED'}
                    color={latestLaunch.success ? 'success' : 'error'}
                    size="small"
                    sx={{ fontWeight: 'bold' }}
                  />
                </Grid>
              </Grid>
            ) : (
              <Typography color="black">No recent Starlink launch data available</Typography>
            )}
          </Box>
        </GlassCard>
      </Grid>
    </Grid>
  );
};

export default LatestLaunch;