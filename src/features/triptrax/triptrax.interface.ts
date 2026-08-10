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
  exposure: RiskLevel;
  remoteness: RiskLevel;
}

export interface WaterDetails {
  requirement: WaterRequirement;
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