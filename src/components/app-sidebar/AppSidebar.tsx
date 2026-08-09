"use client";

import { AppUser } from "@/components/app-user/AppUser";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { useSidebarMenu } from "@/hooks/useSidebarMenu";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { IRole } from "@/features/user/user.interface";
import { cn } from "@/lib/utils"; // <- shadcn utility
import { ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "../logo/Logo";

export const AppSidebar = () => {
  const [openItems, setOpenItems] = useState<string[]>(["Analytics"]);
  const pathname = usePathname();
  const sidebarMenu = useSidebarMenu();
  const { getUserRole } = useAuth();
  const role = getUserRole() || IRole.USER;

  const toggleItem = (title: string) => {
    setOpenItems((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item !== title)
        : [...prev, title]
    );
  };

  return (
    <Sidebar className="shadow-[0_10px_30px_0_rgba(38,3,71,0.06)] !border-0">
      {/* Logo */}
      <SidebarHeader className="py-4 md:px-5 px-1">
        <Logo />
      </SidebarHeader>

      {/* Sidebar Menu */}
      <SidebarContent className="md:px-5 px-2 flex flex-col justify-between h-full">
        <SidebarGroup className="p-0">
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarMenu.map((item) => {
                const isParentActive =
                  item.items?.some((sub) => pathname.startsWith(sub.url)) ||
                  pathname === item.url;

                return (
                  <SidebarMenuItem key={item.title}>
                    {item.items ? (
                      <Collapsible
                        open={openItems.includes(item.title)}
                        onOpenChange={() => toggleItem(item.title)}
                      >
                        <CollapsibleTrigger asChild>
                          <SidebarMenuButton
                            tooltip={item.title}
                            className={cn(
                              "[&>svg:first-child]:size-5 md:p-3 p-2",
                              isParentActive
                                ? "bg-primary-100 text-black"
                                : "text-muted-foreground hover:bg-muted"
                            )}
                            asChild
                          >
                            <Link href={item.url} className="h-auto text-base">
                              <item.icon className="w-6 h-6 object-contain" />
                              <span className="text-base font-medium">
                                {item.title}
                              </span>
                              {openItems.includes(item.title) ? (
                                <ChevronDown className="ml-auto size-4" />
                              ) : (
                                <ChevronRight className="ml-auto size-4" />
                              )}
                            </Link>
                          </SidebarMenuButton>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <SidebarMenuSub>
                            {item.items.map((subItem) => {
                              const isSubActive = pathname === subItem.url;

                              return (
                                <SidebarMenuSubItem key={subItem.title}>
                                  <SidebarMenuSubButton asChild>
                                    <Link
                                      href={subItem.url}
                                      className={cn(
                                        "text-base",
                                        isSubActive
                                          ? "!text-primary font-medium"
                                          : "text-muted-foreground hover:text-foreground"
                                      )}
                                    >
                                      <span className="text-inherit">
                                        {subItem.title}
                                      </span>
                                    </Link>
                                  </SidebarMenuSubButton>
                                </SidebarMenuSubItem>
                              );
                            })}
                          </SidebarMenuSub>
                        </CollapsibleContent>
                      </Collapsible>
                    ) : (
                      <SidebarMenuButton
                        tooltip={item.title}
                        className={cn(
                          "[&>svg:first-child]:size-5 md:p-3 p-2",
                          pathname === item.url
                            ? "bg-primary-100 text-black"
                            : "text-muted-foreground hover:bg-muted"
                        )}
                        asChild
                      >
                        <Link href={item.url} className="h-auto text-base">
                          <item.icon className="w-6 h-6 object-contain" />
                          <span className="text-base font-medium">
                            {item.title}
                          </span>
                        </Link>
                      </SidebarMenuButton>
                    )}
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Plus - Go Further Membership Card (Only shown when role is USER) */}
        {role === IRole.USER && (
          <div className="mt-auto pt-6 px-1 group-data-[collapsible=icon]:hidden">
            <div className="p-4 rounded-xl bg-[#1E1E22] border border-neutral-800/80 shadow-md relative overflow-hidden">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-white">Plus &ndash; Go Further</span>
                <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  Active
                </span>
              </div>
              <div className="flex items-center justify-between text-xs text-neutral-400 mb-1.5 font-medium">
                <span>1/2 Credits</span>
                <span>50%</span>
              </div>
              {/* Progress Bar */}
              <div className="w-full bg-neutral-800 h-2 rounded-full overflow-hidden mb-3">
                <div
                  className="bg-[#FACC15] h-full rounded-full transition-all duration-500"
                  style={{ width: "50%" }}
                />
              </div>
              <Link
                href="/user/membership"
                className="w-full bg-[#FACC15] hover:bg-[#eab308] text-black font-semibold text-xs py-2.5 px-3 rounded-lg text-center transition-colors block shadow-sm"
              >
                Manage Membership
              </Link>
            </div>
          </div>
        )}
      </SidebarContent>

      {/* User */}
      <SidebarFooter className="md:px-5 px-1">
        <AppUser />
      </SidebarFooter>
    </Sidebar>
  );
};
