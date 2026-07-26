"use client";

import {
    BadgeCheck,
    CircleCheck,
    CircleDollarSign,
    FileCheck2,
    FileText,
    type LucideIcon,
} from "lucide-react";

type PartnershipStep = {
    number: number;
    title: string;
    description: string;
    icon: LucideIcon;
};

type PartnerTier = {
    name: string;
    subtitle: string;
    features: string[];
    buttonLabel: string;
    featured?: boolean;
};

const partnershipSteps: PartnershipStep[] = [
    {
        number: 1,
        title: "Apply",
        description:
            "Fill out our simple application form with your details.",
        icon: FileText,
    },
    {
        number: 2,
        title: "Review",
        description:
            "Our team reviews your content and audience alignment.",
        icon: FileCheck2,
    },
    {
        number: 3,
        title: "Get Approved",
        description:
            "Receive your acceptance and digital partner kit.",
        icon: BadgeCheck,
    },
    {
        number: 4,
        title: "Start Earning",
        description:
            "Share your links and watch your commissions grow.",
        icon: CircleDollarSign,
    },
];

const partnerTiers: PartnerTier[] = [
    {
        name: "Member",
        subtitle: "Entry Level",
        features: [
            "3k+ Followers",
            "2 Trip Packages Per Month",
            "Free Elite Membership",
            "Early Access To New Features",
            "Co-Branding Authorization",
            "Gear Partnership Opportunities",
            "Dedicated Support",
        ],
        buttonLabel: "Select Tier",
    },
    {
        name: "Ambassador",
        subtitle: "Ultimate Impact",
        featured: true,
        features: [
            "10k+ Followers",
            "Ambassador Badge",
            "10 Trip Packages Per Month",
            "Free Elite Membership",
            "Referral Income Eligibility",
            "Monthly Referral Bonus",
            "Early Access To New Features",
            "Co-Branding Authorization",
            "Priority Brand Promotion And Gear Partnerships",
            "Featured Placement On TripTrax's Platforms",
            "Priority Support",
        ],
        buttonLabel: "Apply for Ambassador",
    },
    {
        name: "Advocate",
        subtitle: "Rising Star",
        features: [
            "5k+ Followers",
            "6 Trip Packages Per Month",
            "Free Elite Membership",
            "Referral Income Eligibility",
            "Early Access To New Features",
            "Brand Promotion And Gear Partnerships",
            "Dedicated Support",
        ],
        buttonLabel: "Select Tier",
    },
];

