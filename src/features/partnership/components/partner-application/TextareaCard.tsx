import { StepCard } from "./StepCard";

type TextareaCardProps = {
    title: string;
    description: string;
    placeholder: string;
    value: string;
    maxLength: number;
    onChange: (value: string) => void;
};

export function TextareaCard({
    title,
    description,
    placeholder,
    value,
    maxLength,
    onChange,
}: TextareaCardProps) {
    return (
        <StepCard title={title}>
            <p
                className="
                    max-w-2xl text-sm
                    leading-6
                    text-muted-foreground
                "
            >
                {description}
            </p>

            <div className="relative mt-4">
                <textarea
                    value={value}
                    maxLength={maxLength}
                    placeholder={placeholder}
                    onChange={event =>
                        onChange(
                            event.target.value,
                        )
                    }
                    className="
                        min-h-[170px]
                        w-full resize-y
                        rounded-lg border
                        border-border
                        bg-background
                        px-4 py-3
                        pb-10 text-sm
                        leading-6
                        text-foreground
                        outline-none
                        transition-[border-color,box-shadow]
                        placeholder:text-muted-foreground/65
                        focus:border-primary
                        focus:ring-4
                        focus:ring-primary/10
                        dark:bg-[#171717]
                    "
                />

                <span
                    className="
                        absolute bottom-3
                        right-4 text-xs
                        text-muted-foreground
                    "
                >
                    {value.length}/{maxLength}
                </span>
            </div>
        </StepCard>
    );
}