import AuthPageLayout from "@/features/auth/components/AuthPageLayout";
import ResetPasswordForm from "@/features/auth/components/ResetPasswordForm";
import type { Metadata } from "next";
import { redirect } from "next/navigation";



export const metadata: Metadata = {
    title: "Create New Password | Scout Ai",
    description:
        "Create a new password for your Scout Ai account.",
};

type ResetPasswordPageProps = {
    searchParams: Promise<{
        email?: string | string[];
        token?: string | string[];
    }>;
};

function getParam(
    value: string | string[] | undefined,
): string | undefined {
    return Array.isArray(value)
        ? value[0]
        : value;
}

export default async function ResetPasswordPage({
    searchParams,
}: ResetPasswordPageProps) {
    const params = await searchParams;

    const email = getParam(params.email);
    const token = getParam(params.token);

    if (!email || !token) {
        redirect("/forgot-password");
    }

    return (
        <AuthPageLayout
            sidebarImage="/otpSidebar.jpg"
            sidebarHeading="Plan. Track. Go."
            sidebarDescription="Every plan is powered by advanced AI research and reviewed by a human adventure specialist, ensuring every detail is expedition-ready."
            sidebarQuote="The Most Comprehensive AI-Powered Adventure Planning Platform We've Tested."
            sidebarQuoteAuthor="Outside Magazine"
            sidebarImagePosition="center"
        >
            <ResetPasswordForm
                email={email}
                resetToken={token}
            />
        </AuthPageLayout>
    );
}