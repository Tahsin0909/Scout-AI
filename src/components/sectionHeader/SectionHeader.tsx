import { cn } from '@/lib/utils'

type AboutHeroSectionProps = {
    title: string
    subtitle: string
    metrics?: string | number
    metricsSubtitle?: string
    backgroundImage: string
    description?: string
    className?: string
}

export default function SectionHeader({
    title,
    subtitle,
    metrics,
    metricsSubtitle,
    backgroundImage,
    description,
    className,
}: AboutHeroSectionProps) {
    return (
        <section
            className={cn(
                'relative isolate overflow-hidden bg-neutral-900',
                className,
            )}
        >
            {/* Background */}
            <div
                aria-hidden="true"
                className="
                    absolute inset-0 -z-30
                    bg-cover bg-no-repeat
                    transition-transform duration-700
                    lg:bg-[center_-350px]
                "
                style={{
                    backgroundImage: `url("${backgroundImage}")`,
                }}
            />



            <div
                className="
                    container relative
                    min-h-[360px]
                    px-5 pb-28 pt-16
                    sm:min-h-[400px] sm:px-8 sm:pb-32 sm:pt-20
                    lg:min-h-[430px] lg:px-12 lg:pb-28 lg:pt-20
                "
            >
                {/* Content */}
                <div className="max-w-[900px] text-white">
                    <h2
                        className="
                            text-[38px] font-bold leading-[1.05]
                            tracking-[-0.035em]
                            sm:text-[48px]
                            lg:text-[58px]
                        "
                    >
                        {title}
                    </h2>

                    <p
                        className="
                            mt-4 text-[32px] font-semibold italic
                            leading-[1.08] tracking-[-0.025em]
                            text-white
                            sm:text-[42px]
                            lg:text-[50px]
                        "
                    >
                        {subtitle}
                    </p>

                    {description && (
                        <p
                            className="
                                mt-7 max-w-[920px]
                                text-base leading-relaxed
                                text-white/90
                                sm:text-lg
                                lg:text-[20px]
                            "
                        >
                            {description}
                        </p>
                    )}
                </div>

                <div>

                </div>
                {/* Metrics card */}
                {
                    metrics && <div
                        className="
                        absolute bottom-0 right-5
                        flex min-h-[120px] w-[220px]
                        translate-y-1/2 flex-col
                        items-center justify-center
                        bg-white px-5 py-5 text-center
                        text-black shadow-[0_12px_30px_rgba(0,0,0,0.12)]
                        sm:right-8 sm:min-h-[132px] sm:w-[260px]
                        lg:right-12 lg:min-h-[145px] lg:w-[290px]
                    "
                    >
                        <strong
                            className="
                            text-[38px] font-bold leading-none
                            tracking-[-0.04em]
                            sm:text-[44px]
                            lg:text-[52px]
                        "
                        >
                            {metrics} +
                        </strong>

                        <span
                            className="
                            mt-4 text-xs font-medium
                            text-black/60
                            sm:text-sm
                        "
                        >
                            {metricsSubtitle}
                        </span>
                    </div>
                }
            </div>

            {/* Space for overlapping metrics card */}
            <div className="h-[75px] bg-background sm:h-[82px]" />
        </section>
    )
}