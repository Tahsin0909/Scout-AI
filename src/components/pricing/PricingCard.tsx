import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";


import { PricingPattern } from "./PricingPattern";
import { BillingType, PricingPlan } from "./data/pricing";

type PricingCardProps = {
    plan: PricingPlan;
    annual: boolean;
    nextPage: string
};

function formatCurrency(
    amount: number,
    currency: string,
) {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency,
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
    }).format(amount);
}

export function PricingCard({
    plan,
    annual,
    nextPage
}: PricingCardProps) {
    const billing: BillingType = annual
        ? "annual"
        : "standard";

    const selectedPrice = plan.prices[billing];

    /*
     * For annual plans, monthlyEquivalent is displayed
     * while amount represents the full yearly charge.
     */
    const displayedPrice =
        selectedPrice.monthlyEquivalent;

    const registrationParams =
        new URLSearchParams({
            plan: plan.slug,
            billing,
        });

    const isSolidButton = plan.buttonVariant === "solid" || plan.featured;

    return (
        <article
            className={cn(
                `
                    relative isolate flex h-full min-h-[540px]
                    flex-col justify-between overflow-hidden rounded-2xl border
                    bg-[#1c1d22] p-6 text-white shadow-xl
                    transition-all duration-300 ease-out
                `,
                plan.featured
                    ? `
                        border-[#eab308]/60
                        bg-gradient-to-b from-[#eab308]/20 via-[#1c1d22] to-[#1c1d22]
                        shadow-[0_10px_40px_-15px_rgba(234,179,8,0.3)]
                    `
                    : `
                        border-[#2e323b]
                    `,
            )}
        >
            <PricingPattern featured={plan.featured} />

            {/* Header */}
            <div>
                <h3 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                    {plan.name}
                </h3>

                <div className="mt-2 flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                        {formatCurrency(
                            displayedPrice,
                            selectedPrice.currency,
                        )}
                    </span>
                    <span className="text-sm font-medium text-gray-400">
                        /mo
                    </span>
                </div>

                <p className="mt-2 text-xs font-semibold tracking-wide text-gray-400">
                    {plan.tagline}
                </p>

                {plan.description && (
                    <p className="mt-3 text-xs leading-relaxed text-gray-300/85">
                        {plan.description}
                    </p>
                )}

                {annual && (
                    <p className="mt-2 text-xs font-medium text-[#97B900]">
                        {formatCurrency(
                            selectedPrice.amount,
                            selectedPrice.currency,
                        )}{" "}
                        billed annually
                    </p>
                )}

                {/* Included features box */}
                <div
                    className="
                        mt-5 rounded-xl border border-white/5
                        bg-[#131418]/80 p-5
                        backdrop-blur-sm
                    "
                >
                    <h4 className="text-sm font-semibold text-gray-200">
                        Included features
                    </h4>

                    <ul className="mt-4 space-y-3">
                        {plan.features.map((feature) => (
                            <li
                                key={feature}
                                className="
                                    flex items-start gap-2.5
                                    text-xs leading-relaxed
                                    text-gray-300
                                "
                            >
                                <CheckCircle2
                                    aria-hidden="true"
                                    className="
                                        mt-0.5 size-4 shrink-0
                                        text-gray-400
                                    "
                                    strokeWidth={1.8}
                                />

                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* CTA Button */}
            <div className="mt-6">
                <Button
                    asChild
                    size="lg"
                    fullWidth
                    className={cn(
                        "w-full rounded-lg py-3 text-sm font-semibold transition-all duration-200",
                        isSolidButton
                            ? "bg-[#FACC15] text-black hover:bg-[#EAB308] border-0 shadow-md font-bold"
                            : "bg-transparent text-white border border-[#EAB308]/60 hover:bg-white/10"
                    )}
                >
                    <Link
                        href={`/${nextPage}?${registrationParams.toString()}`}
                    >
                        Get Started
                    </Link>
                </Button>
            </div>
        </article>
    );
}