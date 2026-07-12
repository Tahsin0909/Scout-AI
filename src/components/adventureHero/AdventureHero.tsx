'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

const stats = [
    { value: '4', label: 'Travel Modes' },
    { value: '6+', label: 'AI Modules' },
    { value: '48h', label: 'Avg. Delivery' },
    { value: '100%', label: 'Human-Reviewed' },
]

export default function AdventureHero() {
    const backgroundImage = "./AdventureHeroImage.png"

    return (
        <section
            className="relative isolate min-h-[90vh] w-full overflow-hidden bg-neutral-950 sm:bg-cover bg-center"
            style={{ backgroundImage: `url("${backgroundImage}")` }}
        >
            <div className="mx-auto flex min-h-[90vh] w-full max-w-[1440px] flex-col px-5 py-8 sm:px-8 lg:px-10">
                {/* Main content */}
                <div className="flex flex-1 items-center pt-10 lg:pt-20">
                    <div className="w-full max-w-[670px]">
                        <div className="mb-7 inline-flex h-[30px] items-center rounded-full border border-white/10 bg-white/[0.08] px-4 text-[11px] font-medium text-white backdrop-blur-md">
                            Adventure, Down To A Science
                        </div>

                        <h1 className="text-[38px] font-bold leading-[1.28] tracking-[-0.025em] text-white sm:text-[48px] lg:text-[56px]">
                            Choose Your Adventure
                            <br />

                            <span className="sm:whitespace-nowrap">
                                Leave The{' '}
                                <span className="italic text-[#C8F500]">
                                    Science To Us
                                </span>
                            </span>
                        </h1>

                        <p className="mt-4 max-w-[610px] text-[14px] leading-[1.45] text-white/90 sm:text-[15px]">
                            The world&apos;s first AI-powered,
                            human-in-the-loop adventure planning platform.
                            <br className="hidden sm:block" />
                            One tailored dossier — every detail of your
                            expedition, built to a science.
                        </p>

                        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                            <Button
                                asChild
                                className="h-[42px] w-full rounded-[6px] border-0 bg-[#FFD239] px-8 text-[14px] font-medium text-black shadow-none hover:bg-[#ffd957] sm:w-[157px]"
                            >
                                <Link href="/plan">Plan Your Trip</Link>
                            </Button>

                            <Button
                                asChild
                                variant="outline"
                                className="h-[42px] w-full rounded-[6px] border border-white/5 bg-[#222222] px-8 text-[14px] font-medium text-white shadow-none hover:bg-[#2c2c2c] hover:text-white sm:w-[151px]"
                            >
                                <Link href="/how-it-works">
                                    How It Works
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Stats */}
                <div className="mt-12 flex justify-center lg:mt-0 lg:justify-end">
                    <div className="grid w-full grid-cols-2 gap-[3px] sm:w-auto sm:grid-cols-4">
                        {stats.map((stat) => (
                            <div
                                key={stat.label}
                                className="flex min-h-[88px] items-center justify-center rounded-[6px] border border-black/10 bg-white px-3 py-4 text-center text-black shadow-sm sm:h-[88px] lg:h-[140px] sm:w-[107px] lg:w-[140px]"
                            >
                                <div>
                                    <p className="text-[30px] font-semibold leading-none tracking-[-0.02em] sm:text-[31px]">
                                        {stat.value}
                                    </p>

                                    <p className="mt-3 whitespace-nowrap text-[10px] font-medium leading-none text-black/65">
                                        {stat.label}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}