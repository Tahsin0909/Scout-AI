'use client'

import {
    Download,
    FileText,
    Sparkles,
    Star,
    type LucideIcon,
} from 'lucide-react'


type Step = {
    number: string
    title: string
    description: string
    icon: LucideIcon
    iconClassName: string
    glowClassName: string
}

const steps: Step[] = [
    {
        number: '01',
        title: 'Choose Your Plan',
        description:
            'Pick your travel mode and package type. Single purchase or membership — your call.',
        icon: FileText,
        iconClassName:
            'bg-[#FF916F] text-white shadow-[#ff916f]/30',
        glowClassName: 'bg-[#FFE9B7]',
    },
    {
        number: '02',
        title: 'Complete the Intake',
        description:
            'Our smart form adapts to your mode. Destination, dates, experience, vehicle, priorities.',
        icon: Sparkles,
        iconClassName:
            'bg-[#A45EF8] text-white shadow-[#a45ef8]/30',
        glowClassName: 'bg-[#E7C9FF]',
    },
    {
        number: '03',
        title: 'Scout AI Clarifies',
        description:
            'Scout asks a few targeted questions. The more context you give, the sharper your dossier.',
        icon: Star,
        iconClassName:
            'bg-[#68C8F6] text-white shadow-[#68c8f6]/30',
        glowClassName: 'bg-[#D8F3FF]',
    },
    {
        number: '04',
        title: 'Expert Delivery',
        description:
            'A human adventure expert reviews and approves. Your PDF lands in your dashboard within 48 hours.',
        icon: Download,
        iconClassName:
            'bg-[#FF646D] text-white shadow-[#ff646d]/30',
        glowClassName: 'bg-[#FFD8E5]',
    },
]

export default function HowItWorksSection() {
    const backgroundImage = '/howItWorksSection.jpg'



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

            <div className="container mx-auto w-full">
                {/* Header */}
                <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
                    <div
                        className="
                            mx-auto mb-4 w-fit rounded-full
                            bg-white/[0.08] px-3 py-1
                            text-sm font-medium uppercase
                            tracking-wide text-muted-foreground
                            backdrop-blur-md
                        "
                    >
                        How It Works
                    </div>

                    <h2
                        className="
                            mb-4 text-3xl font-bold tracking-tight
                            text-white sm:text-4xl lg:text-5xl
                        "
                    >
                        From Idea To
                        <br />
                        Dossier In{' '}
                        <span className="italic text-[#97B900]">
                            48 Hours
                        </span>
                    </h2>

                    <p
                        className="
                            mx-auto max-w-2xl text-base
                            text-gray-400 sm:text-lg
                        "
                    >
                        Every plan is AI-built and human-reviewed before it
                        reaches you. Here&apos;s exactly how.
                    </p>
                </div>

                {/* Steps */}
                <div
                    className="
                        mt-[39px] grid grid-cols-1 gap-[14px]
                        md:grid-cols-2 md:gap-x-[15px]
                    "
                >
                    {steps.map((step) => {
                        const Icon = step.icon

                        return (
                            <article
                                key={step.number}
                                className="
                                    relative h-auto overflow-hidden
                                    rounded-[10px] bg-white
                                    px-[15px] py-[15px] text-black
                                    shadow-[0_5px_22px_rgba(0,0,0,0.08)]
                                "
                            >
                                {/* Card glow */}
                                <div
                                    aria-hidden="true"
                                    className={`
                                        pointer-events-none absolute
                                        -left-[20px] -top-[130px]
                                        h-[190px] w-[410px]
                                        rounded-full opacity-70
                                        blur-[20px]
                                        ${step.glowClassName}
                                    `}
                                />

                                <div className="relative flex min-h-[254px] flex-col justify-between">
                                    <div className="flex items-start justify-between">
                                        <div
                                            className={`
                                                flex size-[31px]
                                                items-center justify-center
                                                rounded-[7px]
                                                shadow-[0_4px_12px]
                                                lg:size-[40px]
                                                ${step.iconClassName}
                                            `}
                                        >
                                            <Icon
                                                size={17}
                                                strokeWidth={2.3}
                                            />
                                        </div>

                                        <span
                                            className="
                                                text-[48px] font-bold
                                                leading-none tracking-[-0.04em]
                                                text-[#8BD3D5]
                                                lg:text-[56px]
                                            "
                                        >
                                            {step.number}
                                        </span>
                                    </div>

                                    <div>
                                        <h3
                                            className="
                                                text-[21px] font-semibold
                                                leading-[1.2]
                                                tracking-[-0.02em]
                                                sm:text-[22px]
                                                lg:text-2xl
                                            "
                                        >
                                            {step.title}
                                        </h3>

                                        <p
                                            className="
                                                mt-[10px] max-w-[400px]
                                                text-[11px] leading-[1.45]
                                                text-[#666666]
                                                sm:text-[11.5px]
                                                lg:text-base
                                            "
                                        >
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            </article>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}