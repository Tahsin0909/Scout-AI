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

import { Logo } from "@/components/logo/Logo";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
    const router = useRouter()
    const [showPassword, setShowPassword] =
        useState(false);

    const [isSubmitting, setIsSubmitting] =
        useState(false);

    const handleSubmit = async (
        event: FormEvent<HTMLFormElement>,
    ) => {
        event.preventDefault();

        const form = event.currentTarget;

        try {
            setIsSubmitting(true);

            const formData = new FormData(form);

            const values = {
                fullName: formData.get("fullName"),
                email: formData.get("email"),
                password: formData.get("password"),
            };
            router.push("/verify-email")
            console.log(values);

            // Add your registration API request here.
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="w-full">
            {/* Mobile logo */}
            <div className="mb-9 lg:hidden">
                <Logo />
            </div>

            {/* Back */}
            <Link
                href="/"
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

            <div className="mt-12 sm:mt-16 lg:mt-20">
                {/* Heading */}
                <header>
                    <h1
                        className="
              text-3xl font-semibold
              tracking-[-0.035em] text-foreground
              sm:text-4xl
            "
                    >
                        Create Account
                    </h1>

                    <p
                        className="
              mt-2 text-sm leading-relaxed
              text-muted-foreground sm:text-base
            "
                    >
                        Join free and start planning your next expedition today.
                    </p>
                </header>

                {/* Google registration */}
                <Button
                    type="button"
                    variant="outline"
                    size="lg"
                    fullWidth
                    className="
            mt-8 h-12 rounded-lg
            border-border bg-background
            text-sm font-medium text-foreground
            shadow-none hover:bg-muted/50
          "
                >
                    <GoogleIcon />

                    Continue with Google
                </Button>

                {/* Divider */}
                <div className="my-4 flex items-center gap-4">
                    <div className="h-px flex-1 bg-border" />

                    <span className="shrink-0 text-xs text-muted-foreground">
                        Or continue with email
                    </span>

                    <div className="h-px flex-1 bg-border" />
                </div>

                {/* Registration form */}
                <form
                    onSubmit={handleSubmit}
                    className="space-y-4"
                >
                    {/* Full name */}
                    <div className="space-y-2">
                        <label
                            htmlFor="fullName"
                            className="block text-sm font-medium text-foreground"
                        >
                            Full name
                        </label>

                        <input
                            id="fullName"
                            name="fullName"
                            type="text"
                            required
                            autoComplete="name"
                            placeholder="Alex Johnson"
                            className="
                h-12 w-full rounded-lg
                border border-border bg-background
                px-4 text-sm text-foreground
                outline-none
                transition-[border-color,box-shadow]
                duration-200
                placeholder:text-muted-foreground/65
                focus:border-primary
                focus:ring-4 focus:ring-primary/10
              "
                        />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-foreground"
                        >
                            Email address
                        </label>

                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            autoComplete="email"
                            placeholder="you@example.com"
                            className="
                h-12 w-full rounded-lg
                border border-border bg-background
                px-4 text-sm text-foreground
                outline-none
                transition-[border-color,box-shadow]
                duration-200
                placeholder:text-muted-foreground/65
                focus:border-primary
                focus:ring-4 focus:ring-primary/10
              "
                        />
                    </div>

                    {/* Password */}
                    <div className="space-y-2">
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-foreground"
                        >
                            Password
                        </label>

                        <div className="relative">
                            <input
                                id="password"
                                name="password"
                                type={showPassword ? "text" : "password"}
                                required
                                minLength={8}
                                autoComplete="new-password"
                                placeholder="Create a secure password"
                                className="
                  h-12 w-full rounded-lg
                  border border-border bg-background
                  py-2.5 pl-4 pr-12
                  text-sm text-foreground
                  outline-none
                  transition-[border-color,box-shadow]
                  duration-200
                  placeholder:text-muted-foreground/65
                  focus:border-primary
                  focus:ring-4 focus:ring-primary/10
                "
                            />

                            <button
                                type="button"
                                onClick={() =>
                                    setShowPassword(current => !current)
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
                  hover:bg-muted hover:text-foreground
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-primary/40
                "
                            >
                                {showPassword ? (
                                    <EyeOff
                                        aria-hidden="true"
                                        className="size-[18px]"
                                        strokeWidth={1.8}
                                    />
                                ) : (
                                    <Eye
                                        aria-hidden="true"
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
              mt-2 h-12 rounded-lg
              text-base font-semibold
              shadow-[0_10px_24px_-14px_rgba(255,210,63,0.85)]
            "
                    >
                        {isSubmitting
                            ? "Creating account..."
                            : "Sign up"}
                    </Button>
                </form>

                {/* Terms */}
                <p
                    className="
            mx-auto mt-5 max-w-[430px]
            text-center text-xs leading-relaxed
            text-muted-foreground
          "
                >
                    By creating an account, you agree to our{" "}
                    <Link
                        href="/terms"
                        className="
              font-medium text-foreground
              underline underline-offset-2
              transition-colors hover:text-primary
            "
                    >
                        Terms &amp; Conditions
                    </Link>{" "}
                    and{" "}
                    <Link
                        href="/privacy"
                        className="
              font-medium text-foreground
              underline underline-offset-2
              transition-colors hover:text-primary
            "
                    >
                        Privacy Policy
                    </Link>
                    .
                </p>

                {/* Login */}
                <p className="mt-8 text-center text-sm text-muted-foreground">
                    Already have an account?{" "}
                    <Link
                        href="/signin"
                        className="
              font-medium text-primary
              transition-colors duration-200
              hover:text-primary/80
            "
                    >
                        Log in
                    </Link>
                </p>
            </div>
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