const timeline = [
    {
        year: '2023',
        title: 'The Idea',
        description:
            'Marcus returns from a poorly planned overland trip in Baja and starts sketching the first version of what would become Apex Adventure Lab.',
    },
    {
        year: '2024',
        title: 'Building the Engine',
        description:
            'Jordan joins as lead AI engineer. The first version of Scout AI is built, along with the module system and intake form architecture.',
    },
    {
        year: '2025',
        title: 'Beta Testing',
        description:
            'Dani and Priya join the team. 200 beta users test the platform across 400+ dossiers. The human review layer is formalized. Stripe integration goes live.',
    },
    {
        year: '2026',
        title: 'Public Launch',
        description:
            'Apex Adventure Lab opens to the public with four travel modes, four membership tiers, and a growing library of modules. The expedition begins.',
    },
]

export default function CompanyTimelineSection() {
    return (
        <section className="bg-background px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
            <div className="container">
                {/* Header */}
                <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-14 lg:mb-16">
                    <p
                        className="
                            mx-auto mb-5 w-fit rounded-full
                            border border-border bg-card px-3 py-1
                            text-[10px] font-medium uppercase
                            tracking-wide text-muted-foreground
                        "
                    >
                        Services Plan
                    </p>

                    <h2
                        className="
                            text-3xl font-bold leading-tight
                            tracking-[-0.035em]
                            sm:text-4xl lg:text-5xl
                        "
                    >
                        The Trip That{' '}
                        <span className="italic text-[#97B900]">
                            Started It All
                        </span>
                    </h2>
                </div>

                {/* Timeline */}
                <div className="mx-auto max-w-[900px]">
                    {timeline.map((item) => (
                        <article
                            key={item.year}
                            className="
                                grid gap-3 border-b border-border
                                py-6 first:border-t
                                sm:grid-cols-[1fr_auto]
                                sm:items-center sm:gap-8
                                lg:py-7
                            "
                        >
                            {/* Mobile year */}
                            <p
                                className="
                                    text-xl font-bold tracking-[-0.03em]
                                    text-foreground
                                    sm:hidden
                                "
                            >
                                {item.year}
                            </p>

                            <div>
                                <h3
                                    className="
                                        text-lg font-semibold leading-tight
                                        tracking-[-0.02em]
                                        sm:text-xl lg:text-[22px]
                                    "
                                >
                                    {item.title}
                                </h3>

                                <p
                                    className="
                                        mt-2 max-w-[680px]
                                        text-sm leading-relaxed
                                        text-muted-foreground
                                        sm:text-[15px]
                                    "
                                >
                                    {item.description}
                                </p>
                            </div>

                            {/* Desktop year */}
                            <p
                                className="
                                    hidden min-w-[90px] text-right
                                    text-2xl font-bold
                                    tracking-[-0.035em]
                                    text-foreground
                                    sm:block lg:text-3xl
                                "
                            >
                                {item.year}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}