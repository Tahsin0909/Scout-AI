import { Card, CardContent } from "@/components/ui/card";
import {
    ArrowUpRight,
    DollarSign,
    RefreshCw,
    UserCheck,
    Users,
} from "lucide-react";

const AdminMetrics = () => {
    return (
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {/* Total Members */}
            <Card className="group overflow-hidden rounded-2xl border-border/70 bg-card shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-border hover:shadow-md dark:shadow-none dark:hover:bg-accent/20">
                <CardContent className="p-5">
                    <div className="flex items-start justify-between gap-4">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border/70 bg-muted/60 text-muted-foreground transition-colors group-hover:bg-amber-50 group-hover:text-amber-600 dark:group-hover:bg-amber-500/10 dark:group-hover:text-amber-400">
                            <Users className="h-5 w-5" />
                        </div>

                        <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-400">
                            <ArrowUpRight className="h-3 w-3" />
                            +12%
                        </span>
                    </div>

                    <div className="mt-6">
                        <p className="text-3xl font-bold tracking-tight text-foreground">
                            2,486
                        </p>

                        <p className="mt-1 text-sm font-medium text-muted-foreground">
                            Total Members
                        </p>
                    </div>
                </CardContent>
            </Card>

            {/* Active Memberships */}
            <Card className="group overflow-hidden rounded-2xl border-border/70 bg-card shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-border hover:shadow-md dark:shadow-none dark:hover:bg-accent/20">
                <CardContent className="p-5">
                    <div className="flex items-start justify-between gap-4">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border/70 bg-muted/60 text-muted-foreground transition-colors group-hover:bg-amber-50 group-hover:text-amber-600 dark:group-hover:bg-amber-500/10 dark:group-hover:text-amber-400">
                            <UserCheck className="h-5 w-5" />
                        </div>

                        <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-400">
                            <ArrowUpRight className="h-3 w-3" />
                            +12%
                        </span>
                    </div>

                    <div className="mt-6">
                        <p className="text-3xl font-bold tracking-tight text-foreground">
                            2,214
                        </p>

                        <p className="mt-1 text-sm font-medium text-muted-foreground">
                            Active Memberships
                        </p>
                    </div>
                </CardContent>
            </Card>

            {/* Monthly Revenue */}
            <Card className="group overflow-hidden rounded-2xl border-border/70 bg-card shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-border hover:shadow-md dark:shadow-none dark:hover:bg-accent/20">
                <CardContent className="p-5">
                    <div className="flex items-start justify-between gap-4">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border/70 bg-muted/60 text-muted-foreground transition-colors group-hover:bg-amber-50 group-hover:text-amber-600 dark:group-hover:bg-amber-500/10 dark:group-hover:text-amber-400">
                            <DollarSign className="h-5 w-5" />
                        </div>

                        <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-400">
                            <ArrowUpRight className="h-3 w-3" />
                            +8.5%
                        </span>
                    </div>

                    <div className="mt-6">
                        <p className="text-3xl font-bold tracking-tight text-foreground">
                            $18,420
                        </p>

                        <p className="mt-1 text-sm font-medium text-muted-foreground">
                            Monthly Revenue
                        </p>
                    </div>
                </CardContent>
            </Card>

            {/* Membership Renewals */}
            <Card className="group overflow-hidden rounded-2xl border-border/70 bg-card shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-border hover:shadow-md dark:shadow-none dark:hover:bg-accent/20">
                <CardContent className="p-5">
                    <div className="flex items-start justify-between gap-4">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border/70 bg-muted/60 text-muted-foreground transition-colors group-hover:bg-amber-50 group-hover:text-amber-600 dark:group-hover:bg-amber-500/10 dark:group-hover:text-amber-400">
                            <RefreshCw className="h-5 w-5" />
                        </div>

                        <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-400">
                            <ArrowUpRight className="h-3 w-3" />
                            +8.5%
                        </span>
                    </div>

                    <div className="mt-6">
                        <p className="text-3xl font-bold tracking-tight text-foreground">
                            128
                        </p>

                        <p className="mt-1 text-sm font-medium text-muted-foreground">
                            Membership Renewals
                        </p>
                    </div>
                </CardContent>
            </Card>
        </section>
    );
};

export default AdminMetrics;