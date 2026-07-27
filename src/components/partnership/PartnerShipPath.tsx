"use client";

import {
    CircleCheck
} from "lucide-react";
import { partnershipSteps, partnerTiers } from "./data/data";

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

            <div className="container mx-auto">
                {/* Heading */}
                <header className="text-center">
                    <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-white">
                        The Path To{" "}
                        <span className="italic text-[#97B900]">
                            Partnership
                        </span>
                    </h2>
                </header>

                {/* Partnership steps */}
                <div
                    className="
        mx-auto mt-11 grid w-full 
        grid-cols-1 gap-9
        sm:grid-cols-2
        lg:mt-12 lg:grid-cols-4 lg:gap-4
    ">
                    {partnershipSteps.map((step, index) => {
                        const Icon = step.icon;

                        return (
                            <article
                                key={step.number}
                                className=" relative flex flex-col items-center  min-h-[120px] px-3 text-center sm:px-5 lg:mx-4"
                            >
                                {/* Desktop connector line */}
                                {index < partnershipSteps.length - 1 && (
                                    <span
                                        aria-hidden="true"
                                        className="absolute left-[72%] top-[42px] hidden h-px w-[56%] bg-white/20 lg:block
                        "
                                    />
                                )}

                                {/* Icon */}
                                <div
                                    className="mb-2 w-fit rounded-lg text-white p-2 bg-icon-bg-hover"
                                >
                                    <Icon
                                        className="size-[17px]"
                                        strokeWidth={2.3}
                                    />
                                </div>

                                {/* Title */}
                                <h3
                                    className="text-lg lg:text-xl text-white"
                                >
                                    {step.number}. {step.title}
                                </h3>

                                {/* Description */}
                                <p
                                    className="text-white/60 text-wrap"
                                >
                                    {step.description}
                                </p>
                            </article>
                        );
                    })}
                </div>

                {/* Partner tier heading */}
                <h2 className="mb-4 text-3xl font-bold text-center tracking-tight sm:text-4xl lg:text-5xl text-white mt-10 lg:mt-20">
                    Partner Tiers
                </h2>

                {/* Tier cards */}
                <div
                    className="
                        mx-auto mt-8 grid grid-cols-1 items-stretch gap-5 md:grid-cols-3
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
                            `}
                        >
                            <div>
                                <div className="flex items-start justify-between gap-3">
                                    <div>
                                        <h3
                                            className="text-lg lg:text-2xl"
                                        >
                                            {tier.name}
                                        </h3>

                                        <p
                                            className="
                                                mt-1 text-sm md:text-base
                                                text-neutral-400
                                            "
                                        >
                                            {tier.subtitle}
                                        </p>
                                    </div>
                                </div>

                                <ul className="mt-6 space-y-3">
                                    {tier.features.map(
                                        feature => (
                                            <li
                                                key={feature}
                                                className="
                                                    flex items-start
                                                    gap-2 text-xs
                                                    leading-[1.45]
                                                    text-neutral-600
                                                    sm:text-[13px] lg:text-base
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
                        </article>
                    ))}
                </div>
            </div>
        </section >
    );
}