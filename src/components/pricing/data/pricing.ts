export type PlanCategory = "basic" | "premium";

export type BillingType = "standard" | "annual";

export type StripePlanPrice = {
    /**
     * Actual Stripe Price ID.
     * Replace the placeholder with the price_... value
     * created in your Stripe dashboard.
     */
    stripePriceId: string;

    /**
     * Amount displayed per month.
     */
    monthlyEquivalent: number;

    /**
     * Actual amount charged for this billing cycle.
     */
    amount: number;

    currency: "USD";
    interval: "month" | "year";
};

export type PricingPlan = {
    id: string;
    slug: string;
    category: PlanCategory;

    name: string;
    tagline: string;

    featured?: boolean;
    badge?: string;

    prices: {
        standard: StripePlanPrice;
        annual: StripePlanPrice;
    };

    features: string[];

    isActive: boolean;
    sortOrder: number;
};

export type PricingPlansApiResponse = {
    success: boolean;
    message: string;
    data: PricingPlan[];
};

/**
 * Mock API response.
 *
 * Later, replace this object with data returned by your backend API.
 */
export const pricingPlansApiResponse: PricingPlansApiResponse = {
    success: true,
    message: "Pricing plans fetched successfully.",
    data: [
        {
            id: "trailhead",
            slug: "trailhead",
            category: "basic",

            name: "Trailhead",
            tagline: "It Starts Here",

            prices: {
                standard: {
                    stripePriceId:
                        "price_1Tx14j2OsvEUQIN2GwmU8rXU",
                    monthlyEquivalent: 15,
                    amount: 15,
                    currency: "USD",
                    interval: "month",
                },

                annual: {
                    stripePriceId:
                        "price_1Tx1DZ2OsvEUQIN2J53V8yAC",
                    monthlyEquivalent: 12,
                    amount: 144,
                    currency: "USD",
                    interval: "year",
                },
            },

            features: [
                "Access to Scout AI.",
                "Generate 2 trip packages per month.",
                "Additional packages available at $7.00 each.",
                "All core modules included.",
                "Basic Architect review and quality control.",
                "Package generation available within 30 days of departure window.",
                "Trailhead membership badge.",
                "Tier IV priority in queue.",
                "Access to members-only content.",
            ],

            isActive: true,
            sortOrder: 1,
        },

        {
            id: "basecamp",
            slug: "basecamp",
            category: "basic",

            name: "Basecamp",
            tagline: "Start the Climb",

            prices: {
                standard: {
                    stripePriceId:
                        "price_1Tx17Y2OsvEUQIN2Z66WWfRn",
                    monthlyEquivalent: 20,
                    amount: 20,
                    currency: "USD",
                    interval: "month",
                },

                annual: {
                    stripePriceId:
                        "price_1Tx1EU2OsvEUQIN2lNDoGNoY",
                    monthlyEquivalent: 17,
                    amount: 204,
                    currency: "USD",
                    interval: "year",
                },
            },

            features: [
                "Scout AI Base Access.",
                "Generate 4 trip packages per month.",
                "Additional packages available at $6.00 each.",
                "All core modules included.",
                "Basic Architect review and quality control.",
                "Package generation available within 60 days of departure window.",
                "Basecamp membership badge.",
                "Tier III priority in queue.",
                "Access to members-only content.",
                "5% off all merchandise.",
            ],

            isActive: true,
            sortOrder: 2,
        },

        {
            id: "summit",
            slug: "summit",
            category: "premium",

            name: "Summit",
            tagline: "Enjoy the View",

            featured: true,
            badge: "Most Popular",

            prices: {
                standard: {
                    stripePriceId:
                        "price_1Tx18k2OsvEUQIN29GARuQJU",
                    monthlyEquivalent: 30,
                    amount: 30,
                    currency: "USD",
                    interval: "month",
                },

                annual: {
                    stripePriceId:
                        "price_1Tx1Fw2OsvEUQIN2bbm9GaiX",
                    monthlyEquivalent: 25,
                    amount: 300,
                    currency: "USD",
                    interval: "year",
                },
            },

            features: [
                "Access to Scout AI.",
                "Generate 6 trip packages per month.",
                "Additional packages can be purchased beyond the 6 included for $5.00 each.",
                "Includes all premium modules.",
                "Package generation available within 120 days of departure.",
                "In-depth Architect analysis of each trip.",
                "10-question post-delivery Trip Q&A session with Scout.",
                "Annual subscriptions receive 2 handcrafted Architect oversight trips per year.",
                "Summit account badge.",
                "Tier II membership-level priority in queue.",
                "Access to members-only content.",
                "10% off all merchandise.",
            ],

            isActive: true,
            sortOrder: 3,
        },

        {
            id: "apex-elite",
            slug: "apex-elite",
            category: "premium",

            name: "Apex Elite",
            tagline: "Welcome to the Top",

            prices: {
                standard: {
                    stripePriceId:
                        "price_apex_elite_monthly_replace_me",
                    monthlyEquivalent: 50,
                    amount: 50,
                    currency: "USD",
                    interval: "month",
                },

                annual: {
                    stripePriceId:
                        "price_apex_elite_annual_replace_me",
                    monthlyEquivalent: 42,
                    amount: 504,
                    currency: "USD",
                    interval: "year",
                },
            },

            features: [
                "Scout AI Base Access.",
                "Generate 10 trip packages per month.",
                "Additional packages can be purchased beyond the 10 included for $5.00 each.",
                "Includes all premium modules.",
                "Package generation available within 180 days of departure.",
                "In-depth Architect analysis of each trip with available personalized recommendations and top-tier quality control.",
                "20-question post-delivery Trip Q&A session with Scout.",
                "Annual subscriptions receive 5 handcrafted Architect oversight trips per year.",
                "Annual subscriptions receive a free one-time Apex Adventure Lab swag bag.",
                "Apex Elite account badge.",
                "20% off all merchandise.",
                "Custom Apex Elite package design.",
                "Tier I membership-level priority in queue.",
                "Access to members-only content.",
                "Access to the Expedition Leader toolkit.",
            ],

            isActive: true,
            sortOrder: 4,
        },
    ],
};


export function getPlanById(
    planId: string | undefined,
): PricingPlan | undefined {
    if (!planId) {
        return undefined;
    }

    return pricingPlansApiResponse.data.find(
        plan =>
            plan.id === planId &&
            plan.isActive,
    );
}