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

    return (
        <article
            className={cn(
                `
                    relative isolate flex h-full min-h-[510px]
                    flex-col overflow-visible rounded-xl border
                    bg-white p-4 text-foreground
                    transition-[border-color,box-shadow,transform]
                    duration-300 ease-out
                    dark:bg-[#202020] dark:text-white
                    sm:p-5
                `,
                plan.featured
                    ? `
                        border-primary/60
                        shadow-[0_20px_60px_-34px_rgba(255,210,63,0.65)]
                        dark:border-primary/45
                    `
                    : `
                        border-black/10
                        dark:border-white/10
                    `,
            )}
        >
            <PricingPattern featured={plan.featured} />

            {/* Badge */}
            {plan.badge && (
                <span
                    className="
                        absolute right-3 top-0 z-20
                        -translate-y-1/2 rounded-full
                        border border-black/10 bg-white
                        px-3 py-1 text-[10px] font-semibold
                        text-black shadow-sm
                        sm:text-xs
                    "
                >
                    {plan.badge}
                </span>
            )}

            {/* Header */}
            <header>
                <h3 className="text-lg font-semibold sm:text-xl">
                    {plan.name}
                </h3>

                <div className="mt-2 flex items-end gap-1">
                    <span
                        className="
                            text-4xl font-bold leading-none
                            tracking-[-0.045em]
                            sm:text-[42px]
                        "
                    >
                        {formatCurrency(
                            displayedPrice,
                            selectedPrice.currency,
                        )}
                    </span>

                    <span className="mb-1 text-sm text-muted-foreground dark:text-white/55">
                        /month
                    </span>
                </div>

                <p className="mt-3 text-xs text-muted-foreground dark:text-white/50">
                    {plan.tagline}
                </p>

                {annual && (
                    <p className="mt-2 text-xs font-medium text-[#86a900]">
                        {formatCurrency(
                            selectedPrice.amount,
                            selectedPrice.currency,
                        )}{" "}
                        billed annually
                    </p>
                )}
            </header>

            {/* Included features */}
            <div
                className="
                    mt-5 flex-1 border border-black/[0.06]
                    bg-black/[0.025] p-4
                    backdrop-blur-[2px]
                    dark:border-white/[0.04]
                    dark:bg-white/[0.045]
                "
            >
                <h4 className="text-sm font-semibold sm:text-base">
                    Included features
                </h4>

                <ul className="mt-4 space-y-3">
                    {plan.features.map((feature) => (
                        <li
                            key={feature}
                            className="
                                flex items-start gap-2.5
                                text-xs leading-[1.45]
                                text-muted-foreground
                                dark:text-white/60
                                sm:text-[13px]
                            "
                        >
                            <CheckCircle2
                                aria-hidden="true"
                                className="
                                    mt-0.5 size-4 shrink-0
                                    text-foreground/65
                                    dark:text-white/65
                                "
                                strokeWidth={1.7}
                            />

                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* CTA */}
            <Button
                asChild
                variant={
                    plan.featured
                        ? "primary"
                        : "outline"
                }
                size="lg"
                fullWidth
                className="mt-5 rounded-md"
            >
                <Link
                    href={`/${nextPage}?${registrationParams.toString()}`}
                >
                    Get Started
                </Link>
            </Button>
        </article>
    );
}