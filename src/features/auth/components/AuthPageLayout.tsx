import type { ReactNode } from "react";

import AuthSidebar from "./AuthSidebar";

type AuthPageLayoutProps = {
    children: ReactNode;
    sidebarImage: string;
    sidebarHeading?: string;
    sidebarDescription?: string;
    sidebarQuote?: string;
    sidebarQuoteAuthor?: string;
    sidebarImagePosition?: string;
};

export default function AuthPageLayout({
    children,
    sidebarImage,
    sidebarHeading,
    sidebarDescription,
    sidebarQuote,
    sidebarQuoteAuthor,
    sidebarImagePosition,
}: AuthPageLayoutProps) {
    return (
        <main className="min-h-screen bg-background">
            <div className="grid min-h-screen lg:grid-cols-2">
                <AuthSidebar
                    backgroundImage={sidebarImage}
                    heading={sidebarHeading}
                    description={sidebarDescription}
                    quote={sidebarQuote}
                    quoteAuthor={sidebarQuoteAuthor}
                    backgroundPosition={sidebarImagePosition}
                />

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