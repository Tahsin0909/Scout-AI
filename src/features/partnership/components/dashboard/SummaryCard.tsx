interface SummaryCardProps {
    label: string;
    value: string;
    className?: string;
}

export const SummaryCard = ({
    label,
    value,
    className = "",
}: SummaryCardProps) => {
    return (
        <article
            className={`rounded-md bg-card px-4 py-4 sm:px-5 sm:py-5 ${className}`}
        >
            <p className="text-xs font-medium sm:text-sm">
                {label}
            </p>

            <p className="mt-2 text-2xl font-semibold tracking-tight  sm:text-[26px]">
                {value}
            </p>
        </article>
    );
};