export function PlaceSkeleton() {
    return (
        <div className="rounded-2xl border border-white/10 bg-black/30 p-3 backdrop-blur-md">
            <div className="flex items-start gap-3">
                <div className="h-9 w-9 shrink-0 animate-pulse rounded-xl border border-white/10 bg-white/10" />

                <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                        <div className="h-4 w-3/5 animate-pulse rounded-md bg-white/10" />

                        <div className="h-6 w-14 shrink-0 animate-pulse rounded-lg bg-white/10" />
                    </div>

                    <div className="mt-2 h-3 w-4/5 animate-pulse rounded-md bg-white/5" />

                    <div className="mt-3 flex items-center justify-between gap-2">
                        <div className="h-6 w-20 animate-pulse rounded-lg border border-white/10 bg-white/5" />

                        <div className="flex items-center gap-1.5">
                            <div className="h-3 w-10 animate-pulse rounded bg-white/10" />
                            <div className="h-3.5 w-3.5 animate-pulse rounded bg-white/10" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}