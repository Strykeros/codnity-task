import React from 'react';
import { Grid } from '@mui/material';
import StatisticsCard from './StatisticsCard';
import type { StarlinkSatellite, LaunchStats } from '../types';

interface StatisticsRowProps {
  satellites: StarlinkSatellite[];
  launchStats: LaunchStats;
  activeSatellites: number;
}

const StatisticsRow: React.FC<StatisticsRowProps> = ({ 
  satellites, 
  launchStats, 
  activeSatellites 
}) => {
  return (
    <Grid container spacing={{ xs: 2, sm: 3 }} sx={{ mb: { xs: 2, sm: 4 } }}>
      {/* Total Satellites */}
      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <StatisticsCard 
          value={satellites.length}
          label="Total Satellites"
        />
      </Grid>

      {/* Active Satellites */}
      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <StatisticsCard 
          value={activeSatellites}
          label="Active Satellites"
        />
      </Grid>

      {/* Total Launches */}
      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <StatisticsCard 
          value={launchStats.total}
          label="Total Launches"
        />
      </Grid>

      {/* Success Rate */}
      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <StatisticsCard 
          value={`${launchStats.successRate.toFixed(1)}%`}
          label="Success Rate"
        />
      </Grid>
    </Grid>
  );
};

export default StatisticsRow;