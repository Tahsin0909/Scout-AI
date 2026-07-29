"use client";

import AccountIcon from "@/assets/navbar/account.svg";
import CrownIcon from "@/assets/navbar/crown.svg";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { ChevronDown, LogOut } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useAccountMenu } from "../hooks/use-navbar-menu";

export const Account = () => {
  const { profile, handleLogout } = useAuth();
  const { accountMenu } = useAccountMenu();

  const onLogout = () => {
    handleLogout();
  };

  return (
    <div className="flex items-center justify-center gap-3">
      {/* {
        !profile?.hasActiveSubscription && <UpGradePlan />
      } */}
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center justify-center md:text-lg text-sm text-white hover:text-primary font-work-sans font-medium transition-colors duration-300 md:gap-2 gap-1 outline-none rounded-xl md:px-4 px-2 md:py-2 py-1.5">
          <Image
            src={profile?.profileImage ?? AccountIcon}
            width={18}
            height={18}
            alt="Plane Icon"
            className="md:w-[35px] w-[14px] md:h-[35px] object-contain rounded-full"
          />
          <span>My Account</span>
          <ChevronDown className="md:w-[20px] w-[16px] object-contain" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[214px] p-2" align="start">
          <div className="flex items-center gap-3.5 px-2 mb-2">
            <span className="text-sm font-semibold text-popover-foreground">
              Hi, {profile?.firstName || "User"}
            </span>
            {profile?.hasActiveSubscription ? (
              <Badge
                variant="outline"
                className="border-almond-yellow text-almond-yellow bg-almond-yellow/[13%] py-1 px-2.5 leading-[1em]"
              >
                <Image
                  src={CrownIcon}
                  width={11}
                  height={11}
                  alt="Crown Icon"
                  className="md:w-[11px] w-[11px] md:h-[11px] object-contain"
                />
                Premium
              </Badge>
            ) : (
              <Badge
                variant="outline"
                className="border-almond-yellow text-almond-yellow bg-light-yellow py-1 px-2.5 leading-[1em]"
              >
                Free
              </Badge>
            )}
          </div>

          <DropdownMenuSeparator className="mt-3" />

          {accountMenu.map((item) => (
            <DropdownMenuItem key={item.href} asChild>
              <Link
                href={item.href ?? '/'}
                className="flex items-center gap-2 py-1.5 cursor-pointer rounded-lg text-sm text-foreground"
              >
                {item.label}
              </Link>
            </DropdownMenuItem>
          ))}

          <DropdownMenuSeparator />

          <DropdownMenuItem asChild>
            <div
              onClick={onLogout}
              className="flex items-center gap-2 py-1.5  cursor-pointer rounded-lg text-sm text-foreground"
            >
              <LogOut className="w-3.5 h-3.5 !text-inherit" />
              Log out
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
