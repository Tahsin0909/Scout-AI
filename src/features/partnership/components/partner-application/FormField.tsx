import { ReactNode } from "react";

type FormFieldProps = {
    label: string;
    value: string;
    placeholder: string;
    type?: string;
    autoComplete?: string;
    icon?: ReactNode;
    hideLabel?: boolean;
    onChange: (value: string) => void;
};

export function FormField({
    label,
    value,
    placeholder,
    type = "text",
    autoComplete,
    icon,
    hideLabel,
    onChange,
}: FormFieldProps) {
    return (
        <div className="space-y-2">
            <label
                className={
                    hideLabel
                        ? "sr-only"
                        : "block text-sm font-medium text-muted-foreground"
                }
            >
                {label}
            </label>

            <div className="relative">
                {icon && (
                    <span
                        className="
                            pointer-events-none
                            absolute left-4
                            top-1/2
                            -translate-y-1/2
                            text-muted-foreground
                        "
                    >
                        {icon}
                    </span>
                )}

                <input
                    type={type}
                    value={value}
                    placeholder={placeholder}
                    autoComplete={autoComplete}
                    onChange={event =>
                        onChange(
                            event.target.value,
                        )
                    }
                    className={`
                        h-12 w-full
                        rounded-lg border
                        border-border
                        bg-background
                        px-4 text-sm
                        text-foreground
                        outline-none
                        transition-[border-color,box-shadow]
                        placeholder:text-muted-foreground/65
                        focus:border-primary
                        focus:ring-4
                        focus:ring-primary/10
                        dark:bg-[#171717]
                        ${icon ? "pl-11" : ""}
                    `}
                />
            </div>
        </div>
    );
}