import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  ITripReport,
  TripWizardAction,
  TripWizardState,
} from "../triptrax.interface";

interface TriptraxSliceState {
  tripReport: ITripReport | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: TriptraxSliceState = {
  tripReport: null,
  isLoading: false,
  error: null,
};

export const triptraxSlice = createSlice({
  name: "triptrax",
  initialState,

  reducers: {
    setTripReport: (state, action: PayloadAction<ITripReport>) => {
      state.tripReport = action.payload;
      state.error = null;
    },

    clearTripReport: (state) => {
      state.tripReport = null;
      state.error = null;
    },

    setTripReportLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },

    setTripReportError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const {
  setTripReport,
  clearTripReport,
  setTripReportLoading,
  setTripReportError,
} = triptraxSlice.actions;

export const triptraxReducer = triptraxSlice.reducer;

/* -------------------------------------------------------------------------- */
/*                            TRIP WIZARD REDUCER                             */
/* -------------------------------------------------------------------------- */

export const initialTripWizardState: TripWizardState = {
  step: 1,

  adventureMode: "hiking",

  trip: {
    name: "",
    region: "",
    startDate: "",
    endDate: "",
    startLocation: "",
    endLocation: "",
  },

  group: {
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    adults: 1,
    children: 1,
    travelingWithPets: false,
    fitnessLevel: "high",
    experienceLevel: "beginner",
    medicalConditions: ["Asthma", "Heart Conditions"],
    otherConditions: "",
  },

  preferences: {
    tripType: "day-hike",
    multiDayStyle: "",
    maximumDailyMileage: "5",
    maximumElevationGain: "negative-500",
    trailStyles: ["loop"],
    preferredDifficulty: "easy",
    preferredPacing: "relaxed",
  },

  risk: {
    exposure: "low",
    remoteness: "low",
  },

  water: {
    requirement: null,
  },

  submitted: false,
};

export const tripWizardReducer = (
  state: TripWizardState,
  action: TripWizardAction,
): TripWizardState => {
  switch (action.type) {
    case "NEXT_STEP":
      return {
        ...state,
        step: Math.min(state.step + 1, 8),
      };

    case "PREVIOUS_STEP":
      return {
        ...state,
        step: Math.max(state.step - 1, 1),
      };

    case "GO_TO_STEP":
      return {
        ...state,
        step: action.payload,
      };

    case "SET_ADVENTURE_MODE":
      return {
        ...state,
        adventureMode: action.payload,
      };

    case "UPDATE_TRIP":
      return {
        ...state,
        trip: {
          ...state.trip,
          ...action.payload,
        },
      };

    case "UPDATE_GROUP":
      return {
        ...state,
        group: {
          ...state.group,
          ...action.payload,
        },
      };

    case "UPDATE_PREFERENCES":
      return {
        ...state,
        preferences: {
          ...state.preferences,
          ...action.payload,
        },
      };

    case "UPDATE_RISK":
      return {
        ...state,
        risk: {
          ...state.risk,
          ...action.payload,
        },
      };

    case "UPDATE_WATER":
      return {
        ...state,
        water: {
          ...state.water,
          ...action.payload,
        },
      };

    case "SUBMIT_TRIP":
      return {
        ...state,
        submitted: true,
      };

    case "CLOSE_SUCCESS":
      return {
        ...state,
        submitted: false,
      };

    case "RESET":
      return initialTripWizardState;

    default:
      return state;
  }
};