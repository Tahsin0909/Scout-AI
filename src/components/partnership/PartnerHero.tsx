'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

const stats = [
    { value: '4', label: 'Travel Modes' },
    { value: '6+', label: 'AI Modules' },
    { value: '48h', label: 'Avg. Delivery' },
    { value: '100%', label: 'Human-Reviewed' },
]

export default function PartnerHero() {
    const backgroundImage = "./partnerHeroImage.png"

    return (
        <section
            className="relative isolate min-h-[90vh] w-full overflow-hidden bg-neutral-950 sm:bg-cover bg-center"
            style={{ backgroundImage: `url("${backgroundImage}")` }}
        >
            <div className="mx-auto flex min-h-[90vh] w-full container flex-col px-5 py-8 sm:px-8 lg:px-10">
                {/* Main content */}
                <div className="flex flex-1 items-center pt-10 lg:pt-20">
                    <div className="w-full max-w-[670px]">
                        <div className="mb-4 text-sm font-medium text-muted-foreground uppercase tracking-wide w-fit px-3 py-1 rounded-full bg-white/8 backdrop-blur-md">
                            Adventure, Down To A Science
                        </div>

                        <h1 className="text-[38px] font-bold leading-[1.28] tracking-[-0.025em] text-white sm:text-[48px] lg:text-[56px]">
                            Become

                            <br />

                            <span className="sm:whitespace-nowrap">
                                a TripTrax{' '}
                                <span className="italic text-[#C8F500]">
                                    Partner
                                </span>
                            </span>
                        </h1>

                        <p className="mt-4 max-w-[610px] text-[14px] leading-[1.45] text-white/90 sm:text-[15px]">
                            Join a community of outdoor creators, adventurers, and explorers
                            <br className="hidden sm:block" />
                            helping inspire others while earning rewards, exclusive benefits,
                            and referral commissions.
                        </p>

                        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                            <Button
                                asChild
                                variant="primary"
                                size={"lg"}
                            >
                                <Link href="/partnerShip-apply">Apply Now</Link>
                            </Button>

                            <Button
                                asChild
                                variant="ghost"
                                size={"lg"}
                                className=""
                            >
                                <Link href="/partnerShip-agreement">
                                    Read Partner Agreement
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
                                    <p className="text-[30px] font-semibold leading-none tracking-[-0.02em] sm:text-[31px] lg:text-[40px]">
                                        {stat.value}
                                    </p>

                                    <p className="mt-3 whitespace-nowrap text-[10px] lg:text-[14px] font-medium leading-none text-black/65">
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