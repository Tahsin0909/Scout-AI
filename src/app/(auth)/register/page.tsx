import AuthPageLayout from "@/features/auth/components/AuthPageLayout";
import RegisterForm from "@/features/auth/components/RegisterForm";
import type { Metadata } from "next";



export const metadata: Metadata = {
    title: "Create Account | TripTrax",
    description: "Create your TripTrax account and start planning.",
};

export default function RegisterPage() {
    return (
        <AuthPageLayout
            sidebarImage="/registerSidebar.png"
            sidebarHeading="Start Your Next Expedition."
            sidebarDescription="Powered by advanced AI and reviewed by experienced adventure specialists. Every package is tailored to your journey and built with precision."
            sidebarQuote="The Most Comprehensive AI-Powered Adventure Planning Platform We’ve Tested."
            sidebarQuoteAuthor="Outside Magazine"
            sidebarImagePosition="center"
        >
            <RegisterForm />
        </AuthPageLayout>
    );
}