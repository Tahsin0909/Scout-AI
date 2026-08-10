import { createSlice } from "@reduxjs/toolkit";
import { TripWizardAction, TripWizardState } from "../triptrax.interface";



export const triptraxSlice = createSlice({
  name: "triptrax",
  initialState: {},
  reducers: {},
});

export const { } = triptraxSlice.actions;
export const triptraxReducer = triptraxSlice.reducer;

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