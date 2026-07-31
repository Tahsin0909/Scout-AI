import { ReactNode } from "react";

type StepCardProps = {
    title: string;
    children: ReactNode;
};

export function StepCard({
    title,
    children,
}: StepCardProps) {
    return (
        <section
            className="
                rounded-xl border
                border-black/[0.06]
                bg-white p-5
                shadow-sm
                transition-colors
                dark:border-white/[0.07]
                dark:bg-[#282828]
                sm:p-7
            "
        >
            <h2
                className="
                    border-b
                    border-black/[0.06]
                    pb-4 text-lg
                    font-medium
                    dark:border-white/[0.07]
                "
            >
                {title}
            </h2>

            <div className="mt-6">
                {children}
            </div>
        </section>
    );
}