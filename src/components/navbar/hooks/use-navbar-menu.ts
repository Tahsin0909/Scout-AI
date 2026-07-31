"use client";

import { useAuth } from "@/features/auth/hooks/useAuth";
import { useMemo } from "react";
import { getNavbarAccountMenu, getNavbarMenu } from "../navbar.utils";

export const useNavbarMenu = () => {
  const { getUserRole, isAuthenticated } = useAuth();
  const role = getUserRole();

  const navbarMenu = useMemo(() => {
    return getNavbarMenu(role, isAuthenticated);
  }, [role, isAuthenticated]);

  return navbarMenu;
};

export const useAccountMenu = () => {
  const { getUserRole } = useAuth();
  const role = getUserRole();

  const navbarMenu = useMemo(() => {
    return getNavbarAccountMenu(role);
  }, [role]);

  return navbarMenu;
};

