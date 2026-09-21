import AuthPageLayout from "@/features/auth/components/AuthPageLayout";
import ForgotPasswordForm from "@/features/auth/components/ForgotPasswordForm";
import type { Metadata } from "next";



export const metadata: Metadata = {
    title: "Forgot Password | Scout Ai",
    description:
        "Request a verification code to reset your password.",
};

export default function ForgotPasswordPage() {
    return (
        <AuthPageLayout
            sidebarImage="/otpSidebar.jpg"
            sidebarHeading="Plan. Track. Go."
            sidebarDescription="Every plan is powered by advanced AI research and reviewed by a human adventure specialist, ensuring every detail is expedition-ready."
            sidebarQuote="The Most Comprehensive AI-Powered Adventure Planning Platform We’ve Tested."
            sidebarQuoteAuthor="Outside Magazine"
            sidebarImagePosition="center"
        >
            <ForgotPasswordForm />
        </AuthPageLayout>
    );
}