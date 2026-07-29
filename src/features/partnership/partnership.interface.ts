export const SOCIAL_PLATFORMS = [
  "Instagram",
  "TikTok",
  "YouTube",
  "Facebook",
  "X",
  "LinkedIn",
  "Other",
] as const;

export type SocialPlatform =
  (typeof SOCIAL_PLATFORMS)[number];

export type PartnerStep = 1 | 2 | 3;

export type PersonalInformation = {
  fullName: string;
  email: string;
  phone: string;
  location: string;
};

export type SocialAccount = {
  id: string;
  platform: SocialPlatform;
  url: string;
};

export type AboutInformation = {
  history: string;
  motivation: string;
  fit: string;
};

export type AgreementInformation = {
  partnerAgreement: boolean;
  platformTerms: boolean;
  informationAccuracy: boolean;
};

export type PartnerApplicationState = {
  step: PartnerStep;

  personal: PersonalInformation;

  social: {
    primaryPlatform: SocialPlatform;
    primaryUrl: string;
    additionalAccounts: SocialAccount[];
    confirmOwnership: boolean;
  };

  about: AboutInformation;

  agreements: AgreementInformation;
};

export type IPartnership = {
  id: string
};

export interface IReferral {
  id: string;
  date: string;
  firstName: string;
  lastName: string;
  membership: string;
  commission: number;
}