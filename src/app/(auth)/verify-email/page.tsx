import AuthPageLayout from "@/features/auth/components/AuthPageLayout";
import VerifyEmailForm from "@/features/auth/components/VerifyEmailForm";
import { resolveBilling, resolvePlan } from "@/lib/plan-query";
import type { Metadata } from "next";


export const metadata: Metadata = {
    title: "Verify Email | Scout Ai",
    description: "Verify your email address to continue.",
};

type VerifyEmailPageProps = {
    searchParams: Promise<{
        plan?: string | string[];
        billing?: string | string[];
        email?: string;
    }>;
};


export default async function VerifyEmailPage({
    searchParams,
}: VerifyEmailPageProps) {
    const params = await searchParams;

    const email = params.email;
    const plan = resolvePlan(params.plan);
    const billing = resolveBilling(params.billing);

    return (
        <AuthPageLayout
            sidebarImage="/otpSidebar.jpg"
            sidebarHeading="Plan. Track. Go."
            sidebarDescription="Every plan is powered by advanced AI research and reviewed by a human adventure specialist."
            sidebarQuote="The Most Comprehensive AI-Powered Adventure Planning Platform We’ve Tested."
            sidebarQuoteAuthor="Outside Magazine"
        >
            <VerifyEmailForm
                email={email ?? "your mail"}
                plan={plan}
                billing={billing}
            />
        </AuthPageLayout>
    );
}