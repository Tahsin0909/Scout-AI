export function PlaceSkeleton() {
    return (
        <div className="rounded-xl border border-border bg-card p-3">
            <div className="flex items-start gap-3">
                <div className="h-9 w-9 shrink-0 animate-pulse rounded-lg bg-muted" />

                <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                        <div className="h-4 w-3/5 animate-pulse rounded bg-muted" />

                        <div className="h-5 w-12 shrink-0 animate-pulse rounded-md bg-muted" />
                    </div>

                    <div className="mt-2 h-3 w-4/5 animate-pulse rounded bg-muted" />

                    <div className="mt-3 flex items-center justify-between gap-2">
                        <div className="h-5 w-16 animate-pulse rounded-md bg-muted" />

                        <div className="h-4 w-12 animate-pulse rounded bg-muted" />
                    </div>
                </div>
            </div>
        </div>
    );
}