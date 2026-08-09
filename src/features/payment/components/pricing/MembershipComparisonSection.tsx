import { Check, Minus } from "lucide-react";

import { cn } from "@/lib/utils";

type ComparisonValue = string | boolean | null;

type ComparisonRow = {
    feature: string;
    core: ComparisonValue;
    plus: ComparisonValue;
    prime: ComparisonValue;
    elite: ComparisonValue;
};

const plans = [
    {
        key: "core",
        name: "Core",
        subtitle: "It Starts Here",
    },
    {
        key: "plus",
        name: "Plus",
        subtitle: "Go Further",
    },
    {
        key: "prime",
        name: "Prime",
        subtitle: "Level Up",
    },
    {
        key: "elite",
        name: "Elite",
        subtitle: "All Access",
    },
] as const;

const comparisonRows: ComparisonRow[] = [
    {
        feature: "Pricing (Monthly)",
        core: "$9.99/mo",
        plus: "$19.99/mo",
        prime: "$29.99/mo",
        elite: "$49.99/mo",
    },
    {
        feature: "Pricing (Yearly)",
        core: "$99.99/yr",
        plus: "$199.99/yr",
        prime: "$299.99/yr",
        elite: "$499.99/yr",
    },
    {
        feature: "Access to Scout AI",
        core: true,
        plus: true,
        prime: true,
        elite: true,
    },
    {
        feature: "Trip packages included",
        core: "2/month",
        plus: "4/month",
        prime: "6/month",
        elite: "10/month",
    },
    {
        feature: "Additional package cost",
        core: "$5.00 each",
        plus: "$5.00 each",
        prime: "$5.00 each",
        elite: "$5.00 each",
    },
    {
        feature: "Basic modules",
        core: true,
        plus: true,
        prime: null,
        elite: null,
    },
    {
        feature: "Premium modules",
        core: null,
        plus: null,
        prime: true,
        elite: true,
    },
    {
        feature: "Trip Planning Window",
        core: "Available within 30 days of departure",
        plus: "Available within 60 days of departure",
        prime: "Available within 120 days of departure",
        elite: "Available within 180 days of departure",
    },
    {
        feature: "Analysis & Support",
        core: "Basic Analyst oversight and quality control included.",
        plus: "Enhanced Analyst oversight, quality control, and guidance included.",
        prime: "In-depth analysis of each trip with personalized adjustments.",
        elite: "In-depth analysis of each trip with personalized adjustments.",
    },
    {
        feature: "Personalized Recommendations",
        core: null,
        plus: null,
        prime: true,
        elite: true,
    },
    {
        feature: "Scout Trip Q&A",
        core: null,
        plus: null,
        prime: "10 Questions",
        elite: "20 Questions",
    },
    {
        feature: "Handcrafted Trips (Yearly)",
        core: null,
        plus: null,
        prime: "2",
        elite: "5",
    },
    {
        feature: "Members-only Content",
        core: true,
        plus: true,
        prime: true,
        elite: true,
    },
    {
        feature: "Merchandise Discount",
        core: null,
        plus: "5%",
        prime: "10%",
        elite: "20%",
    },
    {
        feature: "Members-only content",
        core: true,
        plus: true,
        prime: true,
        elite: true,
    },
    {
        feature: "Queue priority",
        core: "Tier IV",
        plus: "Tier III",
        prime: "Tier II",
        elite: "Tier I",
    },
];

function ComparisonCell({
    value,
}: {
    value: ComparisonValue;
}) {
    if (value === true) {
        return (
            <Check
                aria-label="Included"
                className="mx-auto size-4 text-foreground dark:text-white"
                strokeWidth={2.4}
            />
        );
    }

    if (value === false || value === null) {
        return (
            <Minus
                aria-label="Not included"
                className="mx-auto size-4 text-muted-foreground/70"
                strokeWidth={1.8}
            />
        );
    }

    return <span>{value}</span>;
}

export default function MembershipComparisonSection() {
    return (
        <section className="bg-background px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
            <div className="container">
                {/* Header */}
                <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
                    <h2 className="text-3xl font-bold tracking-[-0.035em] sm:text-4xl lg:text-[42px]">
                        Compare Memberships
                    </h2>

                    <p className="mx-auto mt-3 max-w-[620px] text-sm leading-relaxed text-muted-foreground sm:text-base">
                        Choose the membership that best matches your adventure
                        style. Compare features, package limits, pricing, and
                        benefits to find the right starting point.
                    </p>
                </div>

                {/* Mobile scroll notice */}
                <p className="mb-3 text-center text-xs text-muted-foreground md:hidden">
                    Swipe horizontally to compare all plans
                </p>

                {/* Comparison table */}
                <div
                    className="
                        mx-auto max-w-[1180px] overflow-hidden
                        rounded-[5px] border border-border
                        bg-card shadow-sm
                    "
                >
                    <div
                        className="
                            overflow-x-auto
                            overscroll-x-contain
                            [scrollbar-width:thin]
                        "
                    >
                        <table className="w-full min-w-[960px] border-collapse text-left">
                            <thead>
                                <tr className="bg-[#292929] text-white">
                                    <th
                                        scope="col"
                                        className="
                                            sticky left-0 z-30
                                            w-[190px] min-w-[190px]
                                            bg-[#292929] px-5 py-4
                                            text-xs font-semibold
                                            sm:w-[210px] sm:min-w-[210px]
                                        "
                                    >
                                        Feature
                                    </th>

                                    {plans.map((plan) => (
                                        <th
                                            key={plan.key}
                                            scope="col"
                                            className="
                                                min-w-[185px] px-5 py-4
                                                text-center text-xs font-semibold
                                            "
                                        >
                                            <span>{plan.name}</span>
                                            <span className="font-normal text-white/80">
                                                {" "}
                                                – {plan.subtitle}
                                            </span>
                                        </th>
                                    ))}
                                </tr>
                            </thead>

                            <tbody>
                                {comparisonRows.map((row, rowIndex) => (
                                    <tr
                                        key={row.feature}
                                        className={cn(
                                            `
                                                border-b border-border
                                                bg-card last:border-b-0
                                                transition-colors
                                                hover:bg-muted/35
                                            `,
                                            rowIndex % 2 !== 0 &&
                                            "bg-muted/[0.16]",
                                        )}
                                    >
                                        <th
                                            scope="row"
                                            className="
                                                sticky left-0 z-20
                                                w-[190px] min-w-[190px]
                                                border-r border-border
                                                bg-card px-5 py-4
                                                text-xs font-medium
                                                text-foreground
                                                sm:w-[210px] sm:min-w-[210px]
                                            "
                                        >
                                            {row.feature}
                                        </th>

                                        <td className="min-w-[185px] px-5 py-4 text-center text-[11px] leading-[1.45] text-muted-foreground sm:text-xs">
                                            <ComparisonCell value={row.core} />
                                        </td>

                                        <td className="min-w-[185px] px-5 py-4 text-center text-[11px] leading-[1.45] text-muted-foreground sm:text-xs">
                                            <ComparisonCell value={row.plus} />
                                        </td>

                                        <td className="min-w-[185px] px-5 py-4 text-center text-[11px] leading-[1.45] text-muted-foreground sm:text-xs">
                                            <ComparisonCell value={row.prime} />
                                        </td>

                                        <td className="min-w-[185px] px-5 py-4 text-center text-[11px] leading-[1.45] text-muted-foreground sm:text-xs">
                                            <ComparisonCell value={row.elite} />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
}