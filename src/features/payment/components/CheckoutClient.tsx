/* eslint-disable react/no-unescaped-entities */
"use client";

import {
    Elements,
    PaymentElement,
    useElements,
    useStripe,
} from "@stripe/react-stripe-js";
import {
    loadStripe,
    type Appearance,
    type StripeElementsOptions,
} from "@stripe/stripe-js";
import {
    ArrowLeft,
    Check,
    CreditCard,
    Loader2,
    LockKeyhole,
    ShieldCheck
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
    useEffect,
    useMemo,
    useState,
    useTransition,
    type FormEvent,
} from "react";

import type {
    BillingType,
} from "@/features/payment/components/pricing/data/pricing";
import { Button } from "@/components/ui/button";

const publishableKey =
    process.env
        .NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;

const stripePromise = publishableKey
    ? loadStripe(publishableKey)
    : null;


type CheckoutPrice = {
    monthlyEquivalent: number;
    amount: number;
    currency: "USD";
    interval: "month" | "year";
};

type CheckoutPlan = {
    id: string;
    slug: string;
    name: string;
    tagline: string;
    features: string[];

    prices: {
        standard: CheckoutPrice;
        annual: CheckoutPrice;
    };
};

type CheckoutClientProps = {
    plan: CheckoutPlan;
    billing: BillingType;
};

type PaymentIntentResponse = {
    success?: boolean;
    message?: string;

    clientSecret?: string;
    paymentIntentId?: string | null;
    subscriptionId?: string;

    amount?: number;
    currency?: string;
};

type PaymentIntentData = {
    clientSecret: string;
    paymentIntentId: string | null;
    amount: number | null;
    currency: string;
};

/**
 * Prevents duplicate PaymentIntent requests caused by
 * React Strict Mode during local development.
 *
 * Your backend should still use Stripe idempotency keys.
 */
const intentRequests = new Map<
    string,
    Promise<PaymentIntentData>
>();

async function parseApiResponse<T>(
    response: Response,
): Promise<T> {
    const responseText =
        await response.text();

    let result: T;

    try {
        result = JSON.parse(
            responseText,
        ) as T;
    } catch {
        console.error(
            "Invalid payment API response:",
            {
                status: response.status,
                statusText:
                    response.statusText,
                body: responseText.slice(
                    0,
                    500,
                ),
            },
        );

        throw new Error(
            "The payment service returned an invalid response.",
        );
    }

    return result;
}

async function createPaymentIntent(
    planId: string,
    billing: BillingType,
): Promise<PaymentIntentData> {


    const response = await fetch(
        "/api/payments/create-intent",
        {
            method: "POST",

            headers: {
                "Content-Type":
                    "application/json",
                Accept: "application/json",
            },

            body: JSON.stringify({
                planId,
                billing,
            }),

            cache: "no-store",
        },
    );

    const result =
        await parseApiResponse<
            PaymentIntentResponse
        >(response);

    if (!response.ok) {
        throw new Error(
            result.message ??
            "Unable to prepare your payment.",
        );
    }

    if (!result.clientSecret) {
        throw new Error(
            "The payment service did not return a Stripe client secret.",
        );
    }

    return {
        clientSecret:
            result.clientSecret,

        paymentIntentId:
            result.paymentIntentId ??
            null,

        amount:
            typeof result.amount ===
                "number"
                ? result.amount
                : null,

        currency:
            result.currency ??
            "usd",
    };
}

function getPaymentIntentRequest(
    planId: string,
    billing: BillingType,
): Promise<PaymentIntentData> {
    const requestKey =
        `${planId}:${billing}`;

    const existingRequest =
        intentRequests.get(requestKey);

    if (existingRequest) {
        return existingRequest;
    }

    const request = createPaymentIntent(
        planId,
        billing,
    ).catch(error => {
        intentRequests.delete(
            requestKey,
        );

        throw error;
    });

    intentRequests.set(
        requestKey,
        request,
    );

    return request;
}

