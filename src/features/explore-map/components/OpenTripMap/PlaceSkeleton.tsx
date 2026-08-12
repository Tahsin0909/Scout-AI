export function PlaceSkeleton() {
    return (
        <div className="overflow-hidden rounded-[26px] border border-zinc-200 bg-white p-5">
            <div className="flex items-center justify-between">
                <div className="h-12 w-12 animate-pulse rounded-2xl bg-zinc-100" />
                <div className="h-7 w-20 animate-pulse rounded-full bg-zinc-100" />
            </div>

            <div className="mt-5 h-6 w-3/4 animate-pulse rounded bg-zinc-100" />
            <div className="mt-3 h-4 w-full animate-pulse rounded bg-zinc-100" />
            <div className="mt-2 h-4 w-2/3 animate-pulse rounded bg-zinc-100" />
            <div className="mt-6 h-10 w-full animate-pulse rounded-xl bg-zinc-100" />
        </div>
    );
}
