// navbar.constants.ts
import { IRole } from "@/features/user/user.interface";
import { IMenu } from "../components/navbar/navbar.interface";

// All available menu items (similar to sidebar structure)
export const ALL_NAVBAR_MENU_ITEMS: Record<string, IMenu> = {
  Home: {
    label: "Home",
    href: "/",
  },
  memberships: {
    label: "Memberships",
    href: "/memberships",
  },
  explore: {
    label: "Explore",
    href: "/explore",
  },
  articles: {
    label: "Articles",
    href: "/articles",
  },
  about: {
    label: "About Us",
    href: "/about",
  },
  contact: {
    label: "Contact",
    href: "/contact",
  },
  partnership: {
    label: "Partnership",
    href: "/partnership",
  },
  partnerDashboard: {
    label: "Dashboard",
    href: "/partner-dashboard",
  },
  partnerReferral: {
    label: "Referral Center",
    href: "/partner-referral",
  },
  partnerEarnings: {
    label: "Earnings",
    href: "/partner-earning",
  },
  partnerContent: {
    label: "Content",
    href: "/partner-content",
  },
  partnerAccount: {
    label: "Profile",
    href: "/partners-account",
  },
  userAccount: {
    label: "Profile",
    href: "/my-profile",
  },
  adminDashboard: {
    label: "Dashboard",
    href: "/admin",
  },
};

export const UNAUTHENTICATED_ITEMS: Record<string, IMenu> = {
  subscribe: {
    label: "Subscribe",
    children: [
      { label: "Free Plan", href: "/subscribe/free" },
      { label: "Premium Plan", href: "/subscribe/premium" },
    ],
  },
  login: {
    label: "Login",
    href: "/login",
  },
};

// Menu items for authenticated users in mobile view
export const AUTHENTICATED_MOBILE_ITEMS: Record<string, IMenu> = {
  myAccount: {
    label: "My Account",
    children: [
      { label: "Profile", href: "/profile" },
      { label: "Billing", href: "/payment/manage" },
      { label: "Settings", href: "/settings" },
      { label: "Logout", isButton: true },
    ],
  },
};

// Common routes accessible by all authenticated users
export const COMMON_NAVBAR_ROUTES = [
  "/profile",
  "/settings",
  "/payment/manage",
  "/notifications",
];

// Public menu items (accessible without authentication)
export const PUBLIC_NAVBAR_ITEMS: string[] = ["memberships", "explore", "articles", "about", "partnership", "contact"]

// Role-based menu configuration
export const ROLE_NAVBAR_MENU_CONFIG: Record<IRole, string[]> = {
  [IRole.ADMIN]: ["memberships", "articles", "about", "contact", "explore"],
  [IRole.PARTNER]: ["Home", "partnership", "partnerDashboard", "partnerReferral", "partnerEarnings", "partnerContent"],
  [IRole.USER]: ["memberships", "articles", "about", "contact", "explore", "partnership"],
};

export const ACCOUNT_MENU_CONFIG: Record<IRole, string[]> = {
  [IRole.ADMIN]: ["adminDashboard"],
  [IRole.PARTNER]: ["partnerAccount"],
  [IRole.USER]: ["userAccount"],
};