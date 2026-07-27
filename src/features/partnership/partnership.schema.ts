import { z } from "zod";
import { PartnerApplicationState } from "./partnership.interface";

export const PartnershipSchema = z.object({});

export type PartnershipSchemaType = z.infer<typeof PartnershipSchema>;


export function getStepValidationError(
    application: PartnerApplicationState,
): string | null {
    if (application.step === 1) {
        const {
            fullName,
            email,
            phone,
            location,
        } = application.personal;

        if (
            !fullName.trim() ||
            !email.trim() ||
            !phone.trim() ||
            !location.trim()
        ) {
            return "Please complete all personal information fields.";
        }

        if (
            !application.social.primaryUrl.trim()
        ) {
            return "Please provide your primary social media profile.";
        }

        if (
            !application.social.confirmOwnership
        ) {
            return "Please confirm ownership of your social accounts.";
        }
    }

    if (application.step === 2) {
        if (
            !application.about.history.trim() ||
            !application.about.motivation.trim() ||
            !application.about.fit.trim()
        ) {
            return "Please complete all three application questions.";
        }
    }

    if (application.step === 3) {
        const {
            partnerAgreement,
            platformTerms,
            informationAccuracy,
        } = application.agreements;

        if (
            !partnerAgreement ||
            !platformTerms ||
            !informationAccuracy
        ) {
            return "You must accept all agreements before submitting your application.";
        }
    }

    return null;
}