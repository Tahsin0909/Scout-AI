import Link from 'next/link'
import { Button } from '@/components/ui/button'

const travelModes = [
    {
        title: 'Hiking Adventures',
        description:
            'Technical off-road corridors, recovery-ready routing, dispersed camping, and terrain analysis for when the pavement ends.',
        image:
            'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1400&q=90',
        buttonClassName:
            'border-[#FFD336] bg-[#FFD336] text-black hover:bg-[#f4c827]',
    },
    {
        title: 'Road Trips',
        description:
            'Curated scenic routes focusing on architectural stays and hidden gastronomic landmarks across continents.',
        image:
            'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1400&q=90',
        buttonClassName:
            'border-white bg-white text-black hover:bg-white/90',
    },
    {
        title: 'RV Journeys',
        description:
            'Travel with confidence in your home on wheels. Get personalised routes, RV-friendly campgrounds, dump stations, fuel stops, and overnight parking recommendations.',
        image:
            'https://images.unsplash.com/photo-1543076659-9380cdf10613?auto=format&fit=crop&w=1400&q=90',
        buttonClassName:
            'border-white bg-white text-black hover:bg-white/90',
    },
    {
        title: 'Overland Expeditions',
        description:
            'The pinnacle of planning. Remote wilderness navigation, satellite communication protocols, and emergency medical mapping.',
        image:
            'https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=1400&q=90',
        buttonClassName:
            'border-white bg-white text-black hover:bg-white/90',
    },
]

export default function TravelModesSection() {
    return (
        <section className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-[110px]">
            <div className="container">
                {/* Header */}
                <div className="mx-auto mb-12 max-w-[620px] text-center md:mb-14">
                    <p className="mb-4 text-sm font-medium text-muted-foreground uppercase tracking-wide border w-fit mx-auto px-3 py-1 rounded-full bg-white/5 ">
                        Travel Modes
                    </p>

                    <h2 className="text-[32px] font-bold leading-[1.15] tracking-[-0.035em] sm:text-[40px] lg:text-[46px]">
                        How Will You{' '}
                        <span className="italic text-[#8EB600]">
                            Go?
                        </span>
                    </h2>

                    <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg">
                        Every mode unlocks a tailored module set, routing
                        logic, gear list, and dossier structure built for that
                        exact type of travel.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-[18px]">
                    {travelModes.map((mode, index) => (
                        <article
                            key={mode.title}
                            className="
                                group relative isolate min-h-[390px]
                                overflow-hidden rounded-[6px] bg-neutral-900
                                sm:min-h-[420px] lg:min-h-[430px]
                            "
                        >
                            {/* Image */}
                            <div
                                aria-hidden="true"
                                className="
                                    absolute inset-0 -z-30 bg-cover bg-center
                                    transition-transform duration-700
                                    ease-out group-hover:scale-[1.04]
                                "
                                style={{
                                    backgroundImage: `url("${mode.image}")`,
                                }}
                            />

                            {/* Dark bottom overlay */}
                            <div
                                aria-hidden="true"
                                className="
                                    absolute inset-0 -z-20
                                    bg-[linear-gradient(to_bottom,rgba(0,0,0,0.02)_25%,rgba(0,0,0,0.16)_50%,rgba(0,0,0,0.9)_100%)]
                                "
                            />

                            {/* Subtle edge overlay */}
                            <div
                                aria-hidden="true"
                                className="
                                    absolute inset-0 -z-10
                                    bg-[linear-gradient(to_right,rgba(0,0,0,0.08),transparent_40%,rgba(0,0,0,0.06))]
                                "
                            />

                            <div className="flex min-h-[390px] flex-col justify-end p-4 sm:min-h-[420px] sm:p-5 lg:min-h-[430px]">
                                <div>
                                    <h3 className="text-[18px] font-semibold leading-tight tracking-[-0.02em] text-white sm:text-[20px]">
                                        {mode.title}
                                    </h3>

                                    <p className="mt-2 max-w-[500px] text-[11px] leading-[1.45] text-white/90 sm:text-xs">
                                        {mode.description}
                                    </p>

                                    <Button
                                        asChild
                                        className={`
                                            mt-4 h-[40px] w-full rounded-[5px]
                                            border px-5 text-[13px] font-medium
                                            shadow-none transition-all
                                            duration-300 hover:scale-[1.01]
                                            active:scale-[0.99]
                                            ${mode.buttonClassName}
                                        `}
                                    >
                                        <Link href={`/travel-modes/${index + 1}`}>
                                            Start Planning
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}