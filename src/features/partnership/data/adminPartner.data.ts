import { IPartnerDetails } from "../partnership.interface";

export const partnerDetails: IPartnerDetails = {
    id: "partner-1",

    fullName: "Alex Johnson",
    email: "alex.johnson@email.com",
    phone: "+33 6 12 34 56 25",
    location: "Paris, France",

    avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80",

    status: "active",
    tier: "Member",

    joinedAt: "June 2025",

    totalRevenue: 142520,
    totalReferrals: 1050,

    socialAccounts: [
        {
            id: "social-1",
            platform: "Instagram",
            url: "https://instagram.com/alex",
        },
        {
            id: "social-2",
            platform: "Facebook",
            url: "https://facebook.com/alex",
        },
    ],
};