"use client";

import { useMemo, useState } from "react";

import { PricingCard } from "./PricingCard";
import { PlanCategory, pricingPlansApiResponse } from "./data/pricing";

export default function PricingPage({ nextPage }: { nextPage: string | undefined }) {
    const [category, setCategory] = useState<PlanCategory | "all">("all");

    const [annual, setAnnual] = useState(false);

    const visiblePlans = useMemo(() => {
        return pricingPlansApiResponse.data
            .filter((plan) => {
                if (!plan.isActive) return false;
                if (category === "all") return true;
                return plan.category === category;
            })
            .sort((firstPlan, secondPlan) => firstPlan.sortOrder - secondPlan.sortOrder);
    }, [category]);

    return (
        <main
            className="
                min-h-screen bg-[#121316]
                px-4 py-16 text-white
                transition-colors duration-300
                sm:px-6 sm:py-20
                lg:px-8 lg:py-24
            "
        >
            <section className="container mx-auto max-w-6xl">
                {/* Header */}
                <div className="mx-auto max-w-3xl text-center">
                    <h1
                        className="
                            text-3xl font-extrabold tracking-tight text-white
                            sm:text-4xl lg:text-5xl
                        "
                    >
                        Choose Your Adventure
                    </h1>
                    <p
                        className="
                            mx-auto mt-4 max-w-2xl
                            text-sm leading-relaxed
                            text-gray-300/85
                            sm:text-base
                        "
                    >
                        From weekend explorers to expedition leaders, every membership
                        unlocks Scout AI and expertly crafted adventure planning.
                    </p>
                </div>

                {/* Pricing controls */}
                <div
                    className="
                        mx-auto mt-10 flex flex-col
                        items-center justify-center gap-5
                        sm:flex-row
                    "
                >
                    {/* Basic/Premium tabs */}
                    <div
                        role="tablist"
                        aria-label="Pricing category"
                        className="
                            inline-flex rounded-full
                            border border-white/10
                            bg-[#24262d] p-1
                        "
                    >
                        <button
                            type="button"
                            role="tab"
                            aria-selected={category === "basic"}
                            onClick={() =>
                                setCategory((prev) => (prev === "basic" ? "all" : "basic"))
                            }
                            className={`
                                rounded-full px-5 py-1.5
                                text-xs font-semibold
                                transition-all duration-200
                                ${category === "basic"
                                    ? "bg-[#FACC15] text-black shadow-md"
                                    : "text-gray-300 hover:text-white"
                                }
                            `}
                        >
                            Basic
                        </button>

                        <button
                            type="button"
                            role="tab"
                            aria-selected={category === "premium"}
                            onClick={() =>
                                setCategory((prev) => (prev === "premium" ? "all" : "premium"))
                            }
                            className={`
                                rounded-full px-5 py-1.5
                                text-xs font-semibold
                                transition-all duration-200
                                ${category === "premium"
                                    ? "bg-[#FACC15] text-black shadow-md"
                                    : "text-gray-300 hover:text-white"
                                }
                            `}
                        >
                            Premium
                        </button>
                    </div>

                    {/* Annual switch */}
                    <div className="flex items-center gap-3">
                        <button
                            type="button"
                            role="switch"
                            aria-checked={annual}
                            aria-label="Enable annual pricing"
                            onClick={() => setAnnual((current) => !current)}
                            className={`
                                relative h-7 w-12 rounded-full
                                border transition-colors duration-300
                                ${annual
                                    ? "border-[#FACC15] bg-[#FACC15]"
                                    : "border-white/20 bg-white/10"
                                }
                            `}
                        >
                            <span
                                className={`
                                    absolute left-1 top-1/2 size-5
                                    -translate-y-1/2 rounded-full
                                    bg-white shadow-sm
                                    transition-transform duration-300
                                    ${annual
                                        ? "translate-x-5"
                                        : "translate-x-0"
                                    }
                                `}
                            />
                        </button>

                        <span className="text-xs font-semibold text-gray-300 sm:text-sm">
                            Annual{" "}
                            <span className="text-[#a3e635] font-bold">
                                (Save 17%)
                            </span>
                        </span>
                    </div>
                </div>

                {/* Pricing cards grid */}
                <div
                    className="
                        mx-auto mt-12 grid max-w-5xl
                        grid-cols-1 items-stretch gap-6
                        md:grid-cols-2
                    "
                >
                    {visiblePlans.map((plan) => (
                        <PricingCard
                            nextPage={nextPage ?? "register"}
                            key={plan.id}
                            plan={plan}
                            annual={annual}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
}