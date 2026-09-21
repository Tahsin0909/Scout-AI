import PartnerApplicationWizard from "@/features/partnership/components/PartnerApplicationWizard";
import type { Metadata } from "next";


export const metadata: Metadata = {
    title:
        "Become a Partner | Scout Ai",
    description:
        "Apply to become a Scout Ai partner.",
};

export default function PartnerApplicationPage() {
    return <PartnerApplicationWizard />;
}