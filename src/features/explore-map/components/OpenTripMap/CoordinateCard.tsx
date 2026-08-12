

export function CoordinateCard({
    label,
    value,
}: {
    label: string;
    value: string;
}) {
    return (
        <div className="rounded-xl border border-zinc-200 bg-white p-3">
            <p className="text-[11px] font-medium uppercase tracking-wide text-zinc-400">
                {label}
            </p>

            <p className="mt-1 text-sm font-semibold text-zinc-800">
                {value}
            </p>
        </div>
    );
}
