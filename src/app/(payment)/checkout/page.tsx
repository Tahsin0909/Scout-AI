import type { Metadata } from "next";
import { redirect } from "next/navigation";

import {
    getPlanById,
    type BillingType,
} from "@/components/pricing/data/pricing";
import CheckoutClient from "@/features/payment/components/CheckoutClient";

export const metadata: Metadata = {
    title: "Secure Checkout | Apex Adventure Lab",
    description:
        "Review your membership and securely complete your payment.",
};

type CheckoutPageProps = {
    searchParams: Promise<{
        plan?: string | string[];
        billing?: string | string[];
    }>;
};

function getParam(
    value: string | string[] | undefined,
): string | undefined {
    return Array.isArray(value)
        ? value[0]
        : value;
}

function isBillingType(
    value: string | undefined,
): value is BillingType {
    return (
        value === "standard" ||
        value === "annual"
    );
}

export default async function CheckoutPage({
    searchParams,
}: CheckoutPageProps) {
    const params = await searchParams;

    const planId = getParam(params.plan);
    const billing = getParam(params.billing);

    if (
        !planId ||
        !isBillingType(billing)
    ) {
        redirect("/memberships");
    }

    const plan = getPlanById(planId);

    if (!plan || !plan.isActive) {
        redirect("/memberships");
    }

    return (
        <CheckoutClient
            key={`${plan.id}-${billing}`}
            billing={billing}
            plan={{
                id: plan.id,
                slug: plan.slug,
                name: plan.name,
                tagline: plan.tagline,
                features: plan.features,

                prices: {
                    standard: {
                        monthlyEquivalent:
                            plan.prices.standard
                                .monthlyEquivalent,

                        amount:
                            plan.prices.standard
                                .amount,

                        currency:
                            plan.prices.standard
                                .currency,

                        interval:
                            plan.prices.standard
                                .interval,
                    },

                    annual: {
                        monthlyEquivalent:
                            plan.prices.annual
                                .monthlyEquivalent,

                        amount:
                            plan.prices.annual
                                .amount,

                        currency:
                            plan.prices.annual
                                .currency,

                        interval:
                            plan.prices.annual
                                .interval,
                    },
                },
            }}
        />
    );
}