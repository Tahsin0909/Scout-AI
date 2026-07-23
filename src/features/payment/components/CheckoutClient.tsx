"use client"

import { PricingPlan } from "@/components/pricing/PricingCard"



type CheckoutClientProps = {
    plan: PricingPlan
    billing: "standard" | "annual"
    selectedPrice: number
    amountDueNow: number
}

export default function CheckoutClient({
    plan,
    billing,
    selectedPrice,
    amountDueNow,
}: CheckoutClientProps) {
    const isAnnual = billing === "annual"

    return (
        <main className="min-h-screen bg-muted/30 px-4 py-12 sm:px-6 lg:px-8">
            <div className="container grid gap-8 lg:grid-cols-[minmax(0,1fr)_380px]">
                <section className="rounded-2xl border border-border bg-background p-6 shadow-sm sm:p-8">
                    <h1 className="text-3xl font-semibold">
                        Review Membership
                    </h1>

                    <p className="mt-3 text-muted-foreground">
                        Review your membership before completing your purchase.
                    </p>

                    <div className="mt-8 rounded-xl border border-border p-5">
                        <h2 className="text-xl font-semibold">
                            {plan.name}
                        </h2>

                        <p className="mt-1 text-sm text-muted-foreground">
                            {plan.tagline}
                        </p>

                        <p className="mt-4 text-3xl font-bold">
                            ${selectedPrice}
                            <span className="ml-1 text-sm font-normal text-muted-foreground">
                                /month
                            </span>
                        </p>

                        {isAnnual && (
                            <p className="mt-2 text-sm text-primary">
                                ${plan.annualTotal} billed annually
                            </p>
                        )}

                        <ul className="mt-6 space-y-3">
                            {plan.features
                                .slice(0, 5)
                                .map((feature) => (
                                    <li
                                        key={feature}
                                        className="text-sm text-muted-foreground"
                                    >
                                        ✓ {feature}
                                    </li>
                                ))}
                        </ul>
                    </div>
                </section>

                <aside className="rounded-2xl bg-[#292929] p-6 text-white lg:sticky lg:top-8">
                    <h2 className="text-lg font-semibold">
                        Order summary
                    </h2>

                    <div className="mt-6 space-y-4">
                        <div className="flex justify-between gap-4">
                            <span>{plan.name}</span>

                            <span>
                                ${amountDueNow.toFixed(2)}
                            </span>
                        </div>

                        <div className="flex justify-between gap-4 text-sm text-white/60">
                            <span>Billing interval</span>

                            <span>
                                {isAnnual
                                    ? "Annual"
                                    : "Monthly"}
                            </span>
                        </div>

                        <div className="flex justify-between border-t border-white/10 pt-4">
                            <span className="font-medium">
                                Due now
                            </span>

                            <span className="text-2xl font-semibold">
                                ${amountDueNow.toFixed(2)}
                            </span>
                        </div>
                    </div>
                </aside>
            </div>
        </main>
    )
}