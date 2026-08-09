import { Card, CardContent } from "@/components/ui/card";
import {
    ArrowUpRight,
    Calendar,
    CheckCircle2,
    Edit3,
    Layers,
} from "lucide-react";

const UserMetrics = () => {
    return (
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {/* Total Trips */}
            <Card className="group overflow-hidden rounded-2xl border-border/70 bg-card shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-border hover:shadow-md dark:shadow-none dark:hover:bg-accent/20">
                <CardContent className="p-5">
                    <div className="flex items-start justify-between gap-4">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border/70 bg-muted/60 text-muted-foreground transition-colors group-hover:bg-amber-50 group-hover:text-amber-600 dark:group-hover:bg-amber-500/10 dark:group-hover:text-amber-400">
                            <Layers className="h-5 w-5" />
                        </div>

                        <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-400">
                            <ArrowUpRight className="h-3 w-3" />
                            +12%
                        </span>
                    </div>

                    <div className="mt-6">
                        <p className="text-3xl font-bold tracking-tight text-foreground">
                            12
                        </p>

                        <p className="mt-1 text-sm font-medium text-muted-foreground">
                            Total Trips
                        </p>
                    </div>
                </CardContent>
            </Card>

            {/* Upcoming */}
            <Card className="group overflow-hidden rounded-2xl border-border/70 bg-card shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-border hover:shadow-md dark:shadow-none dark:hover:bg-accent/20">
                <CardContent className="p-5">
                    <div className="flex items-start justify-between gap-4">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border/70 bg-muted/60 text-muted-foreground transition-colors group-hover:bg-amber-50 group-hover:text-amber-600 dark:group-hover:bg-amber-500/10 dark:group-hover:text-amber-400">
                            <Calendar className="h-5 w-5" />
                        </div>

                        <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-400">
                            <ArrowUpRight className="h-3 w-3" />
                            +12%
                        </span>
                    </div>

                    <div className="mt-6">
                        <p className="text-3xl font-bold tracking-tight text-foreground">
                            3
                        </p>

                        <p className="mt-1 text-sm font-medium text-muted-foreground">
                            Upcoming
                        </p>
                    </div>
                </CardContent>
            </Card>

            {/* Drafts */}
            <Card className="group overflow-hidden rounded-2xl border-border/70 bg-card shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-border hover:shadow-md dark:shadow-none dark:hover:bg-accent/20">
                <CardContent className="p-5">
                    <div className="flex items-start justify-between gap-4">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border/70 bg-muted/60 text-muted-foreground transition-colors group-hover:bg-amber-50 group-hover:text-amber-600 dark:group-hover:bg-amber-500/10 dark:group-hover:text-amber-400">
                            <Edit3 className="h-5 w-5" />
                        </div>

                        <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-400">
                            <ArrowUpRight className="h-3 w-3" />
                            +8.5%
                        </span>
                    </div>

                    <div className="mt-6">
                        <p className="text-3xl font-bold tracking-tight text-foreground">
                            2
                        </p>

                        <p className="mt-1 text-sm font-medium text-muted-foreground">
                            Drafts
                        </p>
                    </div>
                </CardContent>
            </Card>

            {/* Completed */}
            <Card className="group overflow-hidden rounded-2xl border-border/70 bg-card shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-border hover:shadow-md dark:shadow-none dark:hover:bg-accent/20">
                <CardContent className="p-5">
                    <div className="flex items-start justify-between gap-4">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border/70 bg-muted/60 text-muted-foreground transition-colors group-hover:bg-amber-50 group-hover:text-amber-600 dark:group-hover:bg-amber-500/10 dark:group-hover:text-amber-400">
                            <CheckCircle2 className="h-5 w-5" />
                        </div>

                        <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-400">
                            <ArrowUpRight className="h-3 w-3" />
                            +8.5%
                        </span>
                    </div>

                    <div className="mt-6">
                        <p className="text-3xl font-bold tracking-tight text-foreground">
                            9
                        </p>

                        <p className="mt-1 text-sm font-medium text-muted-foreground">
                            Completed
                        </p>
                    </div>
                </CardContent>
            </Card>
        </section>
    );
};

export default UserMetrics;