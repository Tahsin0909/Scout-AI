'use client'

import {
    Award,
    Leaf,
    ShieldCheck,
    Target,
    UserCog,
    Zap,
    type LucideIcon,
} from 'lucide-react'
import Link from 'next/link'

import { Button } from '../ui/button'

type FoundationItem = {
    title: string
    description: string
    icon: LucideIcon
    colSpan: string
}

const foundationItems: FoundationItem[] = [
    {
        title: 'Safety First, Always',
        description:
            'Every dossier we produce prioritizes your safety. Emergency contacts, evacuation routes, risk assessments, and real-time weather integration aren’t features — they’re requirements.',
        icon: ShieldCheck,
        colSpan: 'lg:col-span-6',
    },
    {
        title: 'Precision Over Approximation',
        description:
            'Generic trip planning is everywhere. We build plans that account for your specific vehicle, experience level, dates, and destination — not a template that could apply to anyone.',
        icon: Target,
        colSpan: 'lg:col-span-5',
    },
    {
        title: 'Humans in the Loop',
        description:
            'AI gets you 90% of the way there. The last 10% — the local knowledge, the judgment calls, the things you can’t know from data — that’s what our expert reviewers provide.',
        icon: UserCog,
        colSpan: 'lg:col-span-5',
    },
    {
        title: 'Leave It Better',
        description:
            'We believe in responsible outdoor recreation. Every dossier includes Leave No Trace principles, permit guidance, and conservation notes relevant to your destination.',
        icon: Leaf,
        colSpan: 'lg:col-span-5',
    },
    {
        title: 'Built on Real Data',
        description:
            'Our platform integrates live weather APIs, satellite imagery, terrain databases, and continually updated local knowledge — not static content that was accurate three years ago.',
        icon: Zap,
        colSpan: 'lg:col-span-5',
    },
    {
        title: 'No Trip Left Behind',
        description:
            'Whether you’re taking your first camping trip or your 200th overland expedition, you deserve a dossier that matches your ambition. We serve every skill level with equal rigor.',
        icon: Award,
        colSpan: 'lg:col-span-6',
    },
]

export default function Foundation() {
    return (
        <section className="w-full bg-background py-16 md:py-24 lg:py-32">
            <div className="container px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
                    <p className="mx-auto mb-4 w-fit rounded-full border bg-white/5 px-3 py-1 text-sm font-medium uppercase tracking-wide text-muted-foreground">
                        The Platform
                    </p>

                    <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                        Built On Strong{' '}
                        <span className="italic text-[#97B900]">
                            Foundations
                        </span>
                    </h2>

                    <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg">
                        Our values ensure every journey is planned with care,
                        precision, and respect for the places we explore.
                    </p>
                </div>

                {/* Foundation Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-16">
                    {foundationItems.map((item) => {
                        const Icon = item.icon

                        return (
                            <article
                                key={item.title}
                                className={`
                                    group cursor-pointer rounded-lg
                                    border border-transparent bg-card p-6
                                    transition-[background-color,border-color,box-shadow]
                                    duration-300
                                    ease-[cubic-bezier(0.22,1,0.36,1)]
                                    hover:border-white/10
                                    hover:bg-card-foreground
                                    hover:shadow-[0_18px_45px_-20px_rgba(0,0,0,0.35)]
                                    ${item.colSpan}
                                `}
                            >
                                <div
                                    className="
                                        mb-6 flex size-12 items-center
                                        justify-center rounded-lg bg-icon-bg
                                        transition-[background-color,transform]
                                        duration-300
                                        ease-[cubic-bezier(0.22,1,0.36,1)]
                                        group-hover:scale-105
                                        group-hover:bg-icon-bg-hover
                                        lg:mb-12
                                    "
                                >
                                    <Icon
                                        className="
                                            size-7 text-card-foreground
                                            transition-colors duration-300
                                            ease-out group-hover:text-card
                                        "
                                        strokeWidth={2.4}
                                    />
                                </div>

                                <h3
                                    className="
                                        mb-3 text-card-foreground
                                        transition-colors duration-300
                                        ease-out group-hover:text-card
                                        lg:text-2xl
                                    "
                                >
                                    {item.title}
                                </h3>

                                <p
                                    className="
                                        text-muted-foreground
                                        transition-colors duration-300
                                        ease-out group-hover:text-card/80
                                    "
                                >
                                    {item.description}
                                </p>
                            </article>
                        )
                    })}
                </div>

                {/* CTA */}
                <div className="mx-auto mt-12 w-fit text-center md:mt-16">
                    <Button asChild variant="primary">
                        <Link href="/register">
                            View Packaging
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}