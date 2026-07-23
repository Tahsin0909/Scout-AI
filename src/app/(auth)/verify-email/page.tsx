import AuthPageLayout from "@/features/auth/components/AuthPageLayout";
import VerifyEmailForm from "@/features/auth/components/VerifyEmailForm";
import type { Metadata } from "next";


export const metadata: Metadata = {
    title: "Verify Email | TripTrax",
    description: "Verify your email address to continue.",
};

type VerifyEmailPageProps = {
    searchParams: Promise<{
        plan?: string | string[];
        billing?: string | string[];
    }>;
};

function getSearchParam(
    value: string | string[] | undefined,
) {
    return Array.isArray(value) ? value[0] : value;
}

export default async function VerifyEmailPage({
    searchParams,
}: VerifyEmailPageProps) {
    const params = await searchParams;

    const plan =
        getSearchParam(params.plan) ?? "trailhead";

    const billing =
        getSearchParam(params.billing) ?? "standard";

    return (
        <AuthPageLayout
            sidebarImage="/otpSidebar.png"
            sidebarHeading="Plan. Track. Go."
            sidebarDescription="Every plan is powered by advanced AI research and reviewed by a human adventure specialist."
            sidebarQuote="The Most Comprehensive AI-Powered Adventure Planning Platform We’ve Tested."
            sidebarQuoteAuthor="Outside Magazine"
        >
            <VerifyEmailForm
                email="you@example.com"
                plan={plan}
                billing={billing}
            />
        </AuthPageLayout>
    );
}