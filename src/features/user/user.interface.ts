export enum IRole {
  ADMIN = "ADMIN",
  USER = "USER",
  PARTNER = "PARTNER",
}

export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  profileImage: string | null;
  location: string;
  phoneNumber: string;
  role: IRole;
  isActive: boolean;
  hasActiveSubscription: boolean;
  stripeCustomerId: string;
  createdAt: string;
  updatedAt: string;
  referralLink?: string;
  referralCode?: string;
}

export type TCreateUser = {
  firstName: string
  lastName: string
  email: string
  companyName: string
  jobTitle: string
  jobFunction: string
  country: string
  jobLevel: string
  companyIndustry: string
  companySize: string
  postalCode: string
  phone: string
}


export interface UserProfileCardProps {
  user: IUser | null;
  onProfileUpdate?: (data: {
    fullName: string;
    email: string;
    phoneNumber: string;
    location: string;
    photo?: File | null;
  }) => void | Promise<void>;
  onPasswordUpdate?: (data: {
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
  }) => void | Promise<void>;
  onDeleteAccount?: () => void | Promise<void>;
}

export interface ProfileFormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  location: string;
}

export interface PasswordFormData {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}