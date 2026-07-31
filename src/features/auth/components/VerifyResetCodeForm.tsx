"use client";

import {
    ArrowLeft,
    KeyRound,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
    type ClipboardEvent,
    type FormEvent,
    type KeyboardEvent,
    useEffect,
    useRef,
    useState,
} from "react";

import { Logo } from "@/components/logo/Logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const OTP_LENGTH = 6;
const RESEND_TIME = 30;

type VerifyResetCodeFormProps = {
    email: string;
};

// type VerifyCodeResponse = {
//     success?: boolean;
//     message?: string;
//     resetToken?: string;
// };

export default function VerifyResetCodeForm({
    email,
}: VerifyResetCodeFormProps) {
    const router = useRouter();

    const [otp, setOtp] = useState<string[]>(
        Array(OTP_LENGTH).fill(""),
    );

    const [secondsLeft, setSecondsLeft] =
        useState(RESEND_TIME);

    const [isSubmitting, setIsSubmitting] =
        useState(false);

    const [isResending, setIsResending] =
        useState(false);

    const [errorMessage, setErrorMessage] =
        useState<string | null>(null);

    const inputRefs = useRef<
        Array<HTMLInputElement | null>
    >([]);

    const otpValue = otp.join("");

    const isOtpComplete =
        otpValue.length === OTP_LENGTH;

    useEffect(() => {
        if (secondsLeft <= 0) {
            return;
        }

        const timer = window.setInterval(() => {
            setSecondsLeft(current =>
                Math.max(current - 1, 0),
            );
        }, 1000);

        return () => {
            window.clearInterval(timer);
        };
    }, [secondsLeft]);

    const focusInput = (index: number) => {
        const safeIndex = Math.max(
            0,
            Math.min(index, OTP_LENGTH - 1),
        );

        inputRefs.current[safeIndex]?.focus();
        inputRefs.current[safeIndex]?.select();
    };

    const updateDigit = (
        index: number,
        value: string,
    ) => {
        const digit = value
            .replace(/\D/g, "")
            .slice(-1);

        const nextOtp = [...otp];
        nextOtp[index] = digit;

        setOtp(nextOtp);
        setErrorMessage(null);

        if (
            digit &&
            index < OTP_LENGTH - 1
        ) {
            focusInput(index + 1);
        }
    };

    const handleKeyDown = (
        event: KeyboardEvent<HTMLInputElement>,
        index: number,
    ) => {
        if (event.key === "Backspace") {
            event.preventDefault();

            const nextOtp = [...otp];

            if (nextOtp[index]) {
                nextOtp[index] = "";
                setOtp(nextOtp);
                return;
            }

            if (index > 0) {
                nextOtp[index - 1] = "";
                setOtp(nextOtp);
                focusInput(index - 1);
            }

            return;
        }

        if (event.key === "Delete") {
            event.preventDefault();

            const nextOtp = [...otp];
            nextOtp[index] = "";

            setOtp(nextOtp);
            return;
        }

        if (event.key === "ArrowLeft") {
            event.preventDefault();
            focusInput(index - 1);
            return;
        }

        if (event.key === "ArrowRight") {
            event.preventDefault();
            focusInput(index + 1);
        }
    };

    const handlePaste = (
        event: ClipboardEvent<HTMLInputElement>,
    ) => {
        event.preventDefault();

        const pastedDigits =
            event.clipboardData
                .getData("text")
                .replace(/\D/g, "")
                .slice(0, OTP_LENGTH);

        if (!pastedDigits) {
            return;
        }

        const nextOtp =
            Array(OTP_LENGTH).fill("");

        pastedDigits
            .split("")
            .forEach((digit, index) => {
                nextOtp[index] = digit;
            });

        setOtp(nextOtp);
        setErrorMessage(null);

        focusInput(
            Math.min(
                pastedDigits.length,
                OTP_LENGTH - 1,
            ),
        );
    };

    const handleSubmit = async (
        event: FormEvent<HTMLFormElement>,
    ) => {
        event.preventDefault();

        if (
            !isOtpComplete ||
            isSubmitting
        ) {
            return;
        }

        try {
            setIsSubmitting(true);
            setErrorMessage(null);

            console.log({
                email,
                code: otpValue,
            });

            // Temporary mock verification
            await new Promise(resolve =>
                window.setTimeout(resolve, 800),
            );

            const resetParams =
                new URLSearchParams({
                    email,
                    token: "temporary-reset-token",
                });

            router.replace(
                `/reset-password?${resetParams.toString()}`,
            );
        } catch (error) {
            setErrorMessage(
                error instanceof Error
                    ? error.message
                    : "Unable to verify the reset code.",
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleResend = async () => {
        if (
            secondsLeft > 0 ||
            isResending
        ) {
            return;
        }

        try {
            setIsResending(true);
            setErrorMessage(null);

            const response = await fetch(
                "/api/auth/forgot-password",
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json",
                    },

                    body: JSON.stringify({
                        email,
                    }),
                },
            );

            const result =
                (await response.json()) as {
                    message?: string;
                };

            if (!response.ok) {
                throw new Error(
                    result.message ??
                    "Unable to resend the code.",
                );
            }

            setOtp(
                Array(OTP_LENGTH).fill(""),
            );

            setSecondsLeft(RESEND_TIME);
            focusInput(0);
        } catch (error) {
            setErrorMessage(
                error instanceof Error
                    ? error.message
                    : "Unable to resend the code.",
            );
        } finally {
            setIsResending(false);
        }
    };

    const formattedTime = `00:${String(
        secondsLeft,
    ).padStart(2, "0")}`;

    return (
        <div className="w-full">
            {/* Mobile logo */}
            <div className="mb-9 lg:hidden">
                <Logo />
            </div>

            {/* Back */}
            <Link
                href="/forgot-password"
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

                Back
            </Link>

            <div
                className="
                    mx-auto mt-14 w-full
                    max-w-[500px] text-center
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
                    <KeyRound
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
                        Verify Reset Code
                    </h1>

                    <p
                        className="
                            mx-auto mt-3
                            max-w-[420px]
                            text-sm leading-relaxed
                            text-muted-foreground
                            sm:text-base
                        "
                    >
                        We&apos;ve sent a 6-digit
                        password reset code to{" "}
                        <span className="font-medium text-foreground">
                            {email}
                        </span>
                        . Enter the code below to
                        continue.
                    </p>
                </header>

                <form
                    onSubmit={handleSubmit}
                    className="mt-9"
                >
                    <fieldset>
                        <legend className="sr-only">
                            Enter your password reset code
                        </legend>

                        <div
                            className="
                                mx-auto grid w-full
                                max-w-[440px]
                                grid-cols-6 gap-2
                                sm:gap-3
                            "
                        >
                            {otp.map(
                                (digit, index) => (
                                    <input
                                        key={index}
                                        ref={element => {
                                            inputRefs.current[
                                                index
                                            ] = element;
                                        }}
                                        value={digit}
                                        type="text"
                                        inputMode="numeric"
                                        pattern="[0-9]*"
                                        maxLength={1}
                                        autoComplete={
                                            index === 0
                                                ? "one-time-code"
                                                : "off"
                                        }
                                        aria-label={`Reset code digit ${index + 1
                                            }`}
                                        onFocus={event =>
                                            event.currentTarget.select()
                                        }
                                        onChange={event =>
                                            updateDigit(
                                                index,
                                                event.target
                                                    .value,
                                            )
                                        }
                                        onKeyDown={event =>
                                            handleKeyDown(
                                                event,
                                                index,
                                            )
                                        }
                                        onPaste={
                                            handlePaste
                                        }
                                        className={cn(
                                            `
                                                aspect-square
                                                min-w-0 rounded-lg
                                                border bg-background
                                                text-center text-xl
                                                font-semibold
                                                text-foreground
                                                outline-none
                                                transition-[border-color,box-shadow,background-color]
                                                duration-200
                                                sm:text-2xl
                                            `,
                                            digit
                                                ? `
                                                    border-primary
                                                    bg-primary/[0.04]
                                                    shadow-[0_0_0_3px_rgba(151,185,0,0.08)]
                                                `
                                                : `
                                                    border-border
                                                    hover:border-primary/45
                                                `,
                                            `
                                                focus:border-primary
                                                focus:ring-4
                                                focus:ring-primary/10
                                            `,
                                        )}
                                    />
                                ),
                            )}
                        </div>
                    </fieldset>

                    {errorMessage && (
                        <p
                            role="alert"
                            className="
                                mt-5 rounded-lg
                                border border-destructive/20
                                bg-destructive/5
                                px-4 py-3
                                text-sm text-destructive
                            "
                        >
                            {errorMessage}
                        </p>
                    )}

                    <div className="mt-7">
                        <p className="text-sm text-muted-foreground">
                            Resend available in:{" "}
                            <span className="font-medium text-foreground">
                                {formattedTime}
                            </span>
                        </p>

                        <button
                            type="button"
                            disabled={
                                secondsLeft > 0 ||
                                isResending
                            }
                            onClick={handleResend}
                            className="
                                mt-2 text-sm font-medium
                                text-primary
                                transition-colors
                                duration-200
                                hover:text-primary/80
                                disabled:cursor-not-allowed
                                disabled:text-muted-foreground/40
                            "
                        >
                            {isResending
                                ? "Sending..."
                                : "Resend code"}
                        </button>
                    </div>

                    <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        fullWidth
                        disabled={
                            !isOtpComplete ||
                            isSubmitting
                        }
                        className="
                            mt-8 h-12 rounded-lg
                            text-base font-semibold
                            shadow-[0_10px_24px_-14px_rgba(255,210,63,0.85)]
                        "
                    >
                        {isSubmitting
                            ? "Verifying..."
                            : "Verify and continue"}
                    </Button>
                </form>

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