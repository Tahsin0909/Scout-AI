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
  id: string;
};

export interface IReferral {
  id: string;
  date: string;
  firstName: string;
  lastName: string;
  membership: string;
  commission: number;
}

/* -------------------------------------------------------------------------- */
/*                         PARTNER DETAILS / PERFORMANCE                       */
/* -------------------------------------------------------------------------- */

export type PartnerStatus =
  | "active"
  | "inactive"
  | "suspended";

export type PartnerTier =
  | "Member"
  | "Plus"
  | "Prime"
  | "Elite";

export interface IPartnerDetails {
  id: string;

  fullName: string;
  email: string;
  phone: string;
  location: string;

  avatar: string;

  status: PartnerStatus;
  tier: PartnerTier;

  joinedAt: string;

  totalRevenue: number;
  totalReferrals: number;

  socialAccounts: SocialAccount[];
}

/* -------------------------------------------------------------------------- */
/*                              REFERRAL CHART                                 */
/* -------------------------------------------------------------------------- */

export interface IReferralChartData {
  label: string;
  value: number;
  isCurrent?: boolean;
  tooltip?: string;
}

/* -------------------------------------------------------------------------- */
/*                           CONVERSION METRICS                                */
/* -------------------------------------------------------------------------- */

export type ConversionMetricType =
  | "click-through"
  | "lead-to-sale"
  | "retention";

export interface IConversionMetric {
  type: ConversionMetricType;
  label: string;
  percentage: number;
  value: number;
  color: string;
}

/* -------------------------------------------------------------------------- */
/*                              PARTNER CONTENT                                */
/* -------------------------------------------------------------------------- */

export type PartnerContentStatus =
  | "active"
  | "inactive";

export interface IPartnerContent {
  id: string;
  platform: SocialPlatform;
  postLink: string;
  status: PartnerContentStatus;
}

/* -------------------------------------------------------------------------- */
/*                          PARTNER DETAILS PAGE                               */
/* -------------------------------------------------------------------------- */

export interface IPartnerPerformance {
  referralFlow: IReferralChartData[];
  conversionMetrics: IConversionMetric[];
}

export interface IPartnerDetailsData {
  partner: IPartnerDetails;
  performance: IPartnerPerformance;
  content: IPartnerContent[];
}

export type PartnerDetailsTab =
  | "performance"
  | "content";