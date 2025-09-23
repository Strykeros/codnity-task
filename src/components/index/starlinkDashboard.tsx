import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import type { StarlinkSatellite, Launch, LaunchStats } from '../types';
import DashboardHeader from './DashboardHeader';
import StatisticsRow from './StatisticsRow';
import LatestLaunch from './LatestLaunch';
import ActivityOverview from './ActivityOverview';
import LoadingState from './LoadingState';
import ErrorState from './ErrorState';

const StarlinkDashboard: React.FC = () => {
  const [satellites, setSatellites] = useState<StarlinkSatellite[]>([]);
  const [launches, setLaunches] = useState<Launch[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        setLoading(true);
        
        // Fetch Starlink satellites and launches in parallel
        const [satellitesResponse, launchesResponse] = await Promise.all([
          fetch('https://api.spacexdata.com/v4/starlink'),
          fetch('https://api.spacexdata.com/v4/launches')
        ]);

        if (!satellitesResponse.ok || !launchesResponse.ok) {
          throw new Error('Failed to fetch data');
        }

        const [satellitesData, launchesData] = await Promise.all([
          satellitesResponse.json(),
          launchesResponse.json()
        ]);

        setSatellites(satellitesData);
        setLaunches(launchesData);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const getActiveSatellites = (): number => {
    return satellites.filter(sat => 
      sat.spaceTrack?.DECAY_DATE === null && 
      sat.height_km !== null && 
      sat.height_km > 0
    ).length;
  };

  const getLaunchStats = (): LaunchStats => {
    const starlinkLaunches = launches.filter(launch => 
      launch.name.toLowerCase().includes('starlink')
    );
    
    const total = starlinkLaunches.length;
    const successful = starlinkLaunches.filter(launch => launch.success === true).length;
    const failed = starlinkLaunches.filter(launch => launch.success === false).length;
    const upcoming = starlinkLaunches.filter(launch => launch.upcoming).length;
    const successRate = total > 0 ? (successful / (total - upcoming)) * 100 : 0;
    
    return { total, successful, failed, upcoming, successRate };
  };

  const getLatestStarlinkLaunch = (): Launch | null => {
    const starlinkLaunches = launches
      .filter(launch => launch.name.toLowerCase().includes('starlink') && !launch.upcoming)
      .sort((a, b) => b.date_unix - a.date_unix);
    
    return starlinkLaunches.length > 0 ? starlinkLaunches[0] : null;
  };

  const getSatelliteActivityStats = () => {
    const operational = satellites.filter(sat => 
      sat.spaceTrack?.DECAY_DATE === null && 
      sat.height_km !== null && 
      sat.height_km > 0
    ).length;
    
    const deorbited = satellites.filter(sat => 
      sat.spaceTrack?.DECAY_DATE !== null
    ).length;
    
    const inactive = satellites.length - operational - deorbited;
    
    return { operational, deorbited, inactive };
  };

  if (loading) {
    return <LoadingState />;
  }

  if (error) {
    return <ErrorState error={error} />;
  }

  const launchStats = getLaunchStats();
  const latestLaunch = getLatestStarlinkLaunch();
  const activityStats = getSatelliteActivityStats();
  const activeSatellites = getActiveSatellites();

  return (
    <Box sx={{ minHeight: '100vh', padding: { xs: 1, sm: 2 } }}>
      <Box sx={{ maxWidth: 1200, margin: '0 auto', width: '100%' }}>
        <DashboardHeader />
        
        <StatisticsRow 
          satellites={satellites}
          launchStats={launchStats}
          activeSatellites={activeSatellites}
        />
        
        <LatestLaunch latestLaunch={latestLaunch} />
        
        <ActivityOverview activityStats={activityStats} />
      </Box>
    </Box>
  );
};

export default StarlinkDashboard;