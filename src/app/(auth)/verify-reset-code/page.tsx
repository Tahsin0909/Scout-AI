import AuthPageLayout from "@/features/auth/components/AuthPageLayout";
import VerifyResetCodeForm from "@/features/auth/components/VerifyResetCodeForm";
import type { Metadata } from "next";
import { redirect } from "next/navigation";



export const metadata: Metadata = {
    title: "Verify Reset Code | Scout Ai",
    description:
        "Verify your password reset code.",
};

type VerifyResetCodePageProps = {
    searchParams: Promise<{
        email?: string | string[];
    }>;
};

function getParam(
    value: string | string[] | undefined,
): string | undefined {
    return Array.isArray(value)
        ? value[0]
        : value;
}

export default async function VerifyResetCodePage({
    searchParams,
}: VerifyResetCodePageProps) {
    const params = await searchParams;

    const email = getParam(params.email);

    if (!email) {
        redirect("/forgot-password");
    }

    return (
        <AuthPageLayout
            sidebarImage="/otpSidebar.png"
            sidebarHeading="Plan. Track. Go."
            sidebarDescription="Every plan is powered by advanced AI research and reviewed by a human adventure specialist."
            sidebarQuote="The Most Comprehensive AI-Powered Adventure Planning Platform We’ve Tested."
            sidebarQuoteAuthor="Outside Magazine"
            sidebarImagePosition="center"
        >
            <VerifyResetCodeForm email={email} />
        </AuthPageLayout>
    );
}