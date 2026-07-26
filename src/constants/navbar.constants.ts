// navbar.constants.ts
import { IRole } from "@/features/user/user.interface";
import { IMenu } from "../components/navbar/navbar.interface";

// All available menu items (similar to sidebar structure)
export const ALL_NAVBAR_MENU_ITEMS: Record<string, IMenu> = {
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
  [IRole.USER]: ["memberships", "articles", "about", "contact", "explore"],
  [IRole.PARTNER]: ["memberships", "articles", "about", "contact", "explore", "partnership"],
};
