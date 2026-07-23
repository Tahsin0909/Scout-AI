import AuthSidebar from "@/features/auth/components/AuthSidebar";
import type { ReactNode } from "react";


type AuthLayoutProps = {
    children: ReactNode;
};

export default function AuthLayout({
    children,
}: AuthLayoutProps) {
    return (
        <main className="min-h-screen bg-background">
            <div className="grid min-h-screen lg:grid-cols-2">
                <AuthSidebar />

                <section
                    className="
            relative flex min-h-screen
            items-center justify-center
            bg-background px-5 py-10
            sm:px-8
            lg:px-12 lg:py-14
            xl:px-20
          "
                >
                    <div className="w-full max-w-[500px]">
                        {children}
                    </div>
                </section>
            </div>
        </main>
    );
}