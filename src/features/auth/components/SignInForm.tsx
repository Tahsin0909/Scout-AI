"use client";

import {
    ArrowLeft,
    Eye,
    EyeOff,
} from "lucide-react";
import Link from "next/link";
import {
    type FormEvent,
    useState,
} from "react";

import { Button } from "@/components/ui/button";

export default function SignInForm() {
    const [showPassword, setShowPassword] =
        useState(false);

    const [isSubmitting, setIsSubmitting] =
        useState(false);

    const handleSubmit = async (
        event: FormEvent<HTMLFormElement>,
    ) => {
        event.preventDefault();

        try {
            setIsSubmitting(true);

            const formData = new FormData(
                event.currentTarget,
            );

            const values = {
                email: formData.get("email"),
                password: formData.get("password"),
            };

            console.log(values);

            // Add your login request here.
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="w-full">
            {/* Back link */}
            <Link
                href="/"
                className="
          group inline-flex items-center gap-2
          text-sm font-medium
          text-muted-foreground
          transition-colors duration-200
          hover:text-foreground
        "
            >
                <ArrowLeft
                    className="
            size-4 transition-transform duration-200
            group-hover:-translate-x-0.5
          "
                />

                Back
            </Link>

            <div className="mt-16 sm:mt-20 lg:mt-24">
                {/* Heading */}
                <div>
                    <h1
                        className="
              text-3xl font-semibold
              tracking-[-0.035em]
              text-foreground
              sm:text-4xl
            "
                    >
                        Welcome Back
                    </h1>

                    <p
                        className="
              mt-2 text-sm
              text-muted-foreground
              sm:text-base
            "
                    >
                        Sign in to continue your adventure
                    </p>
                </div>

                {/* Google login */}
                <Button
                    type="button"
                    variant="outline"
                    size="lg"
                    fullWidth
                    className="
            mt-9 h-12 rounded-lg
            border-border bg-background
            text-sm font-medium
            text-foreground shadow-none
            hover:bg-muted/50
          "
                >
                    <GoogleIcon />

                    Continue with Google
                </Button>

                {/* Divider */}
                <div className="my-8 flex items-center gap-4">
                    <div className="h-px flex-1 bg-border" />

                    <span
                        className="
              shrink-0 text-xs
              text-muted-foreground
            "
                    >
                        Or continue with email
                    </span>

                    <div className="h-px flex-1 bg-border" />
                </div>

                {/* Email form */}
                <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
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
                            autoComplete="email"
                            required
                            placeholder="you@example.com"
                            className="
                h-12 w-full rounded-lg
                border border-border
                bg-background px-4
                text-sm text-foreground
                outline-none
                transition-[border-color,box-shadow]
                duration-200
                placeholder:text-muted-foreground/65
                focus:border-primary
                focus:ring-4
                focus:ring-primary/10
              "
                        />
                    </div>

                    <div className="space-y-2">
                        <div className="flex items-center justify-between gap-4">
                            <label
                                htmlFor="password"
                                className="
                  text-sm font-medium
                  text-foreground
                "
                            >
                                Password
                            </label>

                            <Link
                                href="/forgot-password"
                                className="
                  text-xs font-medium
                  text-muted-foreground
                  underline underline-offset-2
                  transition-colors duration-200
                  hover:text-primary
                  sm:text-sm
                "
                            >
                                Forgot password?
                            </Link>
                        </div>

                        <div className="relative">
                            <input
                                id="password"
                                name="password"
                                type={
                                    showPassword
                                        ? "text"
                                        : "password"
                                }
                                autoComplete="current-password"
                                required
                                placeholder="Enter your password"
                                className="
                  h-12 w-full rounded-lg
                  border border-border
                  bg-background
                  py-2.5 pl-4 pr-12
                  text-sm text-foreground
                  outline-none
                  transition-[border-color,box-shadow]
                  duration-200
                  placeholder:text-muted-foreground/65
                  focus:border-primary
                  focus:ring-4
                  focus:ring-primary/10
                "
                            />

                            <button
                                type="button"
                                onClick={() =>
                                    setShowPassword(
                                        current => !current,
                                    )
                                }
                                aria-label={
                                    showPassword
                                        ? "Hide password"
                                        : "Show password"
                                }
                                aria-pressed={showPassword}
                                className="
                  absolute right-3 top-1/2
                  flex size-8 -translate-y-1/2
                  items-center justify-center
                  rounded-md text-muted-foreground
                  transition-colors duration-200
                  hover:bg-muted
                  hover:text-foreground
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-primary/40
                "
                            >
                                {showPassword ? (
                                    <EyeOff
                                        className="size-[18px]"
                                        strokeWidth={1.8}
                                    />
                                ) : (
                                    <Eye
                                        className="size-[18px]"
                                        strokeWidth={1.8}
                                    />
                                )}
                            </button>
                        </div>
                    </div>

                    <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        fullWidth
                        disabled={isSubmitting}
                        className="
              h-12 rounded-lg
              text-base font-semibold
              shadow-[0_10px_24px_-14px_rgba(255,210,63,0.85)]
            "
                    >
                        {isSubmitting
                            ? "Signing in..."
                            : "Log in"}
                    </Button>
                </form>
            </div>

            {/* Register */}
            <p
                className="
          mt-16 text-center text-sm
          text-muted-foreground
          sm:mt-20
        "
            >
                New to TripTrax?{" "}
                <Link
                    href="/signup"
                    className="
            font-medium text-primary
            transition-colors duration-200
            hover:text-primary/80
          "
                >
                    Create an account
                </Link>
            </p>
        </div>
    );
}

function GoogleIcon() {
    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="size-[18px]"
        >
            <path
                fill="#4285F4"
                d="M21.35 12.19c0-.72-.06-1.25-.2-1.8H12v3.27h5.37a4.58 4.58 0 0 1-1.99 3.02l-.02.11 2.89 2.24.2.02c1.84-1.7 2.9-4.2 2.9-6.86Z"
            />

            <path
                fill="#34A853"
                d="M12 21.7c2.63 0 4.84-.87 6.45-2.65l-3.07-2.37c-.82.56-1.92.95-3.38.95-2.53 0-4.68-1.7-5.45-4.06l-.11.01-3 2.32-.04.1A9.74 9.74 0 0 0 12 21.7Z"
            />

            <path
                fill="#FBBC05"
                d="M6.55 13.57A5.85 5.85 0 0 1 6.23 12c0-.55.1-1.08.3-1.57v-.11L3.5 7.97l-.1.05A9.7 9.7 0 0 0 2.3 12c0 1.43.34 2.79 1.1 3.98l3.15-2.41Z"
            />

            <path
                fill="#EA4335"
                d="M12 6.37c1.83 0 3.06.8 3.76 1.45l2.76-2.69C16.82 3.55 14.63 2.3 12 2.3a9.74 9.74 0 0 0-8.6 5.72l3.13 2.41C7.32 8.07 9.47 6.37 12 6.37Z"
            />
        </svg>
    );
}