import { pricingPlansApiResponse } from "@/features/payment/components/pricing/data/pricing";
import { PricingCard } from "@/features/payment/components/pricing/PricingCard";

const AdminSubscription = () => {
    return (
        <div>
            {/* Page Header */}
            <div className="space-y-2">
                <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
                    Subscriptions Management
                </h1>
                <p className="text-zinc-400 text-sm md:text-base max-w-2xl font-light">
                    View and manage all subscription plans.
                </p>
            </div>
            {/* Pricing cards */}
            <div
                className="
                          mt-12 grid
                          grid-cols-1 items-stretch gap-6
                          md:grid-cols-3
                      "
            >
                {pricingPlansApiResponse.data.map((plan) => (
                    <PricingCard
                        key={plan.id}
                        plan={plan}
                    />
                ))}
            </div>
        </div>
    );
};

export default AdminSubscription;