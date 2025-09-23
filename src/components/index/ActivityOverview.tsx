import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import GlassCard from '../GlassCard';
import type { ActivityStats } from '../types';

interface ActivityOverviewProps {
  activityStats: ActivityStats;
}

const ActivityOverview: React.FC<ActivityOverviewProps> = ({ activityStats }) => {
  return (
    <Grid container spacing={3} sx={{ mb: 4 }}>
      <Grid size={12}>
        <GlassCard>
          <Box sx={{ width: '100%' }}>
            <Typography 
              variant="h5" 
              sx={{ fontWeight: 'bold', mb: 2, color: 'black' }}
            >
              Satellite Activity Overview
            </Typography>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, sm: 4 }}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography 
                    variant="h4" 
                    sx={{ fontWeight: 'bold', color: 'black', mb: 0.5 }}
                  >
                    {activityStats.operational.toLocaleString()}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'black' }}>
                    Operational
                  </Typography>
                </Box>
              </Grid>
              <Grid size={{ xs: 12, sm: 4 }}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography 
                    variant="h4" 
                    sx={{ fontWeight: 'bold', color: 'black', mb: 0.5 }}
                  >
                    {activityStats.deorbited.toLocaleString()}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'black' }}>
                    Deorbited
                  </Typography>
                </Box>
              </Grid>
              <Grid size={{ xs: 12, sm: 4 }}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography 
                    variant="h4" 
                    sx={{ fontWeight: 'bold', color: 'black', mb: 0.5 }}
                  >
                    {activityStats.inactive.toLocaleString()}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'black' }}>
                    Inactive
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </GlassCard>
      </Grid>
    </Grid>
  );
};

export default ActivityOverview;