import { BadgeCheck, CircleDollarSign, FileCheck2, FileText, LucideIcon } from "lucide-react";

export const partnerFaqs = [
    {
        question: "Who can apply?",
        answer:
            "Anyone with an engaged audience, professional network, or community that aligns with our services can apply. We welcome creators, consultants, agencies, educators, and industry professionals.",
    },
    {
        question: "How are commissions paid?",
        answer:
            "Commissions are calculated based on successful referrals and paid monthly through Stripe Connect. You will be able to track your referrals, earnings, and payment status from your partner dashboard.",
    },
    {
        question: "How do referrals work?",
        answer:
            "After approval, you will receive a unique referral link. When someone signs up through your link and completes an eligible purchase, the referral is attributed to your account and the commission is added to your earnings.",
    },
    {
        question: "How can I move to the next tier?",
        answer:
            "Your partner tier is based on your referral performance. As you generate more qualified customers and meet the requirements for the next level, your account will be reviewed and upgraded automatically.",
    },
    {
        question: "What happens after approval?",
        answer:
            "Once approved, you will receive access to your partner dashboard, unique referral link, promotional resources, and commission details. You can then begin sharing your link and tracking your results.",
    },
];


export type PartnershipStep = {
    number: number;
    title: string;
    description: string;
    icon: LucideIcon;
};

export type PartnerTier = {
    name: string;
    subtitle: string;
    features: string[];
    buttonLabel: string;
    featured?: boolean;
};

export const partnershipSteps: PartnershipStep[] = [
    {
        number: 1,
        title: "Apply",
        description:
            "Fill out our simple application form with your details.",
        icon: FileText,
    },
    {
        number: 2,
        title: "Review",
        description:
            "Our team reviews your content and audience alignment.",
        icon: FileCheck2,
    },
    {
        number: 3,
        title: "Get Approved",
        description:
            "Receive your acceptance and digital partner kit.",
        icon: BadgeCheck,
    },
    {
        number: 4,
        title: "Start Earning",
        description:
            "Share your links and watch your commissions grow.",
        icon: CircleDollarSign,
    },
];

export const partnerTiers: PartnerTier[] = [
    {
        name: "Member",
        subtitle: "Entry Level",
        features: [
            "3k+ Followers",
            "2 Trip Packages Per Month",
            "Free Elite Membership",
            "Early Access To New Features",
            "Co-Branding Authorization",
            "Gear Partnership Opportunities",
            "Dedicated Support",
        ],
        buttonLabel: "Select Tier",
    },
    {
        name: "Ambassador",
        subtitle: "Ultimate Impact",
        featured: true,
        features: [
            "10k+ Followers",
            "Ambassador Badge",
            "10 Trip Packages Per Month",
            "Free Elite Membership",
            "Referral Income Eligibility",
            "Monthly Referral Bonus",
            "Early Access To New Features",
            "Co-Branding Authorization",
            "Priority Brand Promotion And Gear Partnerships",
            "Featured Placement On Scout Ai's Platforms",
            "Priority Support",
        ],
        buttonLabel: "Apply for Ambassador",
    },
    {
        name: "Advocate",
        subtitle: "Rising Star",
        features: [
            "5k+ Followers",
            "6 Trip Packages Per Month",
            "Free Elite Membership",
            "Referral Income Eligibility",
            "Early Access To New Features",
            "Brand Promotion And Gear Partnerships",
            "Dedicated Support",
        ],
        buttonLabel: "Select Tier",
    },
];
