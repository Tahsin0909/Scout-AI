"use client";

import { AppSidebar } from "@/components/app-sidebar/AppSidebar";
import DashboardFooter from "@/components/footer/components/DashboardFooter";
import Header from "@/components/header/Header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import type { CSSProperties } from "react";

const DashboardLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <SidebarProvider
            style={
                {
                    "--sidebar-width": "17.5rem",
                } as CSSProperties
            }
        >
            <AppSidebar />
            <SidebarInset className="outline outline-border m-2 rounded-xl overflow-hidden">
                {/* Top Header  */}
                <Header />
                <div className="flex flex-1 flex-col gap-4 p-4">
                    {/* Body Content  */}
                    <div                    >
                        <div className="min-h-[calc(100vh-140px)] ">{children}</div>
                        <div className="pt-6">
                            <DashboardFooter />
                        </div>
                    </div>
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
};

export default DashboardLayout;
