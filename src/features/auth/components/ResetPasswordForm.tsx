/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import {
    CheckCircle2,
    Eye,
    EyeOff,
    LockKeyhole,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
    type FormEvent,
    useState,
} from "react";

import { Logo } from "@/components/logo/Logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ResetPasswordFormProps = {
    email: string;
    resetToken: string;
};

// type ResetPasswordResponse = {
//     success?: boolean;
//     message?: string;
// };

type PasswordInputProps = {
    id: string;
    name: string;
    label: string;
    value: string;
    placeholder?: string;
    disabled?: boolean;
    error?: boolean;
    onChange: (
        value: string,
    ) => void;
};

// async function parseJsonResponse<T>(
//     response: Response,
// ): Promise<T> {
//     const responseText =
//         await response.text();

//     const contentType =
//         response.headers.get(
//             "content-type",
//         ) ?? "";

//     if (
//         !contentType.includes(
//             "application/json",
//         )
//     ) {
//         console.error(
//             "Non-JSON reset password response:",
//             {
//                 status: response.status,
//                 statusText:
//                     response.statusText,
//                 body: responseText.slice(
//                     0,
//                     500,
//                 ),
//             },
//         );

//         throw new Error(
//             `Reset password API returned ${response.status} ${response.statusText} instead of JSON.`,
//         );
//     }

//     try {
//         return JSON.parse(
//             responseText,
//         ) as T;
//     } catch {
//         throw new Error(
//             "Reset password API returned invalid JSON.",
//         );
//     }
// }

