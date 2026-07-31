import PartnerApplicationWizard from "@/features/partnership/components/PartnerApplicationWizard";
import type { Metadata } from "next";


export const metadata: Metadata = {
    title:
        "Become a Partner | TripTrax",
    description:
        "Apply to become a TripTrax partner.",
};

export default function PartnerApplicationPage() {
    return <PartnerApplicationWizard />;
}