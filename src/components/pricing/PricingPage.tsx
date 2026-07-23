"use client";

import { useState } from "react";
import { PricingCard } from "./PricingCard";
import { basicPlans, premiumPlans } from "./data/pricing";


type PricingCategory = "basic" | "premium";


export default function PricingPage() {
    const [category, setCategory] =
        useState<PricingCategory>("basic");

    const [annual, setAnnual] = useState(false);

    const visiblePlans =
        category === "basic"
            ? basicPlans
            : premiumPlans;

    return (
        <main
            className="
        min-h-screen bg-[#f6f6f6]
        px-4 py-16 text-foreground
        transition-colors duration-300
        dark:bg-[#181818]
        sm:px-6 sm:py-20
        lg:px-8 lg:py-24
      "
        >
            <section className="container">
                {/* Header */}
                <div className="mx-auto max-w-3xl text-center">
                    <h1
                        className="
              text-3xl font-bold tracking-tight
              sm:text-4xl lg:text-5xl
            "
                    >
                        Choose Your Adventure
                    </h1>

                    <p
                        className="
              mx-auto mt-4 max-w-2xl
              text-sm leading-relaxed
              text-muted-foreground
              sm:text-base
            "
                    >
                        From weekend explorers to expedition leaders, every
                        membership unlocks Scout AI and expertly crafted
                        adventure planning.
                    </p>
                </div>

                {/* Pricing controls */}
                <div
                    className="
            mx-auto mt-10 flex flex-col
            items-center justify-center gap-4
            sm:flex-row
          "
                >
                    {/* Basic/Premium tabs */}
                    <div
                        role="tablist"
                        aria-label="Pricing category"
                        className="
              inline-flex rounded-full
              border border-black/5
              bg-black/[0.04] p-1
              dark:border-white/5
              dark:bg-white/[0.06]
            "
                    >
                        <button
                            type="button"
                            role="tab"
                            aria-selected={category === "basic"}
                            onClick={() => setCategory("basic")}
                            className={`
                rounded-full px-4 py-2
                text-xs font-medium
                transition-colors duration-200
                ${category === "basic"
                                    ? "bg-primary text-primary-foreground shadow-sm"
                                    : "text-muted-foreground hover:text-foreground"
                                }
              `}
                        >
                            Basic
                        </button>

                        <button
                            type="button"
                            role="tab"
                            aria-selected={category === "premium"}
                            onClick={() => setCategory("premium")}
                            className={`
                rounded-full px-4 py-2
                text-xs font-medium
                transition-colors duration-200
                ${category === "premium"
                                    ? "bg-primary text-primary-foreground shadow-sm"
                                    : "text-muted-foreground hover:text-foreground"
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
                                    ? "border-primary bg-primary"
                                    : `
                        border-black/10 bg-black/20
                        dark:border-white/10
                        dark:bg-white/20
                      `
                                }
              `}
                        >
                            <span
                                className={`
                  absolute top-1/2 size-5
                  -translate-y-1/2 rounded-full
                  bg-white shadow-sm
                  transition-transform duration-300
                  
                  ${annual
                                        ? "translate-x-0"
                                        : "-translate-x-5"
                                    }
                `}
                            />
                        </button>

                        <span className="text-xs font-medium sm:text-sm">
                            Annual{" "}
                            <span className="text-[#97B900]">
                                (Save 17%)
                            </span>
                        </span>
                    </div>
                </div>

                {/* Pricing cards */}
                <div
                    key={category}
                    className="
            mx-auto mt-12 grid max-w-5xl
            grid-cols-1 items-stretch gap-6
            md:grid-cols-2
          "
                >
                    {visiblePlans.map((plan) => (
                        <PricingCard
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