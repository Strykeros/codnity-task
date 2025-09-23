export interface StarlinkSatellite {
  id: string;
  version: string;
  launch: string;
  longitude: number | null;
  latitude: number | null;
  height_km: number | null;
  velocity_kms: number | null;
  spaceTrack: {
    OBJECT_NAME: string;
    LAUNCH_DATE: string;
    DECAY_DATE: string | null;
    OBJECT_ID: string;
    NORAD_CAT_ID: number;
    EPOCH: string;
    MEAN_MOTION: number;
    ECCENTRICITY: number;
    INCLINATION: number;
    PERIAPSIS: number;
    APOAPSIS: number;
  };
}

export interface Launch {
  id: string;
  name: string;
  date_utc: string;
  date_unix: number;
  success: boolean | null;
  upcoming: boolean;
  details: string | null;
  payloads: string[];
  links: {
    patch: {
      small: string;
      large: string;
    };
    webcast: string;
    article: string;
  };
}

export interface LaunchStats {
  total: number;
  successful: number;
  failed: number;
  upcoming: number;
  successRate: number;
}

export interface ActivityStats {
  operational: number;
  deorbited: number;
  inactive: number;
}
