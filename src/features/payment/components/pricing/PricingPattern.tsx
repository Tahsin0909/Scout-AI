import { cn } from "@/lib/utils";

type PricingPatternProps = {
    featured?: boolean;
};

export function PricingPattern({
    featured = false,
}: PricingPatternProps) {
    return (
        <div
            aria-hidden="true"
            className={cn(
                `
                    pointer-events-none absolute inset-0 -z-20
                    overflow-hidden rounded-[inherit]

                    [--pattern-grid:rgba(20,20,20,0.075)]
                    [--pattern-grid-alt:rgba(20,20,20,0.035)]
                    [--pattern-red:rgba(180,48,48,0.12)]
                    [--pattern-gold:rgba(154,118,0,0.13)]

                    dark:[--pattern-grid:rgba(255,255,255,0.075)]
                    dark:[--pattern-grid-alt:rgba(255,255,255,0.035)]
                    dark:[--pattern-red:rgba(255,72,72,0.16)]
                    dark:[--pattern-gold:rgba(255,210,63,0.19)]
                `,
                featured &&
                `
                        [--pattern-grid:rgba(116,88,0,0.14)]
                        [--pattern-grid-alt:rgba(255,210,63,0.075)]
                        [--pattern-red:rgba(213,56,56,0.18)]
                        [--pattern-gold:rgba(180,135,0,0.22)]

                        dark:[--pattern-grid:rgba(255,210,63,0.13)]
                        dark:[--pattern-grid-alt:rgba(255,210,63,0.075)]
                        dark:[--pattern-red:rgba(255,75,75,0.22)]
                        dark:[--pattern-gold:rgba(255,210,63,0.28)]
                    `,
            )}
        >
            {/* Small checkerboard texture */}
            <div
                className={cn(
                    `
                        absolute inset-0
                        opacity-70 dark:opacity-90
                    `,
                    featured && "opacity-90 dark:opacity-100",
                )}
                style={{
                    backgroundImage: `
                        linear-gradient(
                            45deg,
                            var(--pattern-grid) 25%,
                            transparent 25%,
                            transparent 75%,
                            var(--pattern-grid) 75%
                        ),
                        linear-gradient(
                            45deg,
                            var(--pattern-grid-alt) 25%,
                            transparent 25%,
                            transparent 75%,
                            var(--pattern-grid-alt) 75%
                        )
                    `,
                    backgroundPosition: "0 0, 3px 3px",
                    backgroundSize: "6px 6px",
                }}
            />

            {/* Random-looking red and gold micro pixels */}
            <div
                className={cn(
                    `
                        absolute inset-0 opacity-55
                        mix-blend-multiply
                        dark:opacity-80 dark:mix-blend-screen
                    `,
                    featured && "opacity-80 dark:opacity-100",
                )}
                style={{
                    backgroundImage: `
                        radial-gradient(
                            circle,
                            var(--pattern-red) 0 0.8px,
                            transparent 0.9px
                        ),
                        radial-gradient(
                            circle,
                            var(--pattern-gold) 0 0.8px,
                            transparent 0.9px
                        ),
                        radial-gradient(
                            circle,
                            var(--pattern-red) 0 0.65px,
                            transparent 0.75px
                        )
                    `,
                    backgroundPosition:
                        "2px 5px, 10px 13px, 18px 3px",
                    backgroundSize:
                        "23px 23px, 29px 29px, 37px 37px",
                }}
            />

            {/* Featured gold light */}
            {featured && (
                <div
                    className="
                        absolute inset-0
                        bg-[radial-gradient(80%_58%_at_100%_0%,rgba(255,210,63,0.48)_0%,rgba(255,210,63,0.2)_40%,transparent_74%)]
                        dark:bg-[radial-gradient(80%_58%_at_100%_0%,rgba(255,210,63,0.42)_0%,rgba(255,210,63,0.17)_42%,transparent_75%)]
                    "
                />
            )}

            {/* Top-to-bottom shading */}
            <div
                className="
                    absolute inset-0
                    bg-[linear-gradient(to_bottom,rgba(255,255,255,0.18),rgba(255,255,255,0.03)_36%,rgba(0,0,0,0.05)_100%)]
                    dark:bg-[linear-gradient(to_bottom,rgba(255,255,255,0.025),rgba(0,0,0,0.04)_40%,rgba(0,0,0,0.23)_100%)]
                "
            />

            {/* Edge vignette */}
            <div
                className="
                    absolute inset-0
                    shadow-[inset_0_0_55px_rgba(0,0,0,0.08)]
                    dark:shadow-[inset_0_0_65px_rgba(0,0,0,0.34)]
                "
            />
        </div>
    );
}