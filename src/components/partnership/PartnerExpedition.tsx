import { FaAward, FaSackDollar } from "react-icons/fa6";
import { HiRocketLaunch } from "react-icons/hi2";
export default function PartnerExpedition() {
    return (
        <section className="w-full bg-background py-16 md:py-24 lg:py-32">
            <div className="container px-4 sm:px-6 lg:px-8 ">
                {/* Header */}
                <div className="mb-12 text-center md:mb-16 max-w-3xl mx-auto">
                    <p className="mb-4 text-sm font-medium text-muted-foreground uppercase tracking-wide border w-fit mx-auto px-3 py-1 rounded-full bg-white/5 ">
                        The Platform
                    </p>
                    <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                        Empowering Your Expedition{' '}
                        <span className="text-[#97B900] italic">Engine</span>
                    </h2>
                    <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg">
                        We value the authentic stories of explorers. Our partner program is designed to reward your influence and passion for the great outdoors.
                    </p>
                </div>

                {/* Feature Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-16">
                    {/* Referral */}
                    <div
                        className="
            group cursor-pointer rounded-lg border border-transparent
            bg-card p-6 lg:col-span-6
            transition-[background-color,border-color,box-shadow,transform]
            duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
            
            hover:border-white/10
            hover:bg-card-foreground
            hover:shadow-[0_18px_45px_-20px_rgba(0,0,0,0.35)]
        "
                    >
                        <div
                            className="
                mb-6 w-fit rounded-lg bg-icon-bg p-2 lg:mb-12
                transition-[background-color,transform]
                duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
                group-hover:scale-105
                group-hover:bg-icon-bg-hover
            "
                        >
                            <FaSackDollar
                                className="
                    size-8 text-card-foreground
                    transition-colors duration-300 ease-out
                    group-hover:text-card
                "
                            />
                        </div>

                        <h3
                            className="
                mb-3 text-card-foreground lg:text-2xl
                transition-colors duration-300 ease-out
                group-hover:text-card
            "
                        >
                            Earn Referral Commissions
                        </h3>

                        <p
                            className="
                text-muted-foreground
                transition-colors duration-300 ease-out
                group-hover:text-card/80
            "
                        >
                            Get paid for every successful referral through your unique tracking link.
                        </p>
                    </div>

                    {/* Membership */}
                    <div
                        className="
            group cursor-pointer rounded-lg border border-transparent
            bg-card p-6 lg:col-span-5
            transition-[background-color,border-color,box-shadow,transform]
            duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
            
            hover:border-white/10
            hover:bg-card-foreground
            hover:shadow-[0_18px_45px_-20px_rgba(0,0,0,0.35)]
        "
                    >
                        <div
                            className="
                mb-6 w-fit rounded-lg bg-icon-bg p-2 lg:mb-12
                transition-[background-color,transform]
                duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
                group-hover:scale-105
                group-hover:bg-icon-bg-hover
            "
                        >
                            <FaAward
                                className="
                    size-8 text-card-foreground
                    transition-colors duration-300 ease-out
                    group-hover:text-card
                "
                            />
                        </div>

                        <h3
                            className="
                mb-3 text-card-foreground lg:text-2xl
                transition-colors duration-300 ease-out
                group-hover:text-card
            "
                        >
                            Exclusive Elite Membership
                        </h3>

                        <p
                            className="
                text-muted-foreground
                transition-colors duration-300 ease-out
                group-hover:text-card/80
            "
                        >
                            Complimentary access to our highest tier of planning tools and guides.
                        </p>
                    </div>

                    {/*  Early Feature Access */}
                    <div
                        className="
            group cursor-pointer rounded-lg border border-transparent
            bg-card p-6 lg:col-span-5
            transition-[background-color,border-color,box-shadow,transform]
            duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
            
            hover:border-white/10
            hover:bg-card-foreground
            hover:shadow-[0_18px_45px_-20px_rgba(0,0,0,0.35)]
        "
                    >
                        <div
                            className="
                mb-6 w-fit rounded-lg bg-icon-bg p-2 lg:mb-12
                transition-[background-color,transform]
                duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
                group-hover:scale-105
                group-hover:bg-icon-bg-hover
            "
                        >
                            <HiRocketLaunch
                                className="
                    size-8 text-card-foreground
                    transition-colors duration-300 ease-out
                    group-hover:text-card
                "
                            />
                        </div>

                        <h3
                            className="
                mb-3 text-card-foreground lg:text-2xl
                transition-colors duration-300 ease-out
                group-hover:text-card
            "
                        >
                            Early Feature Access
                        </h3>

                        <p
                            className="
                text-muted-foreground
                transition-colors duration-300 ease-out
                group-hover:text-card/80
            "
                        >
                            Be the first to test and review new technical features before launch.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
