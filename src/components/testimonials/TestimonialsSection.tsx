'use client'

/* eslint-disable @next/next/no-img-element */

import { Quote } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'

const testimonials = [
    {
        quote:
            " “Used AAL for a 10-day PCT section hike. The weather windows were accurate, the water source map was lifesaving, and Scout AI actually caught that I'd forgotten bear canister requirements for that permit zone.”",
        name: 'Claire T.',
        role: 'Backpacker, Pacific Northwest',
        avatar: 'https://i.pravatar.cc/100?img=47',
    },
    {
        quote:
            "“Used AAL for a 10-day PCT section hike. The weather windows were accurate, the water source map was lifesaving, and Scout AI actually caught that I'd forgotten bear canister requirements for that permit zone.”",
        name: 'Claire T.',
        role: 'Backpacker, Pacific Northwest',
        avatar: 'https://i.pravatar.cc/100?img=32',
    },
    {
        quote:
            "“Used AAL for a 10-day PCT section hike. The weather windows were accurate, the water source map was lifesaving, and Scout AI actually caught that I'd forgotten bear canister requirements for that permit zone.”",
        name: 'Claire T.',
        role: 'Backpacker, Pacific Northwest',
        avatar: 'https://i.pravatar.cc/100?img=44',
    },
    {
        quote:
            "“Used AAL for a 10-day PCT section hike. The weather windows were accurate, the water source map was lifesaving, and Scout AI actually caught that I'd forgotten bear canister requirements for that permit zone.”",
        name: 'Claire T.',
        role: 'Backpacker, Pacific Northwest',
        avatar: 'https://i.pravatar.cc/100?img=49',
    },
    {
        quote:
            "“Used AAL for a 10-day PCT section hike. The weather windows were accurate, the water source map was lifesaving, and Scout AI actually caught that I'd forgotten bear canister requirements for that permit zone.”",
        name: 'Claire T.',
        role: 'Backpacker, Pacific Northwest',
        avatar: 'https://i.pravatar.cc/100?img=36',
    },
    {
        quote:
            "“Used AAL for a 10-day PCT section hike. The weather windows were accurate, the water source map was lifesaving, and Scout AI actually caught that I'd forgotten bear canister requirements for that permit zone.”",
        name: 'Claire T.',
        role: 'Backpacker, Pacific Northwest',
        avatar: 'https://i.pravatar.cc/100?img=45',
    },
    {
        quote:
            "“Used AAL for a 10-day PCT section hike. The weather windows were accurate, the water source map was lifesaving, and Scout AI actually caught that I'd forgotten bear canister requirements for that permit zone.”",
        name: 'Claire T.',
        role: 'Backpacker, Pacific Northwest',
        avatar: 'https://i.pravatar.cc/100?img=48',
    },
]

type Testimonial = (typeof testimonials)[number]

function TestimonialCard({
    testimonial,
}: {
    testimonial: Testimonial
}) {
    return (
        <article
            className="
                flex min-h-[275px] w-[300px] shrink-0 flex-col
                rounded-[10px] bg-card px-6 py-6
                shadow-[0_1px_2px_rgba(0,0,0,0.02)]
                sm:w-[320px]
                lg:min-h-[286px] lg:w-[336px]
            "
        >
            <Quote
                aria-hidden="true"
                className="size-8 fill-background"
                strokeWidth={1.5}
            />

            <p className="mt-7 flex-1 text-[13px] leading-[1.48]  sm:text-[14px]">
                “{testimonial.quote}”
            </p>

            <div className="mt-6 flex items-center gap-3">
                <img
                    src={testimonial.avatar}
                    alt={`${testimonial.name} profile`}
                    className="size-10 shrink-0 rounded-full object-cover"
                />

                <div className="min-w-0">
                    <p className="text-[13px] font-semibold leading-none ">
                        {testimonial.name}
                    </p>

                    <p className="mt-1.5 truncate text-[10px] leading-none ">
                        {testimonial.role}
                    </p>
                </div>
            </div>
        </article>
    )
}

function MarqueeRow({
    items,
    direction = 'left',
    duration = 35,
}: {
    items: Testimonial[]
    direction?: 'left' | 'right'
    duration?: number
}) {
    const reduceMotion = useReducedMotion()

    const startPosition = direction === 'left' ? '0%' : '-50%'
    const endPosition = direction === 'left' ? '-50%' : '0%'

    return (
        <div className="overflow-hidden">
            <motion.div
                initial={{ x: startPosition }}
                animate={
                    reduceMotion
                        ? undefined
                        : {
                            x: [startPosition, endPosition],
                        }
                }
                transition={{
                    duration,
                    ease: 'linear',
                    repeat: Infinity,
                    repeatType: 'loop',
                }}
                className="flex w-max will-change-transform"
            >
                {/* Original group */}
                <div className="flex gap-4 pr-4 sm:gap-5 sm:pr-5 lg:gap-6 lg:pr-6">
                    {items.map((testimonial, index) => (
                        <TestimonialCard
                            key={`original-${testimonial.name}-${index}`}
                            testimonial={testimonial}
                        />
                    ))}
                </div>

                {/* Duplicate group for seamless looping */}
                <div
                    aria-hidden="true"
                    className="flex gap-4 pr-4 sm:gap-5 sm:pr-5 lg:gap-6 lg:pr-6"
                >
                    {items.map((testimonial, index) => (
                        <TestimonialCard
                            key={`duplicate-${testimonial.name}-${index}`}
                            testimonial={testimonial}
                        />
                    ))}
                </div>
            </motion.div>
        </div>
    )
}

export default function TestimonialsSection() {
    const firstRow = testimonials.slice(0, 4)

    const secondRow = [
        ...testimonials.slice(4),
        testimonials[0],
    ]

    return (
        <section className="overflow-hidden bg-background py-20 sm:py-24 lg:py-[110px] relative">
            {/* Header */}
            <div className="mb-12 text-center md:mb-16 max-w-3xl mx-auto">
                {/* <p className="mb-4 text-sm font-medium text-muted-foreground uppercase tracking-wide border w-fit mx-auto px-3 py-1 rounded-full bg-white/5 ">
                    From Our Adventurers
                </p> */}
                <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                    What People Are{' '}
                    <span className="text-[#97B900] italic">Saying</span>
                </h2>
                <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg">
                    {/* See what reviewers, explorers, and outdoor professionals
                    are saying about Apex Adventure Lab */}
                    See what reviewers are saying about TripTrax.
                </p>
            </div>

            <div className="absolute -left-6 top-0 bottom-0 w-25 lg:w-60  bg-gradient-to-r  from-background to-transparent z-10 " />
            <div className="absolute -right-6 top-0 bottom-0 w-25 lg:w-60  bg-gradient-to-l from-background to-transparent z-10 " />
            {/* Moving testimonial rows */}
            <div className="space-y-5 lg:space-y-6 ">
                <MarqueeRow
                    items={firstRow}
                    direction="left"
                    duration={35}
                />

                <MarqueeRow
                    items={secondRow}
                    direction="right"
                    duration={40}
                />
            </div>
        </section>
    )
}