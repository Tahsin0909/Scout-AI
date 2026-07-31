import { ReactNode } from "react";

interface SummaryCardProps {
    label: string;
    value: string;
    icon?: ReactNode;
    className?: string;
}

export const SummaryCard = ({
    label,
    value,
    icon,
    className = "",
}: SummaryCardProps) => {
    return (
        <article
            className={`rounded-md bg-card px-4 py-4 sm:px-5 sm:py-5 ${className}`}
        >
            <div className="flex items-center gap-2">
                {icon && (
                    <span className="flex shrink-0 items-center justify-center">
                        {icon}
                    </span>
                )}

                <p className="text-xs font-medium sm:text-sm">
                    {label}
                </p>
            </div>

            <p className="mt-2 text-2xl font-semibold tracking-tight sm:text-[26px]">
                {value}
            </p>
        </article>
    );
};