import { Check } from "lucide-react";

type CheckboxRowProps = {
    checked: boolean;
    title: string;
    description?: string;
    className?: string;
    onChange: (
        checked: boolean,
    ) => void;
};

export function CheckboxRow({
    checked,
    title,
    description,
    className = "",
    onChange,
}: CheckboxRowProps) {
    return (
        <label
            className={`
                flex cursor-pointer
                items-start gap-3
                ${className}
            `}
        >
            <input
                type="checkbox"
                checked={checked}
                onChange={event =>
                    onChange(
                        event.target.checked,
                    )
                }
                className="peer sr-only"
            />

            <span
                className="
                    mt-0.5 flex size-5
                    shrink-0 items-center
                    justify-center
                    rounded border
                    border-border
                    bg-background
                    text-transparent
                    transition-colors
                    peer-checked:border-primary
                    peer-checked:bg-primary
                    peer-checked:text-primary-foreground
                    dark:bg-[#171717]
                "
            >
                <Check className="size-3.5" />
            </span>

            <span>
                <span
                    className="
                        block text-sm
                        font-semibold
                        text-foreground
                    "
                >
                    {title}
                </span>

                {description && (
                    <span
                        className="
                            mt-1 block
                            text-sm leading-5
                            text-muted-foreground
                        "
                    >
                        {description}
                    </span>
                )}
            </span>
        </label>
    );
}