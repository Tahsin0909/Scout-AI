import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { PartnerApplicationState } from "../../partnership.interface";
import { ApplicationFormIcon, ReviewClockIcon } from "@/utils/icons";

type ApplicationSuccessProps = {
    application: PartnerApplicationState;
    onStartAgain: () => void;
};

export function ApplicationSuccess({
    application,
    onStartAgain,
}: ApplicationSuccessProps) {
    const allSocialAccounts = [
        {
            id: "primary-account",
            platform:
                application.social
                    .primaryPlatform,
            url:
                application.social
                    .primaryUrl,
        },

        ...application.social
            .additionalAccounts,
    ].filter(account =>
        account.url.trim(),
    );

    return (
        <main
            className="
                min-h-screen
                bg-[#f5f5f5]
                px-4 py-10
                text-foreground
                transition-colors
                dark:bg-black
                sm:px-6 sm:py-14
                lg:px-8
            "
        >
            <div
                className="
                    mx-auto w-full
                    max-w-[1100px]
                "
            >
                {/* Success header */}
                <header className="text-center">
                    <div
                        className="
                            mx-auto flex size-20
                            items-center justify-center
                            rounded-2xl
                            bg-[#00e8b5]/10
                            text-[#00b98f]
                            dark:bg-[#00e8b5]/10
                            dark:text-[#00e8b5]
                        "
                    >
                        <ApplicationFormIcon
                            className="size-11"
                        />
                    </div>

                    <div
                        className="
                            mt-6 inline-flex
                            items-center gap-2
                            rounded-full
                            border border-[#00b98f]/20
                            bg-[#00b98f]/10
                            px-3 py-1.5
                            text-xs font-semibold
                            uppercase
                            tracking-[0.08em]
                            text-[#008b6c]
                            dark:border-[#00e8b5]/20
                            dark:bg-[#00e8b5]/10
                            dark:text-[#00e8b5]
                        "
                    >
                        <span
                            className="
                                size-2 rounded-full
                                bg-current
                            "
                        />

                        Submitted successfully
                    </div>

                    <h1
                        className="
                            mt-4 text-3xl
                            font-bold
                            tracking-[-0.04em]
                            sm:text-4xl
                        "
                    >
                        Partner Application
                    </h1>

                    <p
                        className="
                            mx-auto mt-3
                            max-w-[620px]
                            text-sm leading-6
                            text-muted-foreground
                            sm:text-base
                        "
                    >
                        Your application has been
                        received. Below is a copy of
                        the information you submitted.
                    </p>
                </header>

                {/* Submitted application */}
                <div
                    className="
                        mt-10 overflow-hidden
                        rounded-2xl border
                        border-black/[0.07]
                        bg-white
                        shadow-[0_24px_70px_-42px_rgba(0,0,0,0.28)]
                        dark:border-white/[0.08]
                        dark:bg-[#242424]
                    "
                >
                    <div
                        className="
                            flex flex-col gap-3
                            border-b
                            border-black/[0.07]
                            px-5 py-5
                            dark:border-white/[0.08]
                            sm:flex-row
                            sm:items-center
                            sm:justify-between
                            sm:px-7
                        "
                    >
                        <div>
                            <h2 className="text-lg font-semibold">
                                Submitted Information
                            </h2>

                            <p className="mt-1 text-sm text-muted-foreground">
                                Application reference
                                details
                            </p>
                        </div>

                        <span
                            className="
                                w-fit rounded-full
                                bg-[#ffd23f]/15
                                px-3 py-1.5
                                text-xs font-semibold
                                uppercase
                                tracking-wide
                                text-[#9a7600]
                                dark:text-[#ffd23f]
                            "
                        >
                            Under review
                        </span>
                    </div>

                    <div className="space-y-8 p-5 sm:p-7">
                        {/* Personal information */}
                        <ApplicationSection
                            title="Personal Information"
                            description="Basic contact information provided in your application."
                        >
                            <div
                                className="
                                    grid gap-4
                                    sm:grid-cols-2
                                "
                            >
                                <SubmittedField
                                    label="Full name"
                                    value={
                                        application
                                            .personal
                                            .fullName
                                    }
                                />

                                <SubmittedField
                                    label="Email Address"
                                    value={
                                        application
                                            .personal
                                            .email
                                    }
                                />

                                <SubmittedField
                                    label="Phone Number"
                                    value={
                                        application
                                            .personal
                                            .phone
                                    }
                                />

                                <SubmittedField
                                    label="Location"
                                    value={
                                        application
                                            .personal
                                            .location
                                    }
                                />
                            </div>
                        </ApplicationSection>

                        {/* Social media */}
                        <ApplicationSection
                            title="Social Media Presence"
                            description="The platforms submitted for verification."
                        >
                            {allSocialAccounts.length >
                                0 ? (
                                <div className="space-y-3">
                                    {allSocialAccounts.map(
                                        account => (
                                            <div
                                                key={
                                                    account.id
                                                }
                                                className="
                                                    grid gap-3
                                                    rounded-xl
                                                    border
                                                    border-black/[0.06]
                                                    bg-black/[0.02]
                                                    p-4
                                                    dark:border-white/[0.07]
                                                    dark:bg-black/20
                                                    sm:grid-cols-[180px_minmax(0,1fr)]
                                                    sm:items-center
                                                "
                                            >
                                                <div>
                                                    <p className="text-xs text-muted-foreground">
                                                        Platform
                                                    </p>

                                                    <p className="mt-1 text-sm font-semibold">
                                                        {
                                                            account.platform
                                                        }
                                                    </p>
                                                </div>

                                                <div className="min-w-0">
                                                    <p className="text-xs text-muted-foreground">
                                                        Profile
                                                        URL
                                                    </p>

                                                    <p
                                                        className="
                                                            mt-1
                                                            break-all
                                                            text-sm
                                                            text-foreground
                                                        "
                                                    >
                                                        {
                                                            account.url
                                                        }
                                                    </p>
                                                </div>
                                            </div>
                                        ),
                                    )}
                                </div>
                            ) : (
                                <EmptySubmittedValue />
                            )}

                            <SubmittedConfirmation
                                className="mt-4"
                                label="Social account ownership confirmed"
                                confirmed={
                                    application.social
                                        .confirmOwnership
                                }
                            />
                        </ApplicationSection>

                        {/* About section */}
                        <ApplicationSection
                            title="About You"
                            description="Your written partner application responses."
                        >
                            <div className="space-y-5">
                                <SubmittedTextarea
                                    label="Your History"
                                    value={
                                        application
                                            .about
                                            .history
                                    }
                                />

                                <SubmittedTextarea
                                    label="Why do you want to join?"
                                    value={
                                        application
                                            .about
                                            .motivation
                                    }
                                />

                                <SubmittedTextarea
                                    label="What makes you a great fit?"
                                    value={
                                        application
                                            .about.fit
                                    }
                                />
                            </div>
                        </ApplicationSection>

                        {/* Agreements */}
                        <ApplicationSection
                            title="Final Agreements"
                            description="Terms and declarations accepted during submission."
                        >
                            <div className="space-y-3">
                                <SubmittedConfirmation
                                    label="Scout Ai Partner Agreement accepted"
                                    confirmed={
                                        application
                                            .agreements
                                            .partnerAgreement
                                    }
                                />

                                <SubmittedConfirmation
                                    label="Platform Terms and Privacy Policy accepted"
                                    confirmed={
                                        application
                                            .agreements
                                            .platformTerms
                                    }
                                />

                                <SubmittedConfirmation
                                    label="Submitted information confirmed as accurate"
                                    confirmed={
                                        application
                                            .agreements
                                            .informationAccuracy
                                    }
                                />
                            </div>
                        </ApplicationSection>
                    </div>
                </div>

                {/* Review status */}
                <div
                    className="
                        mt-6 rounded-2xl
                        border
                        border-[#ffd23f]/25
                        bg-[#ffd23f]/10
                        p-5
                        dark:border-[#ffd23f]/20
                        dark:bg-[#ffd23f]/[0.08]
                        sm:p-6
                    "
                >
                    <div
                        className="
                            flex flex-col gap-4
                            sm:flex-row
                            sm:items-start
                        "
                    >
                        <div
                            className="
                                flex size-11
                                shrink-0
                                items-center
                                justify-center
                                rounded-xl
                                bg-[#ffd23f]/20
                                text-[#9a7600]
                                dark:text-[#ffd23f]
                            "
                        >
                            <ReviewClockIcon
                                className="size-6"
                            />
                        </div>

                        <div>
                            <h2 className="text-base font-semibold">
                                Your application is
                                under review
                            </h2>

                            <p
                                className="
                                    mt-1 max-w-3xl
                                    text-sm leading-6
                                    text-muted-foreground
                                "
                            >
                                The Scout Ai partnership
                                team is reviewing your
                                profile, social presence
                                and application responses.
                                You will receive an email
                                when a decision or further
                                information is available.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Actions */}
                <div
                    className="
                        mt-7 flex
                        flex-col-reverse gap-3
                        sm:flex-row
                        sm:items-center
                        sm:justify-center
                    "
                >
                    <Button
                        asChild
                        type="button"
                        variant="outline"
                        size="lg"
                        className="
                            h-12 min-w-[200px]
                            rounded-lg
                        "
                    >
                        <Link href="/partnership">
                            Return to Partners
                        </Link>
                    </Button>

                    <Button
                        type="button"
                        variant="primary"
                        size="lg"
                        onClick={onStartAgain}
                        className="
                            h-12 min-w-[220px]
                            rounded-lg
                            font-semibold
                        "
                    >
                        Start New Application
                    </Button>
                </div>
            </div>
        </main>
    );
}

type ApplicationSectionProps = {
    title: string;
    description?: string;
    children: ReactNode;
};

function ApplicationSection({
    title,
    description,
    children,
}: ApplicationSectionProps) {
    return (
        <section>
            <div
                className="
                    border-b
                    border-black/[0.06]
                    pb-4
                    dark:border-white/[0.07]
                "
            >
                <h3 className="text-base font-semibold">
                    {title}
                </h3>

                {description && (
                    <p className="mt-1 text-sm text-muted-foreground">
                        {description}
                    </p>
                )}
            </div>

            <div className="mt-5">
                {children}
            </div>
        </section>
    );
}

type SubmittedFieldProps = {
    label: string;
    value: string;
};

function SubmittedField({
    label,
    value,
}: SubmittedFieldProps) {
    return (
        <div className="space-y-2">
            <p
                className="
                    text-sm font-medium
                    text-muted-foreground
                "
            >
                {label}
            </p>

            <div
                className="
                    flex min-h-12
                    items-center
                    rounded-lg border
                    border-border
                    bg-[#fafafa]
                    px-4 py-3
                    text-sm
                    text-foreground
                    dark:bg-[#171717]
                "
            >
                {value.trim() || "Not provided"}
            </div>
        </div>
    );
}

type SubmittedTextareaProps = {
    label: string;
    value: string;
};

function SubmittedTextarea({
    label,
    value,
}: SubmittedTextareaProps) {
    return (
        <div className="space-y-2">
            <p
                className="
                    text-sm font-medium
                    text-muted-foreground
                "
            >
                {label}
            </p>

            <div
                className="
                    min-h-[120px]
                    whitespace-pre-wrap
                    rounded-lg border
                    border-border
                    bg-[#fafafa]
                    px-4 py-3
                    text-sm leading-6
                    text-foreground
                    dark:bg-[#171717]
                "
            >
                {value.trim() || "Not provided"}
            </div>
        </div>
    );
}

type SubmittedConfirmationProps = {
    label: string;
    confirmed: boolean;
    className?: string;
};

function SubmittedConfirmation({
    label,
    confirmed,
    className = "",
}: SubmittedConfirmationProps) {
    return (
        <div
            className={`
                flex items-center gap-3
                rounded-lg border
                border-border
                bg-[#fafafa]
                px-4 py-3
                dark:bg-[#171717]
                ${className}
            `}
        >
            <span
                className={`
                    flex size-5 shrink-0
                    items-center justify-center
                    rounded border
                    ${confirmed
                        ? `
                                border-[#00b98f]
                                bg-[#00b98f]
                                text-white
                            `
                        : `
                                border-border
                                bg-background
                                text-transparent
                            `
                    }
                `}
            >
                <Check className="size-3.5" />
            </span>

            <span className="text-sm font-medium">
                {label}
            </span>
        </div>
    );
}

function EmptySubmittedValue() {
    return (
        <div
            className="
                rounded-lg border
                border-dashed
                border-border
                px-4 py-6
                text-center text-sm
                text-muted-foreground
            "
        >
            No social profiles were provided.
        </div>
    );
}