export default function PartnerShipPath() {
    const backgroundImage = "/howItWorksSection.jpg";

    return (
        <section
            className="
                relative isolate min-h-[764px] overflow-hidden
                bg-black bg-cover bg-fixed bg-[center_40px] bg-no-repeat
                px-4 py-16 font-work-sans
                sm:px-6 lg:px-8
            "
            style={{
                backgroundImage: `url("${backgroundImage}")`,
            }}
        >
            {/* Main dark-to-transparent overlay */}
            <div
                aria-hidden="true"
                className="
                    pointer-events-none absolute inset-0 -z-20
                    bg-[linear-gradient(to_bottom,#020202_0%,#020202_38%,rgba(2,2,2,0.96)_46%,rgba(2,2,2,0.48)_64%,rgba(2,2,2,0.08)_100%)]
                "
            />

            {/* Left and right darkness */}
            <div
                aria-hidden="true"
                className="
                    pointer-events-none absolute inset-0 -z-10
                    bg-[linear-gradient(to_right,rgba(0,0,0,0.12),transparent_35%,transparent_65%,rgba(0,0,0,0.12))]
                "
            />

            <div className="container mx-auto w-full max-w-7xl">
                {/* Heading */}
                <header className="text-center">
                    <h2
                        className="
                            text-3xl font-bold tracking-[-0.035em]
                            text-white
                            sm:text-4xl
                            lg:text-[44px]
                        "
                    >
                        The Path To{" "}
                        <span className="italic text-[#97B900]">
                            Partnership
                        </span>
                    </h2>
                </header>
                {/* Partnership steps */}
                <div
                    className="
        mx-auto mt-11 grid w-full max-w-[1120px]
        grid-cols-1 gap-9
        sm:grid-cols-2
        lg:mt-12 lg:grid-cols-4 lg:gap-0
    "
                >
                    {partnershipSteps.map((step, index) => {
                        const Icon = step.icon;

                        return (
                            <article
                                key={step.number}
                                className="
                    relative flex min-h-[120px]
                    flex-col items-center
                    px-3 text-center
                    sm:px-5
                "
                            >
                                {/* Desktop connector line */}
                                {index < partnershipSteps.length - 1 && (
                                    <span
                                        aria-hidden="true"
                                        className="
                            absolute left-[72%] top-[42px]
                            hidden h-px w-[56%]
                            bg-white/20
                            lg:block
                        "
                                    />
                                )}

                                {/* Icon */}
                                <div
                                    className="
                        relative z-10 flex size-[32px]
                        items-center justify-center
                        rounded-[6px]
                        border border-white/[0.07]
                        bg-[#292929]
                        text-white
                        shadow-[0_5px_16px_rgba(0,0,0,0.55)]
                    "
                                >
                                    <Icon
                                        className="size-[17px]"
                                        strokeWidth={2.3}
                                    />
                                </div>

                                {/* Title */}
                                <h3
                                    className="
                        relative z-10 mt-[9px]
                        bg-black px-2
                        text-[13px] font-semibold
                        leading-none text-white
                        sm:text-[14px]
                    "
                                >
                                    {step.number}. {step.title}
                                </h3>

                                {/* Description */}
                                <p
                                    className="
                        mt-[11px] max-w-[185px]
                        text-[10px] leading-[1.45]
                        text-white/60
                        sm:text-[11px]
                    "
                                >
                                    {step.description}
                                </p>
                            </article>
                        );
                    })}
                </div>

                {/* Partner tier heading */}
                <h2
                    className="
                        mt-16 text-center text-3xl
                        font-bold italic tracking-[-0.03em]
                        text-white
                        sm:text-4xl
                        lg:mt-20
                    "
                >
                    Partner Tiers
                </h2>

                {/* Tier cards */}
                <div
                    className="
                        mx-auto mt-8 grid max-w-6xl
                        grid-cols-1 items-stretch gap-5
                        md:grid-cols-3
                    "
                >
                    {partnerTiers.map(tier => (
                        <article
                            key={tier.name}
                            className={`
                                relative flex min-h-[500px]
                                flex-col overflow-hidden
                                rounded-xl border
                                bg-white p-5 text-[#252525]
                                shadow-[0_18px_45px_rgba(0,0,0,0.18)]
                                transition-transform
                                duration-300
                                hover:-translate-y-1
                                sm:p-6
                                ${tier.featured
                                    ? "border-[#ffcc30] md:-translate-y-1"
                                    : "border-black/10"
                                }
                            `}
                        >
                            {tier.featured && (
                                <div
                                    className="
                                        absolute inset-x-0 top-0
                                        h-1 bg-[#ffcc30]
                                    "
                                />
                            )}

                            <div>
                                <div className="flex items-start justify-between gap-3">
                                    <div>
                                        <h3
                                            className="
                                                text-lg font-semibold
                                                tracking-[-0.02em]
                                            "
                                        >
                                            {tier.name}
                                        </h3>

                                        <p
                                            className="
                                                mt-1 text-xs
                                                text-neutral-400
                                            "
                                        >
                                            {tier.subtitle}
                                        </p>
                                    </div>

                                    {tier.featured && (
                                        <span
                                            className="
                                                rounded-full
                                                bg-[#ffcc30]/15
                                                px-2.5 py-1
                                                text-[10px]
                                                font-semibold
                                                uppercase
                                                tracking-wide
                                                text-[#9a7400]
                                            "
                                        >
                                            Featured
                                        </span>
                                    )}
                                </div>

                                <ul className="mt-6 space-y-2.5">
                                    {tier.features.map(
                                        feature => (
                                            <li
                                                key={feature}
                                                className="
                                                    flex items-start
                                                    gap-2 text-xs
                                                    leading-[1.45]
                                                    text-neutral-600
                                                    sm:text-[13px]
                                                "
                                            >
                                                <CircleCheck
                                                    aria-hidden="true"
                                                    className="
                                                        mt-0.5 size-4
                                                        shrink-0
                                                        text-neutral-600
                                                    "
                                                    strokeWidth={
                                                        1.8
                                                    }
                                                />

                                                <span>
                                                    {feature}
                                                </span>
                                            </li>
                                        ),
                                    )}
                                </ul>
                            </div>

                            <button
                                type="button"
                                className={`
                                    mt-auto flex h-11 w-full
                                    items-center justify-center
                                    rounded-md border
                                    px-4 text-xs font-semibold
                                    transition-all duration-200
                                    ${tier.featured
                                        ? `
                                                border-[#ffcc30]
                                                bg-[#ffcc30]
                                                text-[#282828]
                                                shadow-[0_10px_24px_-14px_rgba(255,204,48,0.9)]
                                                hover:bg-[#f4bd12]
                                            `
                                        : `
                                                border-neutral-400
                                                bg-white
                                                text-neutral-700
                                                hover:border-neutral-900
                                                hover:bg-neutral-900
                                                hover:text-white
                                            `
                                    }
                                `}
                            >
                                {tier.buttonLabel}
                            </button>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}