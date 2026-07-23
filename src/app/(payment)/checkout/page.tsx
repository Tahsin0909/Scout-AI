import Link from "next/link";

import { Button } from "@/components/ui/button";

type CheckoutPageProps = {
    searchParams: Promise<{
        plan?: string | string[];
        billing?: string | string[];
    }>;
};

function getParam(
    value: string | string[] | undefined,
): string | undefined {
    return Array.isArray(value) ? value[0] : value;
}

function formatLabel(value: string) {
    return value
        .split("-")
        .map(
            word =>
                word.charAt(0).toUpperCase() +
                word.slice(1),
        )
        .join(" ");
}

export default async function CheckoutPage({
    searchParams,
}: CheckoutPageProps) {
    const params = await searchParams;

    const plan = getParam(params.plan);
    const billing = getParam(params.billing);

    const hasValidSelection = Boolean(
        plan && billing,
    );

    return (
        <main className="min-h-screen bg-muted/30 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
            <div className="mx-auto w-full max-w-2xl">
                <div className="rounded-2xl border border-border bg-background p-6 shadow-sm sm:p-8">
                    <header className="border-b border-border pb-6">
                        <p className="text-sm font-medium uppercase tracking-wide text-primary">
                            Checkout
                        </p>

                        <h1 className="mt-2 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
                            Complete Your Purchase
                        </h1>

                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                            Review your selected membership and billing
                            option before continuing.
                        </p>
                    </header>

                    {hasValidSelection ? (
                        <>
                            <div className="mt-6 space-y-4">
                                <div className="flex items-center justify-between gap-4 rounded-xl border border-border bg-card p-4">
                                    <span className="text-sm text-muted-foreground">
                                        Selected plan
                                    </span>

                                    <span className="font-semibold text-foreground">
                                        {formatLabel(plan!)}
                                    </span>
                                </div>

                                <div className="flex items-center justify-between gap-4 rounded-xl border border-border bg-card p-4">
                                    <span className="text-sm text-muted-foreground">
                                        Billing
                                    </span>

                                    <span className="font-semibold text-foreground">
                                        {formatLabel(billing!)}
                                    </span>
                                </div>
                            </div>

                            <div className="mt-8 space-y-3">
                                <Button
                                    type="button"
                                    variant="primary"
                                    size="lg"
                                    fullWidth
                                >
                                    Continue to Payment
                                </Button>

                                <Button
                                    asChild
                                    variant="outline"
                                    size="lg"
                                    fullWidth
                                >
                                    <Link href="/pricing">
                                        Change Plan
                                    </Link>
                                </Button>
                            </div>
                        </>
                    ) : (
                        <div className="mt-8 rounded-xl border border-destructive/20 bg-destructive/5 p-5 text-center">
                            <h2 className="font-semibold">
                                No plan selected
                            </h2>

                            <p className="mt-2 text-sm text-muted-foreground">
                                Please select a membership plan before
                                continuing to checkout.
                            </p>

                            <Button
                                asChild
                                variant="primary"
                                size="lg"
                                className="mt-5"
                            >
                                <Link href="/pricing">
                                    View Plans
                                </Link>
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}