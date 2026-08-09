import { NextResponse } from "next/server";
import Stripe from "stripe";

import {
    getPlanById,
    type BillingType,
} from "@/features/payment/components/pricing/data/pricing";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type CreateSubscriptionBody = {
    planId?: string;
    billing?: string;
};

function isBillingType(
    value: string | undefined,
): value is BillingType {
    return (
        value === "standard" ||
        value === "annual"
    );
}

export async function POST(
    request: Request,
) {
    try {
        const stripeSecretKey =
            process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY;

        if (!stripeSecretKey) {
            return NextResponse.json(
                {
                    success: false,
                    message:
                        "STRIPE_SECRET_KEY is missing.",
                },
                {
                    status: 500,
                },
            );
        }

        const body =
            (await request.json()) as
            CreateSubscriptionBody;

        if (
            !body.planId ||
            !isBillingType(body.billing)
        ) {
            return NextResponse.json(
                {
                    success: false,
                    message:
                        "A valid plan and billing type are required.",
                },
                {
                    status: 400,
                },
            );
        }

        const plan = getPlanById(
            body.planId,
        );

        if (!plan || !plan.isActive) {
            return NextResponse.json(
                {
                    success: false,
                    message:
                        "The selected membership plan was not found.",
                },
                {
                    status: 404,
                },
            );
        }

        const selectedPrice =
            plan.prices[body.billing];

        const stripePriceId =
            selectedPrice.stripePriceId;

        if (
            !stripePriceId ||
            stripePriceId.includes(
                "replace_me",
            )
        ) {
            return NextResponse.json(
                {
                    success: false,
                    message:
                        "Replace the placeholder Stripe Price ID with a real recurring price_... ID.",
                },
                {
                    status: 500,
                },
            );
        }

        const stripe = new Stripe(
            stripeSecretKey,
        );

        /*
         * Temporary customer creation for local testing.
         *
         * In production, retrieve the logged-in user and
         * reuse their saved stripeCustomerId.
         */
        const customer =
            await stripe.customers.create({
                metadata: {
                    planId: plan.id,
                    billing: body.billing,
                },
            });

        const subscription =
            await stripe.subscriptions.create({
                customer: customer.id,

                items: [
                    {
                        price: stripePriceId,
                    },
                ],

                payment_behavior:
                    "default_incomplete",

                payment_settings: {
                    save_default_payment_method:
                        "on_subscription",
                },

                metadata: {
                    planId: plan.id,
                    planSlug: plan.slug,
                    billing: body.billing,
                },

                expand: [
                    "latest_invoice.confirmation_secret",
                ],
            });

        const invoice =
            typeof subscription.latest_invoice ===
                "string"
                ? null
                : subscription.latest_invoice;

        const clientSecret =
            invoice?.confirmation_secret
                ?.client_secret;

        if (!invoice || !clientSecret) {
            return NextResponse.json(
                {
                    success: false,
                    message:
                        "Stripe did not return the subscription payment client secret.",
                },
                {
                    status: 500,
                },
            );
        }

        return NextResponse.json({
            success: true,

            clientSecret,

            subscriptionId:
                subscription.id,

            /*
             * Your current frontend treats this
             * property as optional.
             */
            paymentIntentId: null,

            amount: invoice.amount_due,
            currency: invoice.currency,
        });
    } catch (error) {
        console.error(
            "Stripe subscription creation error:",
            error,
        );

        const message =
            error instanceof Stripe.errors.StripeError
                ? error.message
                : error instanceof Error
                    ? error.message
                    : "Unable to prepare your payment.";

        return NextResponse.json(
            {
                success: false,
                message,
            },
            {
                status: 500,
            },
        );
    }
}