"use client";

import {
    ArrowLeft,
    ArrowRight
} from "lucide-react";
import Link from "next/link";
import {
    useState
} from "react";

import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { PartnerStep } from "../partnership.interface";
import { resetPartnerApplication, setPartnerStep } from "../store/partnership.slice";
import { ApplicationSuccess } from "./partner-application/ApplicationSuccess";
import { getStepValidationError } from "../partnership.schema";
import { PersonalInformationStep } from "./partner-application/PersonalInformationStep";
import { AboutYouStep } from "./partner-application/AboutYouStep";
import { FinalAgreementStep } from "./partner-application/FinalAgreementStep";
import { PartnerBenefitsSidebar } from "./partner-application/PartnerBenefitsSidebar";


const STEP_DETAILS: Record<
    PartnerStep,
    {
        title: string;
        progress: number;
    }
> = {
    1: {
        title: "Personal Information",
        progress: 34,
    },

    2: {
        title: "About You",
        progress: 67,
    },

    3: {
        title: "Final Agreement",
        progress: 100,
    },
};

export default function PartnerApplicationWizard() {
    const dispatch = useAppDispatch();

    const application = useAppSelector(
        state =>
            state.partnerApplication,
    );

    const [errorMessage, setErrorMessage] =
        useState<string | null>(null);

    const [isSubmitting, setIsSubmitting] =
        useState(false);

    const [isSubmitted, setIsSubmitted] =
        useState(false);

    const currentStep =
        STEP_DETAILS[application.step];

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const handleBack = () => {
        setErrorMessage(null);

        if (application.step === 1) {
            return;
        }

        dispatch(
            setPartnerStep(
                (application.step -
                    1) as PartnerStep,
            ),
        );

        scrollToTop();
    };

    const handleNext = async () => {
        const error =
            getStepValidationError(
                application,
            );

        if (error) {
            setErrorMessage(error);
            return;
        }

        setErrorMessage(null);

        if (application.step < 3) {
            dispatch(
                setPartnerStep(
                    (application.step +
                        1) as PartnerStep,
                ),
            );

            scrollToTop();
            return;
        }

        try {
            setIsSubmitting(true);

            /*
             * Replace with your API call later.
             *
             * await submitPartnerApplication(
             *     application,
             * );
             */

            await new Promise(resolve =>
                window.setTimeout(
                    resolve,
                    900,
                ),
            );

            console.log(
                "Partner application:",
                application,
            );

            setIsSubmitted(true);
            scrollToTop();
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSubmitted) {
        return (
            <ApplicationSuccess
                application={application}
                onStartAgain={() => {
                    dispatch(
                        resetPartnerApplication(),
                    );

                    setIsSubmitted(false);
                }}
            />
        );
    }

    return (
        <main
            className="
                min-h-screen
                bg-[#f5f5f5]
                px-4 py-8
                text-foreground
                transition-colors
                dark:bg-black
                sm:px-6 sm:py-12
                lg:px-8 lg:py-14
            "
        >
            <div className="mx-auto w-full max-w-[1320px]">
                {/* Header */}
                <header>
                    <h1
                        className="
                            text-3xl font-bold
                            tracking-[-0.04em]
                            text-foreground
                            sm:text-4xl
                        "
                    >
                        Become A TripTrax Partner
                    </h1>

                    <p
                        className="
                            mt-3 text-base
                            font-medium
                            text-muted-foreground
                            sm:text-lg
                        "
                    >
                        Step {application.step} of
                        3: {currentStep.title}
                    </p>

                    <div
                        className="
                            mt-7 h-2.5 w-full
                            overflow-hidden
                            rounded-full
                            bg-black/15
                            dark:bg-white/35
                        "
                    >
                        <div
                            className="
                                h-full rounded-full
                                bg-[#00e8b5]
                                transition-[width]
                                duration-500
                                ease-out
                            "
                            style={{
                                width: `${currentStep.progress}%`,
                            }}
                        />
                    </div>
                </header>

                <div
                    className="
                        mt-5 grid
                        items-start gap-5
                        lg:grid-cols-[minmax(0,1fr)_320px]
                        xl:grid-cols-[minmax(0,1fr)_340px]
                    "
                >
                    {/* Main step */}
                    <div className="min-w-0">
                        {application.step === 1 && (
                            <PersonalInformationStep />
                        )}

                        {application.step === 2 && (
                            <AboutYouStep />
                        )}

                        {application.step === 3 && (
                            <FinalAgreementStep />
                        )}

                        {errorMessage && (
                            <div
                                role="alert"
                                className="
                                    mt-5 rounded-xl
                                    border
                                    border-destructive/20
                                    bg-destructive/5
                                    px-4 py-3
                                    text-sm
                                    text-destructive
                                "
                            >
                                {errorMessage}
                            </div>
                        )}

                        {/* Navigation */}
                        <div
                            className="
                                mt-6 flex
                                flex-col-reverse
                                gap-4
                                sm:flex-row
                                sm:items-center
                                sm:justify-between
                            "
                        >
                            {application.step === 1 ? (
                                <Link
                                    href="/partners"
                                    className="
                                        inline-flex
                                        h-12 items-center
                                        justify-center gap-2
                                        px-4 text-sm
                                        font-semibold
                                        text-muted-foreground
                                        transition-colors
                                        hover:text-foreground
                                    "
                                >
                                    <ArrowLeft className="size-4" />
                                    Back
                                </Link>
                            ) : (
                                <button
                                    type="button"
                                    onClick={handleBack}
                                    className="
                                        inline-flex
                                        h-12 items-center
                                        justify-center gap-2
                                        px-4 text-sm
                                        font-semibold
                                        text-muted-foreground
                                        transition-colors
                                        hover:text-foreground
                                    "
                                >
                                    <ArrowLeft className="size-4" />
                                    Back
                                </button>
                            )}

                            <Button
                                type="button"
                                variant="primary"
                                size="lg"
                                disabled={isSubmitting}
                                onClick={handleNext}
                                className="
                                    h-14 min-w-[240px]
                                    rounded-lg
                                    text-base
                                    font-semibold
                                    shadow-[0_15px_30px_-15px_rgba(255,204,48,0.8)]
                                "
                            >
                                {isSubmitting
                                    ? "Submitting..."
                                    : application.step ===
                                        3
                                        ? "Submit Application"
                                        : "Next Step"}

                                {!isSubmitting && (
                                    <ArrowRight className="size-4" />
                                )}
                            </Button>
                        </div>
                    </div>

                    <PartnerBenefitsSidebar />
                </div>
            </div>
        </main>
    );
}










