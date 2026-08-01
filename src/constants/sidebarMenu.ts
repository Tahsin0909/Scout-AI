import { IRole } from "@/features/user/user.interface";
import { SidebarMenuItem } from "@/types/sidebar";
import {
  BadgeDollarSign,
  BookOpenText,
  Handshake,
  LayoutDashboard,
  Lightbulb,
  Map,
  ReceiptText,
  UserCog,
  WalletCards
} from "lucide-react";

export const ALL_MENU_ITEMS: Record<string, SidebarMenuItem> = {
  adminOverview: {
    title: "Overview",
    icon: LayoutDashboard,
    url: "/admin-overview",
  },

  adminTripPackages: {
    title: "Trip Packages",
    icon: Map,
    url: "/admin/trip-packages",
  },

  adminUserManagement: {
    title: "User Management",
    icon: UserCog,
    url: "/admin/users",
  },

  adminSubscription: {
    title: "Subscriptions",
    icon: BadgeDollarSign,
    url: "/admin/subscriptions",
  },

  adminPayment: {
    title: "Payments",
    icon: ReceiptText,
    url: "/admin/payments",
  },

  adminContentManagement: {
    title: "Content Management",
    icon: BookOpenText,
    url: "/admin/content",
  },

  adminPartnerShip: {
    title: "Partnerships",
    icon: Handshake,
    url: "/admin/partnerships",
  },

  userOverview: {
    title: "Overview",
    icon: LayoutDashboard,
    url: "/user-overview",
  },

  userTips: {
    title: "Travel Trips",
    icon: Lightbulb,
    url: "/user/travel-trips",
  },

  userMembership: {
    title: "Membership",
    icon: WalletCards,
    url: "/user/membership",
  },
};

export const COMMON_ROUTES = [
  "/profile",
  "/settings",
  "/change-password",
  "/notifications",
];

export const ROLE_MENU_CONFIG: Record<IRole, string[]> = {
  [IRole.ADMIN]: [
    "adminOverview",
    "adminTripPackages",
    "adminUserManagement",
    "adminSubscription",
    "adminPayment",
    "adminContentManagement",
    "adminPartnerShip",

  ],
  [IRole.USER]: [
    "userOverview", "userTips", "userMembership"
  ],
  [IRole.PARTNER]: []
};
