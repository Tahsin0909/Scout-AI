import {
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import { AboutInformation, AgreementInformation, PartnerApplicationState, PartnerStep, PersonalInformation, SocialAccount, SocialPlatform } from "../partnership.interface";


const initialState: PartnerApplicationState = {
  step: 1,

  personal: {
    fullName: "",
    email: "",
    phone: "",
    location: "",
  },

  social: {
    primaryPlatform: "Instagram",
    primaryUrl: "",

    additionalAccounts: [
      {
        id: "initial-tiktok",
        platform: "TikTok",
        url: "",
      },
      {
        id: "initial-youtube",
        platform: "YouTube",
        url: "",
      },
    ],

    confirmOwnership: false,
  },

  about: {
    history: "",
    motivation: "",
    fit: "",
  },

  agreements: {
    partnerAgreement: false,
    platformTerms: false,
    informationAccuracy: false,
  },
};

const partnerApplicationSlice = createSlice({
  name: "partnerApplication",
  initialState,

  reducers: {
    setPartnerStep(
      state,
      action: PayloadAction<PartnerStep>,
    ) {
      state.step = action.payload;
    },

    updatePersonalField(
      state,
      action: PayloadAction<{
        field: keyof PersonalInformation;
        value: string;
      }>,
    ) {
      state.personal[action.payload.field] =
        action.payload.value;
    },

    setPrimaryPlatform(
      state,
      action: PayloadAction<SocialPlatform>,
    ) {
      state.social.primaryPlatform =
        action.payload;
    },

    setPrimaryUrl(
      state,
      action: PayloadAction<string>,
    ) {
      state.social.primaryUrl =
        action.payload;
    },

    setConfirmOwnership(
      state,
      action: PayloadAction<boolean>,
    ) {
      state.social.confirmOwnership =
        action.payload;
    },

    addSocialAccount(
      state,
      action: PayloadAction<SocialAccount>,
    ) {
      state.social.additionalAccounts.push(
        action.payload,
      );
    },

    updateSocialAccount(
      state,
      action: PayloadAction<{
        id: string;
        changes: Partial<
          Omit<SocialAccount, "id">
        >;
      }>,
    ) {
      const account =
        state.social.additionalAccounts.find(
          item =>
            item.id ===
            action.payload.id,
        );

      if (account) {
        Object.assign(
          account,
          action.payload.changes,
        );
      }
    },

    removeSocialAccount(
      state,
      action: PayloadAction<string>,
    ) {
      state.social.additionalAccounts =
        state.social.additionalAccounts.filter(
          account =>
            account.id !==
            action.payload,
        );
    },

    updateAboutField(
      state,
      action: PayloadAction<{
        field: keyof AboutInformation;
        value: string;
      }>,
    ) {
      state.about[action.payload.field] =
        action.payload.value;
    },

    updateAgreement(
      state,
      action: PayloadAction<{
        field: keyof AgreementInformation;
        value: boolean;
      }>,
    ) {
      state.agreements[action.payload.field] =
        action.payload.value;
    },

    resetPartnerApplication() {
      return initialState;
    },
  },
});

export const {
  setPartnerStep,
  updatePersonalField,
  setPrimaryPlatform,
  setPrimaryUrl,
  setConfirmOwnership,
  addSocialAccount,
  updateSocialAccount,
  removeSocialAccount,
  updateAboutField,
  updateAgreement,
  resetPartnerApplication,
} = partnerApplicationSlice.actions;



export const partnershipReducer = partnerApplicationSlice.reducer;