export default function CheckoutClient({
    plan,
    billing,
}: CheckoutClientProps) {
    const [
        intent,
        setIntent,
    ] = useState<PaymentIntentData | null>(
        null,
    );

    const [
        initializationError,
        setInitializationError,
    ] = useState<string | null>(null);

    const [retryCount, setRetryCount] =
        useState(0);

    const requestKey =
        `${plan.id}:${billing}`;

    useEffect(() => {
        let isActive = true;

        setIntent(null);
        setInitializationError(null);

        getPaymentIntentRequest(
            plan.id,
            billing,
        )
            .then(data => {
                if (isActive) {
                    setIntent(data);
                }
            })
            .catch(error => {
                if (!isActive) {
                    return;
                }

                setInitializationError(
                    error instanceof Error
                        ? error.message
                        : "Unable to prepare your payment.",
                );
            });

        return () => {
            isActive = false;
        };
    }, [
        plan.id,
        billing,
        retryCount,
    ]);

    const appearance =
        useMemo<Appearance>(
            () => ({
                theme: "stripe",

                variables: {
                    colorPrimary:
                        "#a5c500",

                    colorBackground:
                        "#ffffff",

                    colorText:
                        "#242424",

                    colorDanger:
                        "#dc2626",

                    colorTextSecondary:
                        "#737373",

                    borderRadius:
                        "10px",

                    spacingUnit:
                        "5px",

                    fontFamily:
                        "Inter, system-ui, sans-serif",

                    fontSizeBase:
                        "15px",
                },

                rules: {
                    ".Input": {
                        border:
                            "1px solid #e4e4e7",

                        boxShadow:
                            "none",

                        padding:
                            "13px 14px",

                        backgroundColor:
                            "#ffffff",

                        transition:
                            "border-color 160ms ease, box-shadow 160ms ease",
                    },

                    ".Input:hover": {
                        borderColor:
                            "#c8c8ce",
                    },

                    ".Input:focus": {
                        borderColor:
                            "#a5c500",

                        boxShadow:
                            "0 0 0 4px rgba(165, 197, 0, 0.12)",
                    },

                    ".Label": {
                        color:
                            "#3f3f46",

                        fontWeight:
                            "500",

                        marginBottom:
                            "8px",
                    },

                    ".Tab": {
                        border:
                            "1px solid #e4e4e7",

                        boxShadow:
                            "none",

                        backgroundColor:
                            "#ffffff",
                    },

                    ".Tab:hover": {
                        borderColor:
                            "#a5c500",
                    },

                    ".Tab--selected": {
                        borderColor:
                            "#a5c500",

                        boxShadow:
                            "0 0 0 1px #a5c500",
                    },
                },
            }),
            [],
        );

    const elementsOptions =
        useMemo<
            StripeElementsOptions | null
        >(() => {
            if (!intent) {
                return null;
            }

            return {
                clientSecret:
                    intent.clientSecret,

                appearance,

                loader: "auto",
            };
        }, [appearance, intent]);

    const handleRetry = () => {
        intentRequests.delete(requestKey);

        setRetryCount(
            current => current + 1,
        );
    };

    if (!publishableKey || !stripePromise) {
        return (
            <CheckoutError
                title="Stripe is not configured"
                description="Add your Stripe publishable key to NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY and restart the application."
            />
        );
    }

    if (initializationError) {
        return (
            <CheckoutError
                title="Checkout unavailable"
                description={
                    initializationError
                }
                onRetry={handleRetry}
            />
        );
    }

    if (!intent || !elementsOptions) {
        return <CheckoutSkeleton />;
    }

    return (
        <Elements
            stripe={stripePromise}
            options={elementsOptions}
        >
            <CheckoutForm
                plan={plan}
                billing={billing}
                intent={intent}
            />
        </Elements>
    );
}

type CheckoutFormProps = {
    plan: CheckoutPlan;
    billing: BillingType;
    intent: PaymentIntentData;
};

