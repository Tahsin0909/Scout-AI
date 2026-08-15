export interface ITriptrax {
  id: string;
}

export type TripStatusVariant = "in-progress" | "ready" | "completed";

export interface IUserRecentTrip {
  id: string;
  title: string;
  status: string;
  statusVariant: TripStatusVariant;
  meta: string;
  actionText: string;
  actionDisabled: boolean;
  image: string;
}

export type AdventureMode = "hiking" | "road" | "rv" | "overland";

export type ExperienceLevel =
  | "beginner"
  | "intermediate"
  | "advanced"
  | "expert";

export type FitnessLevel = "low" | "moderate" | "high";

export type RiskLevel = "low" | "medium" | "high";

export type WaterRequirement =
  | "less-than-1"
  | "1-2"
  | "3-5"
  | "over-5"
  | "not-sure";

export interface TripDetails {
  name: string;
  region: string;
  startDate: string;
  endDate: string;
  startLocation: string;
  endLocation: string;
}

export interface GroupDetails {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  adults: number;
  children: number;
  travelingWithPets: boolean;
  fitnessLevel: FitnessLevel;
  experienceLevel: ExperienceLevel;
  medicalConditions: string[];
  otherConditions: string;
}

export interface TripPreferences {
  tripType: string;
  multiDayStyle: string;
  maximumDailyMileage: string;
  maximumElevationGain: string;
  trailStyles: string[];
  preferredDifficulty: string;
  preferredPacing: string;
}

export interface RiskTolerance {
  exposure: RiskLevel | null;
  remoteness: RiskLevel | null;
}

export interface WaterDetails {
  requirement: WaterRequirement | null;
}

export interface TripWizardState {
  step: number;
  adventureMode: AdventureMode | null;
  trip: TripDetails;
  group: GroupDetails;
  preferences: TripPreferences;
  risk: RiskTolerance;
  water: WaterDetails;
  submitted: boolean;
}

export type TripWizardAction =
  | {
    type: "NEXT_STEP";
  }
  | {
    type: "PREVIOUS_STEP";
  }
  | {
    type: "GO_TO_STEP";
    payload: number;
  }
  | {
    type: "SET_ADVENTURE_MODE";
    payload: AdventureMode;
  }
  | {
    type: "UPDATE_TRIP";
    payload: Partial<TripDetails>;
  }
  | {
    type: "UPDATE_GROUP";
    payload: Partial<GroupDetails>;
  }
  | {
    type: "UPDATE_PREFERENCES";
    payload: Partial<TripPreferences>;
  }
  | {
    type: "UPDATE_RISK";
    payload: Partial<RiskTolerance>;
  }
  | {
    type: "UPDATE_WATER";
    payload: Partial<WaterDetails>;
  }
  | {
    type: "SUBMIT_TRIP";
  }
  | {
    type: "CLOSE_SUCCESS";
  }
  | {
    type: "RESET";
  };

export interface TripStepProps {
  state: TripWizardState;
  dispatch: React.Dispatch<TripWizardAction>;
}

export interface ITripReportWeather {
  date: string;
  day: string;
  temperature: string;
  precipitation: string;
  status: "low" | "medium" | "ideal" | "storm";
  weather: "sunny" | "rain" | "cloudy";
}

export interface ITripRouteStop {
  name: string;
  coordinate: string;
  elevation: string;
  badge: string;
  danger?: boolean;
}

export interface IMissionAlert {
  title: string;
  description: string;
  type: "danger" | "warning" | "info";
}

export interface ISafetyContact {
  title: string;
  phone: string;
  subtitle: string;
}

export interface ILodging {
  id: string;
  nights: string;
  title: string;
  description: string;
  image?: string;
  status: "available" | "limited";
}

export interface IMeal {
  type: string;
  title: string;
}

export interface ITripFile {
  id: string;
  title: string;
  meta: string;
  type: "pdf" | "gpx";
}

export interface ITripReport {
  id: string;
  title: string;
  subtitle: string;

  overview: {
    duration: string;
    distance: string;
    difficulty: string;
    risk: string;
    maxElevation: string;
  };

  briefing: {
    classification: string;
    description: string;
    tags: string[];
  };

  weather: ITripReportWeather[];

  route: ITripRouteStop[];

  missionAlerts: IMissionAlert[];

  highlights: {
    bestSummitDay: string;
    stormAlert: string;
  };

  mileage: {
    total: number;
    offRoad: number;
    driveTime: string;
  };

  safetyContacts: ISafetyContact[];

  gear: {
    readiness: number;

    checklist: {
      title: string;
      completed: boolean;
      danger?: boolean;
    }[];

    vehicleDescription: string;
    tires: string;
    recovery: string;
  };

  lodging: ILodging[];

  sustainment: {
    waterPerDay: string;
    reservoir: number;
    note: string;
    meals: IMeal[];
  };

  files: ITripFile[];
}