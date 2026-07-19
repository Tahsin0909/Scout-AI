"use client";

import { useState } from "react";
import { PricingCard, PricingPlan } from "./PricingCard";


type PricingCategory = "basic" | "premium";

const basicPlans: PricingPlan[] = [
    {
        id: "trailhead",
        name: "Trailhead",
        tagline: "It Starts Here",
        monthlyPrice: 15,
        annualPrice: 12,
        features: [
            "Access to Scout AI.",
            "Generate 2 trip packages per month.",
            "Additional packages available at $7.00 each.",
            "All core modules included.",
            "Basic Architect review and quality control.",
            "Package generation available within 30 days of departure window.",
            "Trailhead membership badge.",
            "Tier IV priority in queue.",
            "Access to members-only content.",
        ],
    },
    {
        id: "basecamp",
        name: "Basecamp",
        tagline: "Start the Climb",
        monthlyPrice: 20,
        annualPrice: 17,
        features: [
            "Scout AI Base Access.",
            "Generate 4 trip packages per month.",
            "Additional packages available at $6.00 each.",
            "All core modules included.",
            "Basic Architect review and quality control.",
            "Package generation available within 60 days of departure window.",
            "Basecamp membership badge.",
            "Tier III priority in queue.",
            "Access to members-only content.",
            "5% off all merchandise.",
        ],
    },
];

const premiumPlans: PricingPlan[] = [
    {
        id: "summit",
        name: "Summit",
        tagline: "Enjoy the View",
        monthlyPrice: 30,
        annualPrice: 25,
        featured: true,
        badge: "Most Popular",
        features: [
            "Access to Scout AI.",
            "Generate 6 trip packages per month.",
            "Additional packages can be purchased beyond the 6 included for $5.00 each.",
            "Includes all premium modules.",
            "Package generation available within 120 days of departure.",
            "In-depth Architect analysis of each trip.",
            "10-question post-delivery Trip Q&A session with Scout.",
            "Annual subscriptions receive 2 handcrafted Architect oversight trips per year.",
            "Summit account badge.",
            "Tier II membership-level priority in queue.",
            "Access to members-only content.",
            "10% off all merchandise.",
        ],
    },
    {
        id: "apex-elite",
        name: "Apex Elite",
        tagline: "Welcome to the Top",
        monthlyPrice: 50,
        annualPrice: 42,
        features: [
            "Scout AI Base Access.",
            "Generate 10 trip packages per month.",
            "Additional packages can be purchased beyond the 10 included for $5.00 each.",
            "Includes all premium modules.",
            "Package generation available within 180 days of departure.",
            "In-depth Architect analysis of each trip with available personalized recommendations and top-tier quality control.",
            "20-question post-delivery Trip Q&A session with Scout.",
            "Annual subscriptions receive 5 handcrafted Architect oversight trips per year.",
            "Annual subscriptions receive a free one-time Apex Adventure Lab swag bag.",
            "Apex Elite account badge.",
            "20% off all merchandise.",
            "Custom Apex Elite package design.",
            "Tier I membership-level priority in queue.",
            "Access to members-only content.",
            "Access to the Expedition Leader toolkit.",
        ],
    },
];

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