function CheckoutForm({
    plan,
    billing,
    intent,
}: CheckoutFormProps) {
    const stripe = useStripe();
    const elements = useElements();
    const router = useRouter();

    const [isSubmitting, setIsSubmitting] =
        useState(false);

    const [
        isPaymentElementReady,
        setIsPaymentElementReady,
    ] = useState(false);

    const [
        isPaymentComplete,
        setIsPaymentComplete,
    ] = useState(false);

    const [errorMessage, setErrorMessage] =
        useState<string | null>(null);

    const [
        isChangingBilling,
        startBillingTransition,
    ] = useTransition();

    const isAnnual =
        billing === "annual";

    const selectedPrice =
        plan.prices[billing];

    const annualSavings = Math.max(
        0,
        Math.round(
            (1 -
                plan.prices.annual
                    .monthlyEquivalent /
                plan.prices.standard
                    .monthlyEquivalent) *
            100,
        ),
    );

    const billingLabel = isAnnual
        ? "Annual"
        : "Monthly";

    const displayTotal =
        intent.amount !== null
            ? formatMinorCurrency(
                intent.amount,
                intent.currency,
            )
            : formatMajorCurrency(
                selectedPrice.amount,
                selectedPrice.currency,
            );

    const handleBillingChange = () => {
        if (
            isSubmitting ||
            isChangingBilling
        ) {
            return;
        }

        const nextBilling: BillingType =
            isAnnual
                ? "standard"
                : "annual";

        const params =
            new URLSearchParams({
                plan: plan.slug,
                billing: nextBilling,
            });

        startBillingTransition(() => {
            router.replace(
                `/checkout?${params.toString()}`,
            );
        });
    };

    const handleSubmit = async (
        event: FormEvent<HTMLFormElement>,
    ) => {
        event.preventDefault();

        if (
            !stripe ||
            !elements ||
            isSubmitting
        ) {
            return;
        }

        try {
            setIsSubmitting(true);
            setErrorMessage(null);

            /**
             * Validates the Payment Element and collects
             * any wallet information required by Stripe.
             */
            const submitResult =
                await elements.submit();

            if (submitResult.error) {
                setErrorMessage(
                    submitResult.error.message ??
                    "Please review your payment details.",
                );

                setIsSubmitting(false);
                return;
            }

            const returnParams =
                new URLSearchParams({
                    plan: plan.slug,
                    billing,
                });

            if (intent.paymentIntentId) {
                returnParams.set(
                    "intent",
                    intent.paymentIntentId,
                );
            }

            const result =
                await stripe.confirmPayment({
                    elements,

                    clientSecret:
                        intent.clientSecret,

                    confirmParams: {
                        return_url:
                            `${window.location.origin}` +
                            `/checkout/success?${returnParams.toString()}`,
                    },

                    /**
                     * Card payments stay on the page when
                     * no external authentication is needed.
                     * Redirect-based payment methods still redirect.
                     */
                    redirect: "if_required",
                });

            if (result.error) {
                setErrorMessage(
                    result.error.message ??
                    "Your payment could not be completed.",
                );

                setIsSubmitting(false);
                return;
            }

            if (result.paymentIntent) {
                const successParams =
                    new URLSearchParams({
                        payment_intent:
                            result.paymentIntent.id,
                    });

                router.replace(
                    `/checkout/success?${successParams.toString()}`,
                );
            }
        } catch (error) {
            console.error(
                "Stripe confirmation error:",
                error,
            );

            setErrorMessage(
                error instanceof Error
                    ? error.message
                    : "Something went wrong while processing your payment.",
            );

            setIsSubmitting(false);
        }
    };

    const isButtonDisabled =
        !stripe ||
        !elements ||
        !isPaymentElementReady ||
        !isPaymentComplete ||
        isSubmitting ||
        isChangingBilling;

    return (
        <main
            className="
                min-h-screen container
                px-4 py-8
                sm:px-6 sm:py-12
                lg:px-8 lg:py-16
            "
        >
            <div className="mx-auto w-full">
                <Link
                    href="/memberships"
                    className="
                        group mb-7 lg:mb-10 inline-flex
                        items-center gap-2
                        text-sm font-medium
                        text-neutral-500
                        transition-colors
                        hover:text-neutral-900
                    "
                >
                    <ArrowLeft
                        aria-hidden="true"
                        className="
                            size-4 transition-transform
                            group-hover:-translate-x-0.5
                        "
                    />

                    Back to memberships
                </Link>

                <form onSubmit={handleSubmit}>
                    <div
                        className="flex flex-col-reverse md:flex-row gap-10 md:mt-10"
                    >
                        <section
                            className="
                                overflow-hidden rounded-2xl
                                border border-black/[0.07]
                                shadow-[0_22px_70px_-42px_rgba(0,0,0,0.28)]
                                py-8
                            "
                        >
                            <header
                                className="
                                    border-b border-black/[0.06]
                                    px-5 py-7
                                    sm:px-8 sm:py-8
                                "
                            >
                                <h1
                                    className="
                                        text-2xl font-semibold
                                        tracking-[-0.035em]
                                        sm:text-3xl
                                    "
                                >
                                    Review Membership
                                </h1>

                                <p
                                    className="
                                        mt-3 max-w-3xl
                                        text-sm leading-6
                                        text-neutral-500
                                    "
                                >
                                    You&apos;re one step
                                    away from unlocking
                                    personalized adventure
                                    planning, expert tools
                                    and your complete
                                    expedition workspace.
                                </p>
                            </header>

                            <div
                                className="
                                    flex items-start gap-4
                                    border-b border-black/[0.06]
                                    px-5 py-5 sm:px-8
                                "
                            >
                                <div
                                    className="
                                        flex size-11 shrink-0
                                        items-center justify-center
                                        rounded-xl bg-neutral-100
                                        text-neutral-700
                                    "
                                >
                                    <CreditCard
                                        className="size-5"
                                        strokeWidth={1.8}
                                    />
                                </div>

                                <div className="min-w-0 flex-1">
                                    <div
                                        className="
                                            flex items-start
                                            justify-between gap-4
                                        "
                                    >
                                        <div>
                                            <h2 className="font-semibold">
                                                {plan.name}
                                            </h2>

                                            <p
                                                className="
                                                    mt-1 text-sm
                                                    text-neutral-500
                                                "
                                            >
                                                {plan.tagline}
                                            </p>
                                        </div>

                                        <Link
                                            href="/memberships"
                                            className="
                                                shrink-0 text-sm
                                                font-semibold
                                                text-[#819d00]
                                                hover:text-[#647a00]
                                            "
                                        >
                                            Change
                                        </Link>
                                    </div>

                                    <div
                                        className="
                                            mt-4 grid gap-2
                                            sm:grid-cols-2
                                        "
                                    >
                                        {plan.features
                                            .slice(0, 4)
                                            .map(feature => (
                                                <div
                                                    key={feature}
                                                    className="
                                                        flex items-start
                                                        gap-2 text-xs
                                                        leading-5
                                                        text-neutral-500
                                                    "
                                                >
                                                    <Check
                                                        className="
                                                            mt-0.5
                                                            size-3.5
                                                            shrink-0
                                                            text-[#8daa00]
                                                        "
                                                    />

                                                    <span>
                                                        {
                                                            feature
                                                        }
                                                    </span>
                                                </div>
                                            ))}
                                    </div>
                                </div>
                            </div>

                            <div
                                className="
                                    flex flex-col gap-4
                                    border-b border-black/[0.06]
                                    px-5 py-5
                                    sm:flex-row
                                    sm:items-center
                                    sm:justify-between
                                    sm:px-8
                                "
                            >
                                <div>
                                    <h2 className="font-semibold">
                                        Billing interval
                                    </h2>

                                    <p
                                        className="
                                            mt-1 text-xs
                                            text-neutral-500
                                        "
                                    >
                                        Choose monthly or
                                        annual membership
                                        billing.
                                    </p>
                                </div>

                                <div className="flex items-center gap-3">
                                    <button
                                        type="button"
                                        role="switch"
                                        aria-label="Toggle annual billing"
                                        aria-checked={
                                            isAnnual
                                        }
                                        disabled={
                                            isSubmitting ||
                                            isChangingBilling
                                        }
                                        onClick={
                                            handleBillingChange
                                        }
                                        className="
                                            relative h-7 w-12
                                            rounded-full
                                            bg-neutral-800
                                            shadow-inner
                                            transition-opacity
                                            disabled:cursor-not-allowed
                                            disabled:opacity-50
                                        "
                                    >
                                        <span
                                            className={`
                                                absolute left-1 top-1
                                                size-5 rounded-full
                                                bg-[#c4e52b]
                                                shadow-sm
                                                transition-transform
                                                duration-300
                                                ${isAnnual
                                                    ? "translate-x-5"
                                                    : "translate-x-0"
                                                }
                                            `}
                                        />
                                    </button>

                                    <span className="text-sm font-semibold">
                                        {isChangingBilling
                                            ? "Updating..."
                                            : billingLabel}

                                        {isAnnual &&
                                            annualSavings >
                                            0 && (
                                                <span className="ml-1 text-[#7ea000]">
                                                    Save{" "}
                                                    {
                                                        annualSavings
                                                    }
                                                    %
                                                </span>
                                            )}
                                    </span>
                                </div>
                            </div>

                            <div className="px-5 py-7 sm:px-8 sm:py-8">
                                <div
                                    className="
                                        flex items-center
                                        justify-between gap-4
                                    "
                                >
                                    <div>
                                        <h2 className="text-lg font-semibold">
                                            Payment method
                                        </h2>

                                        <p
                                            className="
                                                mt-1 text-xs
                                                text-neutral-500
                                            "
                                        >
                                            Stripe securely
                                            collects only the
                                            payment information
                                            required.
                                        </p>
                                    </div>

                                    <div
                                        className="
                                            hidden items-center
                                            gap-1.5 rounded-full
                                            bg-neutral-100
                                            px-3 py-1.5
                                            text-xs font-medium
                                            text-neutral-500
                                            sm:flex
                                        "
                                    >
                                        <LockKeyhole className="size-3.5" />

                                        Encrypted
                                    </div>
                                </div>

                                <div
                                    className="
                                        mt-6 rounded-xl
                                        border border-black/[0.06]
                                        bg-[#fafafa]
                                        p-4 sm:p-5
                                    "
                                >
                                    <PaymentElement
                                        onReady={() =>
                                            setIsPaymentElementReady(
                                                true,
                                            )
                                        }
                                        onChange={event => {
                                            setIsPaymentComplete(
                                                event.complete,
                                            );

                                            if (
                                                errorMessage
                                            ) {
                                                setErrorMessage(
                                                    null,
                                                );
                                            }
                                        }}
                                        options={{
                                            layout:
                                                "accordion",

                                            fields: {
                                                billingDetails:
                                                {
                                                    address:
                                                        "if_required",
                                                },
                                            },
                                        }}
                                    />
                                </div>

                                <div
                                    className="
                                        mt-5 flex items-start
                                        gap-2.5 rounded-xl
                                        bg-[#a5c500]/[0.07]
                                        p-4
                                    "
                                >
                                    <ShieldCheck
                                        className="
                                            mt-0.5 size-5
                                            shrink-0
                                            text-[#819d00]
                                        "
                                        strokeWidth={1.8}
                                    />

                                    <p
                                        className="
                                            text-xs leading-5
                                            text-neutral-600
                                        "
                                    >
                                        Your card information
                                        is encrypted and sent
                                        directly to Stripe. Apex
                                        Adventure Lab never
                                        receives or stores your
                                        complete card number.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <aside className="lg:sticky lg:top-8">
                            {/* Order Summary Card */}
                            <div className="overflow-hidden rounded-xl bg-black dark:bg-card text-white shadow-lg">
                                <div className="p-6">
                                    <h2 className="text-base font-semibold tracking-tight">
                                        Order summary
                                    </h2>

                                    <div className="mt-5 space-y-4">
                                        {/* Plan Line Item */}
                                        <div className="flex items-center justify-between">
                                            <p className="text-sm text-white/80">
                                                {plan.name} ({billingLabel})
                                            </p>
                                            <span className="text-sm font-medium tabular-nums">
                                                {formatMajorCurrency(
                                                    selectedPrice.amount,
                                                    selectedPrice.currency,
                                                )}
                                            </span>
                                        </div>

                                        {/* Estimated Tax */}
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-white/60">
                                                Estimated Tax
                                            </span>
                                            <span className="text-sm font-medium tabular-nums text-white/80">
                                                {formatMinorCurrency(
                                                    Math.round(
                                                        (intent.amount ?? selectedPrice.amount * 100) * 0.065,
                                                    ),
                                                    intent.currency,
                                                )}
                                            </span>
                                        </div>

                                        {/* Divider */}
                                        <div className="border-t border-white/10" />

                                        {/* Total */}
                                        <div className="flex items-center justify-between pt-1">
                                            <p className="text-sm font-medium text-white/90">
                                                {plan.name} ({billingLabel})
                                            </p>
                                            <span className="text-2xl font-bold tabular-nums tracking-tight">
                                                {displayTotal}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Complete Purchase Button */}
                            <Button
                                type="submit"
                                variant="primary"
                                size="lg"
                                fullWidth
                                disabled={isButtonDisabled}
                                className="mt-4"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2
                                            className="size-4 animate-spin"
                                            aria-hidden="true"
                                        />
                                        Processing payment...
                                    </>
                                ) : (
                                    "Complete Purchase"
                                )}
                            </Button>

                            {/* Disclaimer */}
                            <p className="mt-3 px-1 text-center text-[11px] leading-5 text-neutral-500">
                                By clicking "Complete Purchase," you agree to our{" "}
                                <Link
                                    href="/terms"
                                    className="font-medium text-neutral-700 underline underline-offset-2 hover:text-neutral-900"
                                >
                                    Terms &amp; Conditions
                                </Link>{" "}
                                and authorize Scout Ai to charge your account on a recurring basis.
                            </p>

                            {/* Error Message */}
                            {errorMessage && (
                                <div
                                    role="alert"
                                    className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm leading-5 text-red-700"
                                >
                                    {errorMessage}
                                </div>
                            )}
                        </aside>
                    </div>
                </form>
            </div>
        </main>
    );
}

type CheckoutErrorProps = {
    title: string;
    description: string;
    onRetry?: () => void;
};

function CheckoutError({
    title,
    description,
    onRetry,
}: CheckoutErrorProps) {
    return (
        <main
            className="
                flex min-h-screen items-center
                justify-center 
                px-4
            "
        >
            <div
                className="
                    w-full max-w-md rounded-2xl
                    border border-black/[0.07]
                     p-8 text-center
                    shadow-xl shadow-black/5
                "
            >
                <div
                    className="
                        mx-auto flex size-14
                        items-center justify-center
                        rounded-2xl
                        text-red-500
                    "
                >
                    <CreditCard className="size-6" />
                </div>

                <h1 className="mt-5 text-xl font-semibold">
                    {title}
                </h1>

                <p
                    className="
                        mt-2 text-sm leading-6
                        text-neutral-500
                    "
                >
                    {description}
                </p>

                <div
                    className="
                        mt-6 flex justify-center
                        gap-3
                    "
                >
                    <Button
                        asChild
                        variant="outline"
                    >
                        <Link href="/memberships">
                            Memberships
                        </Link>
                    </Button>

                    {onRetry && (
                        <Button
                            type="button"
                            variant="primary"
                            onClick={onRetry}
                        >
                            Try again
                        </Button>
                    )}
                </div>
            </div>
        </main>
    );
}

function CheckoutSkeleton() {
    return (
        <main
            className="
                min-h-screen bg-[#f6f7f4]
                px-4 py-8
                sm:px-6 sm:py-12
                lg:px-8 lg:py-16
            "
        >
            <div className="mx-auto max-w-6xl">
                <div
                    className="
                        mb-7 h-5 w-40
                        animate-pulse rounded
                        bg-black/5
                    "
                />

                <div
                    className="
                        grid gap-7
                        lg:grid-cols-[minmax(0,1fr)_370px]
                    "
                >
                    <div
                        className="
                            min-h-[680px] animate-pulse
                            rounded-2xl bg-white
                            shadow-sm
                        "
                    />

                    <div className="space-y-4">
                        <div
                            className="
                                h-64 animate-pulse
                                rounded-2xl bg-[#242424]
                            "
                        />

                        <div
                            className="
                                h-13 animate-pulse
                                rounded-xl bg-[#c4e52b]/50
                            "
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}

function formatMajorCurrency(
    amount: number,
    currency: string,
): string {
    return new Intl.NumberFormat(
        "en-US",
        {
            style: "currency",
            currency,
        },
    ).format(amount);
}

function formatMinorCurrency(
    amount: number,
    currency: string,
): string {
    return new Intl.NumberFormat(
        "en-US",
        {
            style: "currency",
            currency,
        },
    ).format(amount / 100);
}