export default function ResetPasswordForm({
    email,
    resetToken,
}: ResetPasswordFormProps) {
    const router = useRouter();

    const [password, setPassword] =
        useState("");

    const [
        confirmPassword,
        setConfirmPassword,
    ] = useState("");

    const [isSubmitting, setIsSubmitting] =
        useState(false);

    const [isSuccessful, setIsSuccessful] =
        useState(false);

    const [errorMessage, setErrorMessage] =
        useState<string | null>(null);

    const validateForm = () => {
        if (!password) {
            return "Please enter a new password.";
        }

        if (password.length < 8) {
            return "Your password must contain at least 8 characters.";
        }

        if (
            !/[A-Z]/.test(password)
        ) {
            return "Your password must contain at least one uppercase letter.";
        }

        if (
            !/[a-z]/.test(password)
        ) {
            return "Your password must contain at least one lowercase letter.";
        }

        if (
            !/\d/.test(password)
        ) {
            return "Your password must contain at least one number.";
        }

        if (
            password !== confirmPassword
        ) {
            return "The passwords do not match.";
        }

        return null;
    };

    const handleSubmit = async (
        event: FormEvent<HTMLFormElement>,
    ) => {
        event.preventDefault();

        if (isSubmitting) {
            return;
        }

        const validationError =
            validateForm();

        if (validationError) {
            setErrorMessage(
                validationError,
            );

            return;
        }

        try {
            setIsSubmitting(true);
            setErrorMessage(null);
            window.setTimeout(() => {
                router.replace(
                    "/signin?password-reset=success",
                );
            }, 1500);
        } catch (error) {
            setErrorMessage(
                error instanceof Error
                    ? error.message
                    : "Unable to reset your password.",
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccessful) {
        return (
            <PasswordResetSuccess />
        );
    }

    const hasMismatch =
        Boolean(confirmPassword) &&
        password !== confirmPassword;

    return (
        <div className="w-full">
            {/* Mobile logo */}
            <div className="mb-10 lg:hidden">
                <Logo />
            </div>

            <div
                className="
                    mx-auto flex min-h-[calc(100vh-80px)]
                    w-full max-w-[500px]
                    items-center justify-center
                    py-10 sm:py-14
                "
            >
                <div className="w-full">
                    {/* Icon */}
                    <div
                        className="
                            mx-auto flex size-[72px]
                            items-center justify-center
                            text-[#97B900]
                        "
                    >
                        <LockKeyhole
                            aria-hidden="true"
                            className="size-14"
                            strokeWidth={1.55}
                        />
                    </div>

                    {/* Header */}
                    <header className="mt-6 text-center">
                        <h1
                            className="
                                text-3xl font-semibold
                                tracking-[-0.035em]
                                text-foreground
                                sm:text-[36px]
                            "
                        >
                            Create A New Password
                        </h1>

                        <p
                            className="
                                mx-auto mt-3
                                max-w-[360px]
                                text-sm leading-relaxed
                                text-muted-foreground
                            "
                        >
                            Your identity has been
                            verified. Create a new
                            password for your
                            account.
                        </p>
                    </header>

                    {/* Form */}
                    <form
                        onSubmit={handleSubmit}
                        className="mt-8 space-y-5"
                    >
                        <PasswordInput
                            id="new-password"
                            name="password"
                            label="New password"
                            value={password}
                            placeholder="Enter password"
                            disabled={
                                isSubmitting
                            }
                            onChange={value => {
                                setPassword(value);
                                setErrorMessage(
                                    null,
                                );
                            }}
                        />

                        <PasswordInput
                            id="confirm-new-password"
                            name="confirmPassword"
                            label="Confirm new password"
                            value={confirmPassword}
                            placeholder="Enter password"
                            disabled={
                                isSubmitting
                            }
                            error={hasMismatch}
                            onChange={value => {
                                setConfirmPassword(
                                    value,
                                );

                                setErrorMessage(
                                    null,
                                );
                            }}
                        />

                        {hasMismatch && (
                            <p
                                className="
                                    -mt-2 text-xs
                                    text-destructive
                                "
                            >
                                The passwords do not
                                match.
                            </p>
                        )}

                        {errorMessage && (
                            <div
                                role="alert"
                                className="
                                    rounded-lg border
                                    border-destructive/20
                                    bg-destructive/5
                                    px-4 py-3
                                    text-sm leading-relaxed
                                    text-destructive
                                "
                            >
                                {errorMessage}
                            </div>
                        )}

                        <Button
                            type="submit"
                            variant="primary"
                            size="lg"
                            fullWidth
                            disabled={
                                isSubmitting
                            }
                            className="
                                h-12 rounded-lg
                                text-base font-semibold
                                shadow-[0_12px_28px_-14px_rgba(255,210,63,0.9)]
                            "
                        >
                            {isSubmitting
                                ? "Updating password..."
                                : "Reset password"}
                        </Button>
                    </form>

                    <p
                        className="
                            mt-6 text-center
                            text-sm
                            text-muted-foreground
                        "
                    >
                        Remember your password?{" "}
                        <Link
                            href="/signin"
                            className="
                                font-medium
                                text-foreground
                                transition-colors
                                hover:text-primary
                            "
                        >
                            Back to sign in
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

function PasswordInput({
    id,
    name,
    label,
    value,
    placeholder,
    disabled,
    error,
    onChange,
}: PasswordInputProps) {
    const [isVisible, setIsVisible] =
        useState(false);

    return (
        <div className="space-y-2">
            <label
                htmlFor={id}
                className="
                    block text-sm font-medium
                    text-foreground
                "
            >
                {label}
            </label>

            <div className="relative">
                <input
                    id={id}
                    name={name}
                    type={
                        isVisible
                            ? "text"
                            : "password"
                    }
                    value={value}
                    disabled={disabled}
                    required
                    minLength={8}
                    autoComplete="new-password"
                    placeholder={placeholder}
                    onChange={event =>
                        onChange(
                            event.target.value,
                        )
                    }
                    className={cn(
                        `
                            h-12 w-full rounded-lg
                            border bg-background
                            px-4 pr-12
                            text-sm text-foreground
                            outline-none
                            transition-[border-color,box-shadow]
                            duration-200
                            placeholder:text-muted-foreground/55
                            disabled:cursor-not-allowed
                            disabled:opacity-60
                            focus:ring-4
                        `,
                        error
                            ? `
                                border-destructive
                                focus:border-destructive
                                focus:ring-destructive/10
                            `
                            : `
                                border-border
                                hover:border-primary/40
                                focus:border-primary
                                focus:ring-primary/10
                            `,
                    )}
                />

                <button
                    type="button"
                    aria-label={
                        isVisible
                            ? `Hide ${label.toLowerCase()}`
                            : `Show ${label.toLowerCase()}`
                    }
                    disabled={disabled}
                    onClick={() =>
                        setIsVisible(
                            current =>
                                !current,
                        )
                    }
                    className="
                        absolute right-0 top-0
                        flex h-full w-12
                        items-center justify-center
                        text-muted-foreground
                        transition-colors
                        hover:text-foreground
                        disabled:cursor-not-allowed
                        disabled:opacity-50
                    "
                >
                    {isVisible ? (
                        <EyeOff
                            aria-hidden="true"
                            className="size-5"
                            strokeWidth={1.8}
                        />
                    ) : (
                        <Eye
                            aria-hidden="true"
                            className="size-5"
                            strokeWidth={1.8}
                        />
                    )}
                </button>
            </div>
        </div>
    );
}

function PasswordResetSuccess() {
    return (
        <div className="w-full">
            <div className="mb-10 lg:hidden">
                <Logo />
            </div>

            <div
                className="
                    mx-auto flex
                    min-h-[calc(100vh-80px)]
                    w-full max-w-[500px]
                    items-center justify-center
                    py-10 text-center
                "
            >
                <div className="w-full">
                    <div
                        className="
                            mx-auto flex size-16
                            items-center justify-center
                            rounded-2xl
                            bg-primary/10
                            text-[#97B900]
                        "
                    >
                        <CheckCircle2
                            aria-hidden="true"
                            className="size-9"
                            strokeWidth={1.8}
                        />
                    </div>

                    <h1
                        className="
                            mt-7 text-3xl
                            font-semibold
                            tracking-[-0.035em]
                            text-foreground
                        "
                    >
                        Password Updated
                    </h1>

                    <p
                        className="
                            mx-auto mt-3
                            max-w-[380px]
                            text-sm leading-relaxed
                            text-muted-foreground
                        "
                    >
                        Your password has been
                        successfully updated. You
                        will be redirected to the
                        sign-in page.
                    </p>

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
                </div>
            </div>
        </div>
    );
}