
import { Button } from '@/components/ui/button'

type AdventureKnowledgeHeroProps = {
    backgroundImage?: string
    title?: string
    subtitle?: string
    searchPlaceholder?: string
}

export default function AdventureKnowledgeHeader({
    backgroundImage = '/articlesHeader.png',
    title = 'Adventure Knowledge\nFor Every Journey',
    subtitle = 'Gear reviews, destination guides, trip planning tips, and dispatches from the field.',
    searchPlaceholder = 'Search for hiking, safety, or gear...',
}: AdventureKnowledgeHeroProps) {
    return (
        <section
            className="
                relative isolate flex min-h-[560px] w-full
                overflow-hidden bg-neutral-950
                sm:min-h-[600px]
                lg:min-h-[620px]
            "
        >
            {/* Background image */}
            <div
                aria-hidden="true"
                className="
                    absolute inset-0 -z-30
                    bg-cover bg-[center_48%] bg-no-repeat
                    sm:bg-center
                "
                style={{
                    backgroundImage: `url("${backgroundImage}")`,
                }}
            />

            {/* Overall dark overlay */}
            {/* <div
                aria-hidden="true"
                className="
                    pointer-events-none absolute inset-0 -z-20
                    bg-black/25
                "
            /> */}

            {/* Left-side readability gradient */}
            <div
                aria-hidden="true"
                className="
                    pointer-events-none absolute inset-0 -z-10
                    bg-[linear-gradient(90deg,rgba(0,0,0,0.72)_0%,rgba(0,0,0,0.48)_40%,rgba(0,0,0,0.10)_75%,transparent_100%)]
                "
            />

            {/* Bottom cinematic gradient */}
            <div
                aria-hidden="true"
                className="
                    pointer-events-none absolute inset-0 -z-10
                    bg-[linear-gradient(to_top,rgba(0,0,0,0.72)_0%,rgba(0,0,0,0.28)_40%,transparent_72%)]
                "
            />

            <div
                className="
                    container flex w-full items-end
                    px-5 pb-12 pt-28
                    sm:px-8 sm:pb-16
                    lg:px-12 lg:pb-[62px]
                "
            >
                <div className="w-full max-w-[670px] text-white">
                    <h1
                        className="
                            whitespace-pre-line
                            text-[38px] font-semibold
                            leading-[1.23] tracking-[-0.025em]
                            sm:text-[48px]
                            lg:text-[56px]
                        "
                    >
                        {title}
                    </h1>

                    <p
                        className="
                            mt-5 max-w-[610px]
                            text-sm leading-relaxed text-white/85
                            sm:text-base
                        "
                    >
                        {subtitle}
                    </p>

                    <form
                        role="search"
                        className="
                            mt-7 flex w-full max-w-[540px]
                            flex-col gap-3 
                            sm:flex-row sm:items-center sm:gap-0
                        "
                    >
                        <label htmlFor="adventure-search" className="sr-only">
                            Search adventure articles
                        </label>

                        <div
                            className="
                                relative flex h-[50px] flex-1
                                items-center 
                            "
                        >
                            <input
                                id="adventure-search"
                                name="query"
                                type="search"
                                placeholder={searchPlaceholder}
                                className="px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-silver-gray/70 focus:outline-none focus:border-primary transition-colors w-full sm:w-[450px] placeholder:ml-10"
                            />
                        </div>

                        <Button
                            type="submit"
                            variant={"primary"}
                            size={"lg"}
                            className='ml-3'
                        >
                            <span>Search</span>
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    )
}