import AuthPageLayout from "@/features/auth/components/AuthPageLayout";
import VerifyEmailForm from "@/features/auth/components/VerifyEmailForm";
import type { Metadata } from "next";


export const metadata: Metadata = {
    title: "Verify Email | TripTrax",
    description: "Verify your email address to continue.",
};

export default function VerifyEmailPage() {
    return (
        <AuthPageLayout
            sidebarImage="/otpSidebar.jpg"
            sidebarHeading="Plan. Track. Go."
            sidebarDescription="Every plan is powered by advanced AI research and reviewed by a human adventure specialist, ensuring every detail is expedition-ready."
            sidebarQuote="The Most Comprehensive AI-Powered Adventure Planning Platform We’ve Tested."
            sidebarQuoteAuthor="Outside Magazine"
            sidebarImagePosition="center"
        >
            <VerifyEmailForm email="you@example.com" />
        </AuthPageLayout>
    );
}