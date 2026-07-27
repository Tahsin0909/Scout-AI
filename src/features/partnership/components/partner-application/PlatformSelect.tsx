import { SOCIAL_PLATFORMS, SocialPlatform } from "../../partnership.interface";

type PlatformSelectProps = {
    label: string;
    value: SocialPlatform;
    hideLabel?: boolean;
    onChange: (
        value: SocialPlatform,
    ) => void;
};

export function PlatformSelect({
    label,
    value,
    hideLabel,
    onChange,
}: PlatformSelectProps) {
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

            <select
                value={value}
                onChange={event =>
                    onChange(
                        event.target
                            .value as SocialPlatform,
                    )
                }
                className="
                    h-12 w-full
                    rounded-lg border
                    border-border
                    bg-background
                    px-4 text-sm
                    text-foreground
                    outline-none
                    transition-[border-color,box-shadow]
                    focus:border-primary
                    focus:ring-4
                    focus:ring-primary/10
                    dark:bg-[#171717]
                "
            >
                {SOCIAL_PLATFORMS.map(
                    platform => (
                        <option
                            key={platform}
                            value={platform}
                        >
                            {platform}
                        </option>
                    ),
                )}
            </select>
        </div>
    );
}