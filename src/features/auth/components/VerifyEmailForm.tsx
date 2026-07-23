"use client";

import {
    ArrowLeft,
    CheckCircle2,
    Mail,
} from "lucide-react";
import Link from "next/link";
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

type VerifyEmailFormProps = {
    email: string;
};

export default function VerifyEmailForm({
    email,
}: VerifyEmailFormProps) {
    const [otp, setOtp] = useState<string[]>(
        Array(OTP_LENGTH).fill(""),
    );
    const [secondsLeft, setSecondsLeft] =
        useState(RESEND_TIME);
    const [isSubmitting, setIsSubmitting] =
        useState(false);
    const [isVerified, setIsVerified] =
        useState(false);

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
        const digit = value.replace(/\D/g, "").slice(-1);

        const nextOtp = [...otp];
        nextOtp[index] = digit;
        setOtp(nextOtp);

        if (digit && index < OTP_LENGTH - 1) {
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
        startIndex: number,
    ) => {
        event.preventDefault();

        const pastedDigits = event.clipboardData
            .getData("text")
            .replace(/\D/g, "")
            .slice(0, OTP_LENGTH - startIndex);

        if (!pastedDigits) {
            return;
        }

        const nextOtp = [...otp];

        pastedDigits.split("").forEach((digit, offset) => {
            nextOtp[startIndex + offset] = digit;
        });

        setOtp(nextOtp);

        const nextFocusIndex = Math.min(
            startIndex + pastedDigits.length,
            OTP_LENGTH - 1,
        );

        focusInput(nextFocusIndex);
    };

    const handleSubmit = async (
        event: FormEvent<HTMLFormElement>,
    ) => {
        event.preventDefault();

        if (!isOtpComplete || isSubmitting) {
            return;
        }

        try {
            setIsSubmitting(true);

            console.log({
                email,
                otp: otpValue,
            });

            // Replace with your verification API request:
            //
            // await verifyEmail({
            //   email,
            //   otp: otpValue,
            // });

            await new Promise(resolve =>
                window.setTimeout(resolve, 800),
            );

            setIsVerified(true);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleResend = async () => {
        if (secondsLeft > 0) {
            return;
        }

        setOtp(Array(OTP_LENGTH).fill(""));
        setSecondsLeft(RESEND_TIME);
        setIsVerified(false);

        focusInput(0);

        console.log("Resend verification code:", email);

        // Replace with your resend API request:
        //
        // await resendVerificationCode({ email });
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

            {/* Back link */}
            <Link
                href="/register"
                className="
          group inline-flex items-center gap-2
          text-sm font-medium text-muted-foreground
          transition-colors duration-200
          hover:text-foreground
        "
            >
                <ArrowLeft
                    aria-hidden="true"
                    className="
            size-4 transition-transform duration-200
            group-hover:-translate-x-0.5
          "
                />

                Back
            </Link>

            <div
                className="
          mx-auto mt-14 w-full max-w-[500px]
          text-center sm:mt-20 lg:mt-24
        "
            >
                {/* Icon */}
                <div
                    className="
            mx-auto flex size-16 items-center
            justify-center rounded-2xl
            bg-primary/10 text-[#97B900]
          "
                >
                    {isVerified ? (
                        <CheckCircle2
                            className="size-9"
                            strokeWidth={1.8}
                        />
                    ) : (
                        <Mail
                            className="size-9"
                            strokeWidth={1.8}
                        />
                    )}
                </div>

                {/* Header */}
                <header className="mt-7">
                    <h1
                        className="
              text-3xl font-semibold
              tracking-[-0.035em] text-foreground
              sm:text-4xl
            "
                    >
                        {isVerified
                            ? "Email Verified"
                            : "Verify Your Email"}
                    </h1>

                    <p
                        className="
              mx-auto mt-3 max-w-[420px]
              text-sm leading-relaxed
              text-muted-foreground sm:text-base
            "
                    >
                        {isVerified ? (
                            "Your email address has been successfully verified."
                        ) : (
                            <>
                                We&apos;ve sent a 6-digit verification code
                                to{" "}
                                <span className="font-medium text-foreground">
                                    {email}
                                </span>
                                . Enter it below to confirm your account.
                            </>
                        )}
                    </p>
                </header>

                {!isVerified ? (
                    <form
                        onSubmit={handleSubmit}
                        className="mt-9"
                    >
                        {/* OTP fields */}
                        <fieldset>
                            <legend className="sr-only">
                                Enter your six-digit verification code
                            </legend>

                            <div
                                className="
                  mx-auto grid w-full max-w-[440px]
                  grid-cols-6 gap-2
                  sm:gap-3
                "
                            >
                                {otp.map((digit, index) => (
                                    <input
                                        key={index}
                                        ref={element => {
                                            inputRefs.current[index] = element;
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
                                        aria-label={`Verification code digit ${index + 1
                                            }`}
                                        onFocus={event =>
                                            event.currentTarget.select()
                                        }
                                        onChange={event =>
                                            updateDigit(
                                                index,
                                                event.target.value,
                                            )
                                        }
                                        onKeyDown={event =>
                                            handleKeyDown(event, index)
                                        }
                                        onPaste={event =>
                                            handlePaste(event, index)
                                        }
                                        className={cn(
                                            `
                        aspect-square min-w-0 rounded-lg
                        border bg-background text-center
                        text-xl font-semibold text-foreground
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
                                ))}
                            </div>
                        </fieldset>

                        {/* Timer and resend */}
                        <div className="mt-7">
                            <p className="text-sm text-muted-foreground">
                                Resend available in:{" "}
                                <span className="font-medium text-foreground">
                                    {formattedTime}
                                </span>
                            </p>

                            <button
                                type="button"
                                disabled={secondsLeft > 0}
                                onClick={handleResend}
                                className="
                  mt-2 text-sm font-medium text-primary
                  transition-colors duration-200
                  hover:text-primary/80
                  disabled:cursor-not-allowed
                  disabled:text-muted-foreground/40
                "
                            >
                                Resend code
                            </button>
                        </div>

                        {/* Submit */}
                        <Button
                            type="submit"
                            variant="primary"
                            size="lg"
                            fullWidth
                            disabled={
                                !isOtpComplete || isSubmitting
                            }
                            className="
                mt-8 h-12 rounded-lg
                text-base font-semibold
                shadow-[0_10px_24px_-14px_rgba(255,210,63,0.85)]
              "
                        >
                            {isSubmitting
                                ? "Verifying..."
                                : "Verify code"}
                        </Button>
                    </form>
                ) : (
                    <Button
                        asChild
                        variant="primary"
                        size="lg"
                        fullWidth
                        className="mt-8 h-12 rounded-lg"
                    >
                        <Link href="/signin">
                            Continue to sign in
                        </Link>
                    </Button>
                )}

                {/* Footer link */}
                {!isVerified && (
                    <Link
                        href="/signin"
                        className="
              mt-7 inline-flex text-sm font-medium
              text-muted-foreground
              transition-colors duration-200
              hover:text-foreground
            "
                    >
                        Back to sign in
                    </Link>
                )}
            </div>
        </div>
    );
}