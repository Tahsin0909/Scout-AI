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
    description: string;

    featured?: boolean;
    buttonVariant?: "solid" | "outline";
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
            id: "core",
            slug: "core",
            category: "basic",

            name: "Core",
            tagline: "It Starts Here",
            description:
                "Welcome to Scout Ai. We believe in uncompromising quality regardless of membership tier, so we start you off with access to Scout—our AI adventure engine—plus all the essential tools you need to get out and go. Core keeps it light and fast so you can go further.",

            buttonVariant: "outline",

            prices: {
                standard: {
                    stripePriceId:
                        "price_1Tx14j2OsvEUQIN2GwmU8rXU",
                    monthlyEquivalent: 9.99,
                    amount: 9.99,
                    currency: "USD",
                    interval: "month",
                },

                annual: {
                    stripePriceId:
                        "price_1Tx1DZ2OsvEUQIN2J53V8yAC",
                    monthlyEquivalent: 8.29,
                    amount: 99.50,
                    currency: "USD",
                    interval: "year",
                },
            },

            features: [
                "Access to Scout AI.",
                "Generate 2 trip packages per month",
                "Additional packages - $5.00/ea",
                "Includes all basic modules.",
                "Package generation available within 30 days of departure.",
                "Basic Analyst oversight and quality control included.",
                "Tier IV priority in queue",
                "Access to members-only content",
            ],

            isActive: true,
            sortOrder: 1,
        },

        {
            id: "plus",
            slug: "plus",
            category: "basic",

            name: "Plus",
            tagline: "Go Further",
            description:
                "Plus is your launchpad to bigger and better things. You get more packages, more flexibility, and more guidance. If you're satisfied with what our basic modules provide, Plus is where you'll want to set up camp.",

            buttonVariant: "solid",

            prices: {
                standard: {
                    stripePriceId:
                        "price_1Tx17Y2OsvEUQIN2Z66WWfRn",
                    monthlyEquivalent: 19.99,
                    amount: 19.99,
                    currency: "USD",
                    interval: "month",
                },

                annual: {
                    stripePriceId:
                        "price_1Tx1EU2OsvEUQIN2lNDoGNoY",
                    monthlyEquivalent: 16.59,
                    amount: 199.10,
                    currency: "USD",
                    interval: "year",
                },
            },

            features: [
                "Access to Scout AI",
                "Generate 4 trip packages per month",
                "Additional packages - $5.00/ea",
                "Includes all basic modules.",
                "Package generation available within 60 days of departure.",
                "Enhanced Analyst oversight, quality control, and guidance included.",
                "Tier III priority in queue",
                "Access to members-only content.",
                "5% off all merchandise.",
            ],

            isActive: true,
            sortOrder: 2,
        },

        {
            id: "prime",
            slug: "prime",
            category: "premium",

            name: "Prime",
            tagline: "Level Up",
            description:
                "Prime is our Swiss Army Knife tier. It's powerful, versatile, and built for the savvy adventurer who wants more depth, deeper intelligence, and additional capability embedded in every package.",

            featured: true,
            buttonVariant: "solid",

            prices: {
                standard: {
                    stripePriceId:
                        "price_1Tx18k2OsvEUQIN29GARuQJU",
                    monthlyEquivalent: 29.99,
                    amount: 29.99,
                    currency: "USD",
                    interval: "month",
                },

                annual: {
                    stripePriceId:
                        "price_1Tx1Fw2OsvEUQIN2bbm9GaiX",
                    monthlyEquivalent: 24.89,
                    amount: 298.70,
                    currency: "USD",
                    interval: "year",
                },
            },

            features: [
                "Access to Scout AI.",
                "Generate 8 trip packages per month",
                "Additional packages - $5.00/ea",
                "Includes all premium modules",
                "Package generation available within 120 days of departure",
                "In-depth analysis of each trip with personalized adjustments.",
                "10-question post-delivery Trip Q&A session with Scout",
                "Yearly subscriptions receive 2 handcrafted, maximum Analyst oversight trips per year",
                "Tier II priority in queue.",
                "Access to members-only content.",
                "10% off all merchandise.",
            ],

            isActive: true,
            sortOrder: 3,
        },

        {
            id: "elite",
            slug: "elite",
            category: "premium",

            name: "Elite",
            tagline: "All Access",
            description:
                "You've reached the top. Rare air. Whether that feeling is mild hypoxia or pure excitement, we'll let you decide. Elite is purpose-built for expedition leaders, dedicated overlanders, content creators, and explorers who demand the absolute best. If Prime is the Swiss Army Knife, Elite is the fully stacked toolbox—with power tools.",

            buttonVariant: "outline",

            prices: {
                standard: {
                    stripePriceId:
                        "price_apex_elite_monthly_replace_me",
                    monthlyEquivalent: 49.99,
                    amount: 49.99,
                    currency: "USD",
                    interval: "month",
                },

                annual: {
                    stripePriceId:
                        "price_apex_elite_annual_replace_me",
                    monthlyEquivalent: 41.49,
                    amount: 497.90,
                    currency: "USD",
                    interval: "year",
                },
            },

            features: [
                "Access to Scout AI.",
                "Generate 18 trip packages per month",
                "Additional packages - $5.00/ea",
                "Includes all premium modules.",
                "Package generation available within 180 days of departure.",
                "In-depth analysis of each trip with personalized adjustments.",
                "20-question post-delivery Trip Q&A session with Scout.",
                "Yearly subscriptions receive 5 handcrafted, maximum Analyst oversight trips per year",
                "Tier I priority in queue",
                "Access to members-only content.",
                "20% off all merchandise.",
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