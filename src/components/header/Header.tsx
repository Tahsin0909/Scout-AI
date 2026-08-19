/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useSidebar } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { PanelLeft } from 'lucide-react';
import { Logo } from "../logo/Logo";
import LightDark from "../switcher/Switcher";
import Notifications from "../../features/notification/components/notifications";
import { usePathname } from "next/navigation";

const Header = () => {
  const { toggleSidebar } = useSidebar();
  const pathname = usePathname();

  const getPageTitle = (path: string) => {
    const routeTitles: Record<string, string> = {
      "/admin-overview": "Overview",
      "/user-overview": "Overview",
      "/dashboard": "Overview",
      "/admin/trip-packages": "Trip Packages",
      "/admin/users": "User Management",
      "/admin/subscriptions": "Subscriptions",
      "/admin/payments": "Payments",
      "/admin/content": "Content Management",
      "/admin/partnerships": "Partnership Management",
      "/user/travel-trips": "Travel Trips",
      "/user/membership": "Membership",
      "/dashboard/tips": "Travel Tips",
      "/dashboard/membership": "Membership",
      "/partner-dashboard": "Partner Dashboard",
      "/partner-earning": "Partner Earnings",
      "/partner-referral": "Partner Referral",
      "/partner-content": "Partner Content",
      "/partners-account": "Partners Account",
      "/partnership": "Partnership",
      "/partnerShip-agreement": "Partnership Agreement",
      "/partnerShip-apply": "Partnership Apply",
      "/profile": "Profile",
      "/settings": "Settings",
      "/change-password": "Change Password",
      "/notifications": "Notifications",
    };

    if (routeTitles[path]) {
      return routeTitles[path];
    }

    for (const key of Object.keys(routeTitles)) {
      if (path.startsWith(key + "/")) {
        return routeTitles[key];
      }
    }

    const segments = path.split("/").filter(Boolean);
    if (segments.length === 0) return "Overview";
    const lastSegment = segments[segments.length - 1];
    return lastSegment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const pageTitle = getPageTitle(pathname);

  return (
    <>
      <header className={cn(`sticky top-0 z-2 bg-background border-b border-border`)}>
        <nav>
          <div className="mx-auto flex flex-wrap items-center justify-between p-2">
            <div className="flex gap-2 items-center">
              <div className="block lg:hidden">
                <Logo />
              </div>

              <Button
                variant="link"
                size="icon"
                // className="p-2 hover:bg-primary/5 rounded-full transition cursor-pointer"
                onClick={toggleSidebar}
              >
                <PanelLeft size={21} />
              </Button>

              <Separator
                orientation="vertical"
                className="h-4 mr-4 ml-2 data-[orientation=vertical]:self-center max-lg:hidden"
              />

              {/* <div className="sm:flex hidden items-center">
                <span className="text-base font-semibold text-foreground tracking-wide">
                  {pageTitle}
                </span>
              </div> */}
            </div>

            <div className="flex sm:gap-1 gap-0 items-center">
              {/* Theme Toggle */}
              <LightDark />

              {/* Notifications Dropdown */}
              <Notifications className="sm:block hidden" />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
