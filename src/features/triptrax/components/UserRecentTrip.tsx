import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { TripStatusVariant } from "../triptrax.interface";
import { recentTrips } from "../data/userRecentTrip.data";


const getStatusClasses = (variant: TripStatusVariant) => {
    switch (variant) {
        case "in-progress":
            return "border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-500/20 dark:bg-amber-500/10 dark:text-amber-400";

        case "ready":
            return "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-400";

        case "completed":
            return "border-zinc-200 bg-zinc-100 text-zinc-600 dark:border-zinc-700 dark:bg-zinc-800/80 dark:text-zinc-300";

        default:
            return "border-border bg-muted text-muted-foreground";
    }
};

const UserRecentTrip = () => {
    return (
        <section className="space-y-4">
            <div className="flex items-center justify-between gap-4">
                <div>
                    <h2 className="text-xl font-bold tracking-tight text-foreground">
                        Recent Trips
                    </h2>

                    <p className="mt-1 text-sm text-muted-foreground">
                        Track your latest travel plans and their current status.
                    </p>
                </div>

                <Link href="/user/travel-trips" className="group flex shrink-0 items-center gap-1.5 text-sm font-semibold text-amber-600 transition-colors hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-300">
                    View all
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
            </div>

            <div className="space-y-3">
                {recentTrips.map((trip) => (
                    <div key={trip.id} className="group flex flex-col gap-4 rounded-2xl border border-border/70 bg-card p-4 shadow-sm transition-all duration-200 hover:border-border hover:shadow-md dark:shadow-none dark:hover:bg-accent/20 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex min-w-0 items-center gap-4">
                            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-muted ring-1 ring-border/50">
                                <Image src={trip.image} alt={trip.title} fill sizes="64px" className="object-cover transition-transform duration-300 group-hover:scale-105" />
                            </div>

                            <div className="min-w-0 space-y-1.5">
                                <div className="flex flex-wrap items-center gap-2">
                                    <h3 className="truncate text-sm font-semibold text-foreground sm:text-base">
                                        {trip.title}
                                    </h3>

                                    <span className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-semibold leading-none ${getStatusClasses(trip.statusVariant)}`}>
                                        {trip.status}
                                    </span>
                                </div>

                                <p className="text-xs leading-5 text-muted-foreground sm:text-sm">
                                    {trip.meta}
                                </p>
                            </div>
                        </div>

                        <div className="shrink-0 sm:pl-4">
                            {trip.actionDisabled ? (
                                <Button disabled variant="outline" className="w-full rounded-xl border-border/60 bg-muted/40 text-muted-foreground opacity-70 sm:w-auto">
                                    {trip.actionText}
                                </Button>
                            ) : (
                                <Button variant="ghost" className="w-full rounded-xl px-4 font-medium hover:bg-amber-50 hover:text-amber-700 dark:hover:bg-amber-500/10 dark:hover:text-amber-400 sm:w-auto">
                                    {trip.actionText}
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default UserRecentTrip;