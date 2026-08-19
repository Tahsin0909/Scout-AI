"use client";

import { Logo } from "@/components/logo/Logo";
import LightDark from "@/components/switcher/Switcher";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { Account } from "./Account";
import { DesktopMenu } from "./DesktopMenu";
import { GetStarted } from "./GetStarted";
import { MobileMenu } from "./MobileMenu";
import { SignInButton } from "./SignInButton";

export const Navbar = () => {
  const { isAuthenticated, token } = useAuth();

  return (
    <header className="lg:py-5 py-4 bg-dark-primary text-white sticky top-0 left-0 right-0  z-50">
      <div className="container">
        <div className="flex items-center justify-between gap-2">
          <div>
            <Logo forceWhite />
          </div>
          <div>
            <DesktopMenu />
          </div>
          <div className="flex items-center sm:gap-[18px] gap-3">
            <LightDark />
            <MobileMenu />
            <div className="xl:block hidden">
              {isAuthenticated && token ? <Account /> : <div className="flex justify-center items-center gap-2">
                <SignInButton />
                <GetStarted />
              </div>}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
