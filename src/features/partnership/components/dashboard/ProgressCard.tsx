interface ProgressCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export const ProgressCard = ({
    icon,
    title,
    description,
}: ProgressCardProps) => {
    return (
        <article className="flex min-w-0 items-center gap-3 rounded-xl bg-card border p-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ">
                {icon}
            </div>

            <div className="min-w-0">
                <p className="text-sm font-semibold  sm:text-base">
                    {title}
                </p>

                <p className="mt-1 truncate text-xs ">
                    {description}
                </p>
            </div>
        </article>
    );
};