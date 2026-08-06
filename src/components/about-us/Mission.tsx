
"use client"

const galleryImages = {
    waterfall:
        'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200&q=90',
    coast:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=90',
    ocean:
        'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=90',
    mountain:
        'https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=1200&q=90',
}

import { motion } from 'framer-motion'

import { cardImageVariants } from '@/lib/animation'

export default function MissionSection() {
    return (
        <section className="bg-background px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
            <div className="container">
                {/* Content */}

                <div className="max-w-[1240px]">
                    <p className="mb-4 text-sm font-medium text-muted-foreground uppercase tracking-wide border w-fit px-3 py-1 rounded-full bg-white/5 ">
                        Our Mission
                    </p>
                    <h2
                        className="
                            text-[32px] font-bold leading-[1.1]
                            tracking-[-0.035em] text-foreground
                            sm:text-[40px] lg:text-[48px]
                        "
                    >
                        Plan. Track. Go.
                    </h2>

                    <div
                        className="
                            mt-5 max-w-[1220px] space-y-1
                            text-sm leading-[1.5] text-muted-foreground
                            sm:text-base sm:leading-[1.45]
                        "
                    >
                        <p>
                            TripTrax is a platform built for a purpose. Initially conceived as a personal project by an active-duty U.S. servicemember who has spent over a decade balancing a demanding military lifestyle with a passion for the outdoors, it has since evolved into the world's first Al- powered, expert-verified adventure planning platform.
                        </p>

                        <p>
                            We understand that life is busy. People like us recharge when we can unplug and get outside. Proper preparation doesn't diminish adventure - it enables it. When your route is clear, your gear is dialed, your weather window is right, and your emergency contacts are set, you can step off with confidence. Less time spent hesitating and less time spent worrying means more time spent exploring. Every moment outside makes life better. It's good for the soul. That's why we do what we do.
                        </p>

                        <p>
                            The world is meant to be explored. We're here to help you get there safely, intelligently, and with a personalized package that accounts for everything you didn't think to think about.
                        </p>
                    </div>
                </div>

                {/* Image collage */}
                <div
                    className="
                        mt-12 grid grid-cols-1 gap-2
                        sm:grid-cols-2
                        lg:h-[600px] lg:grid-cols-3
                    "
                >
                    {/* Left tall image */}
                    <GalleryImage
                        image={galleryImages.waterfall}
                        className="
                            min-h-[360px]
                            sm:min-h-[430px]
                            lg:h-full
                        "
                        position="center"
                    />

                    {/* Middle stacked images */}
                    <div className="grid min-h-[520px] grid-rows-2 gap-2 sm:min-h-[430px] lg:h-full">
                        <GalleryImage
                            image={galleryImages.coast}
                            className="h-full"
                            position="center"
                        />

                        <GalleryImage
                            image={galleryImages.ocean}
                            className="h-full"
                            position="center"
                        />
                    </div>

                    {/* Right tall image */}
                    <GalleryImage
                        image={galleryImages.mountain}
                        className="
                            min-h-[360px]
                            sm:col-span-2 sm:min-h-[480px]
                            lg:col-span-1 lg:h-full lg:min-h-0
                        "
                        position="center"
                    />
                </div>
            </div>
        </section>
    )
}

type GalleryImageProps = {
    image: string
    className?: string
    position?: string
}

function GalleryImage({
    image,
    className,
    position = 'center',
}: GalleryImageProps) {
    return (
        <motion.div
            initial="visible"
            animate="visible"
            whileHover="hover"
            className={`
                relative overflow-hidden rounded-[12px]
                bg-muted
                ${className ?? ''}
            `}
        >
            <motion.div
                aria-hidden="true"
                variants={cardImageVariants}
                className="
                    pointer-events-none absolute inset-0
                    bg-cover bg-center bg-no-repeat
                    will-change-transform
                "
                style={{
                    backgroundImage: `url("${image}")`,
                    backgroundPosition: position,
                }}
            />

            <div
                aria-hidden="true"
                className="
                    pointer-events-none absolute inset-0
                    bg-black/0
                    transition-colors duration-700
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                    group-hover:bg-black/[0.035]
                "
            />
        </motion.div>
    )
}
