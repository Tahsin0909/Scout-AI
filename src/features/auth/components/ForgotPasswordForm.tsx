"use client";

import {
    ArrowLeft,
    CheckCircle2,
    Mail,
} from "lucide-react";
import Link from "next/link";
import {
    type FormEvent,
    useState,
} from "react";

import { Logo } from "@/components/logo/Logo";
import { Button } from "@/components/ui/button";

export default function ForgotPasswordForm() {
    const [isSubmitting, setIsSubmitting] =
        useState(false);

    const [submittedEmail, setSubmittedEmail] =
        useState<string | null>(null);

    const [errorMessage, setErrorMessage] =
        useState<string | null>(null);

    const handleSubmit = async (
        event: FormEvent<HTMLFormElement>,
    ) => {
        event.preventDefault();

        if (isSubmitting) {
            return;
        }

        const formData = new FormData(
            event.currentTarget,
        );

        const email = String(
            formData.get("email") ?? "",
        )
            .trim()
            .toLowerCase();

        if (!email) {
            setErrorMessage(
                "Please enter your email address.",
            );

            return;
        }

        try {
            setIsSubmitting(true);
            setErrorMessage(null);

            const requestData = {
                email,
            };

            console.log(
                "Forgot password request:",
                requestData,
            );

            /*
             * Replace this with your API request:
             *
             * const response = await fetch(
             *     "/api/auth/forgot-password",
             *     {
             *         method: "POST",
             *         headers: {
             *             "Content-Type":
             *                 "application/json",
             *         },
             *         body: JSON.stringify(requestData),
             *     },
             * );
             *
             * const result = await response.json();
             *
             * if (!response.ok) {
             *     throw new Error(
             *         result.message ??
             *             "Unable to send verification code.",
             *     );
             * }
             */

            await new Promise(resolve =>
                window.setTimeout(resolve, 800),
            );

            setSubmittedEmail(email);
        } catch (error) {
            setErrorMessage(
                error instanceof Error
                    ? error.message
                    : "Unable to send verification code.",
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    if (submittedEmail) {
        return (
            <ForgotPasswordSuccess
                email={submittedEmail}
                onReset={() =>
                    setSubmittedEmail(null)
                }
            />
        );
    }

    return (
        <div className="w-full">
            {/* Mobile logo */}
            <div className="mb-9 lg:hidden">
                <Logo />
            </div>

            {/* Back */}
            <Link
                href="/signin"
                className="
                    group inline-flex items-center gap-2
                    text-sm font-medium
                    text-muted-foreground
                    transition-colors duration-200
                    hover:text-foreground
                "
            >
                <ArrowLeft
                    aria-hidden="true"
                    className="
                        size-4
                        transition-transform duration-200
                        group-hover:-translate-x-0.5
                    "
                />

                Back to sign in
            </Link>

            <div
                className="
                    mx-auto mt-14 w-full max-w-[480px]
                    text-center
                    sm:mt-20 lg:mt-24
                "
            >
                {/* Icon */}
                <div
                    className="
                        mx-auto flex size-16
                        items-center justify-center
                        rounded-2xl bg-primary/10
                        text-[#97B900]
                    "
                >
                    <Mail
                        aria-hidden="true"
                        className="size-9"
                        strokeWidth={1.7}
                    />
                </div>

                {/* Header */}
                <header className="mt-7">
                    <h1
                        className="
                            text-3xl font-semibold
                            tracking-[-0.035em]
                            text-foreground
                            sm:text-4xl
                        "
                    >
                        Forgot Password?
                    </h1>

                    <p
                        className="
                            mx-auto mt-3 max-w-[390px]
                            text-sm leading-relaxed
                            text-muted-foreground
                            sm:text-base
                        "
                    >
                        Enter your email address and
                        we&apos;ll send a verification code
                        to reset your password.
                    </p>
                </header>

                {/* Form */}
                <form
                    onSubmit={handleSubmit}
                    className="mt-8 text-left"
                >
                    <div className="space-y-2">
                        <label
                            htmlFor="email"
                            className="
                                block text-sm font-medium
                                text-foreground
                            "
                        >
                            Email address
                        </label>

                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            autoFocus
                            autoComplete="email"
                            placeholder="you@example.com"
                            aria-describedby={
                                errorMessage
                                    ? "forgot-password-error"
                                    : undefined
                            }
                            className="
                                h-12 w-full rounded-lg
                                border border-border
                                bg-background px-4
                                text-sm text-foreground
                                outline-none
                                transition-[border-color,box-shadow]
                                duration-200
                                placeholder:text-muted-foreground/60
                                focus:border-primary
                                focus:ring-4
                                focus:ring-primary/10
                            "
                        />
                    </div>

                    {errorMessage && (
                        <p
                            id="forgot-password-error"
                            role="alert"
                            className="
                                mt-3 rounded-lg
                                border border-destructive/20
                                bg-destructive/5
                                px-3 py-2
                                text-sm text-destructive
                            "
                        >
                            {errorMessage}
                        </p>
                    )}

                    <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        fullWidth
                        disabled={isSubmitting}
                        className="
                            mt-5 h-12 rounded-lg
                            text-sm font-semibold
                            shadow-[0_10px_24px_-14px_rgba(255,210,63,0.85)]
                        "
                    >
                        {isSubmitting
                            ? "Sending code..."
                            : "Send verification code"}
                    </Button>
                </form>

                {/* Sign-in link */}
                <Link
                    href="/signin"
                    className="
                        mt-7 inline-flex
                        text-sm font-medium
                        text-muted-foreground
                        transition-colors duration-200
                        hover:text-foreground
                    "
                >
                    Back to sign in
                </Link>
            </div>
        </div>
    );
}

type ForgotPasswordSuccessProps = {
    email: string;
    onReset: () => void;
};

function ForgotPasswordSuccess({
    email,
    onReset,
}: ForgotPasswordSuccessProps) {
    return (
        <div className="w-full">
            <div className="mb-9 lg:hidden">
                <Logo />
            </div>

            <div
                className="
                    mx-auto mt-20 w-full max-w-[480px]
                    text-center lg:mt-28
                "
            >
                <div
                    className="
                        mx-auto flex size-16
                        items-center justify-center
                        rounded-2xl bg-primary/10
                        text-[#97B900]
                    "
                >
                    <CheckCircle2
                        aria-hidden="true"
                        className="size-9"
                        strokeWidth={1.7}
                    />
                </div>

                <h1
                    className="
                        mt-7 text-3xl font-semibold
                        tracking-[-0.035em]
                        sm:text-4xl
                    "
                >
                    Check Your Email
                </h1>

                <p
                    className="
                        mx-auto mt-3 max-w-[410px]
                        text-sm leading-relaxed
                        text-muted-foreground
                        sm:text-base
                    "
                >
                    We sent a password reset verification
                    code to{" "}
                    <span className="font-medium text-foreground">
                        {email}
                    </span>
                    .
                </p>

                <Button
                    asChild
                    variant="primary"
                    size="lg"
                    fullWidth
                    className="mt-8 h-12 rounded-lg"
                >
                    <Link
                        href={`/verify-reset-code?email=${encodeURIComponent(
                            email,
                        )}`}
                    >
                        Enter verification code
                    </Link>
                </Button>

                <button
                    type="button"
                    onClick={onReset}
                    className="
                        mt-5 text-sm font-medium
                        text-muted-foreground
                        transition-colors
                        hover:text-foreground
                    "
                >
                    Use another email address
                </button>
            </div>
        </div>
    );
}