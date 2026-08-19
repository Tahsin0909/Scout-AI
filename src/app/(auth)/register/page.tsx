import type { Metadata } from "next";


import {
    resolveBilling,
    resolvePlan,
} from "@/lib/plan-query";
import AuthPageLayout from "@/features/auth/components/AuthPageLayout";
import RegisterForm from "@/features/auth/components/RegisterForm";

export const metadata: Metadata = {
    title: "Create Account | Scout Ai",
    description:
        "Create your Scout Ai account and start planning.",
};

type RegisterPageProps = {
    searchParams: Promise<{
        plan?: string | string[];
        billing?: string | string[];
    }>;
};

export default async function RegisterPage({
    searchParams,
}: RegisterPageProps) {
    const params = await searchParams;

    const plan = resolvePlan(params.plan);
    const billing = resolveBilling(params.billing);

    return (
        <AuthPageLayout
            sidebarImage="/registerSidebar.png"
            sidebarHeading="Start Your Next Expedition."
            sidebarDescription="Powered by advanced AI and reviewed by experienced adventure specialists. Every package is tailored to your journey and built with precision."
            sidebarQuote="The Most Comprehensive AI-Powered Adventure Planning Platform We’ve Tested."
            sidebarQuoteAuthor="Outside Magazine"
            sidebarImagePosition="center"
        >
            <RegisterForm
                plan={plan}
                billing={billing}
            />
        </AuthPageLayout>
    );
}