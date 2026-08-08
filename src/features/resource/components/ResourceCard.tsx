import { Download, PlayCircle } from "lucide-react";

interface ResourceCardProps {
    title: string;
    description: string;
    category: "Assets" | "Training" | "Templates";
    actionLabel: string;
    icon: React.ReactNode;
}

export const ResourceCard = ({
    title,
    description,
    category,
    actionLabel,
    icon
}: ResourceCardProps) => {
    return (
        <article className="flex min-h-[190px] flex-col rounded-xl border border-border/60 bg-card p-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-muted">
                {icon}
            </div>

            <h3 className="mt-4 text-sm font-medium">
                {title}
            </h3>

            <p className="mt-2 line-clamp-3 text-xs leading-5 text-muted-foreground">
                {description}
            </p>

            <button
                type="button"
                className="mt-auto flex items-center gap-2 pt-4 text-left text-xs font-medium text-yellow-400 transition-colors hover:text-yellow-300"
            >
                {category === "Training" ? (
                    <PlayCircle className="h-4 w-4" />
                ) : (
                    <Download className="h-4 w-4" />
                )}

                {actionLabel}
            </button>
        </article>
    );
};