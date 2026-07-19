import FAQSection from '@/components/faq/FaqSection';
import MembershipComparisonSection from '@/components/pricing/MembershipComparisonSection';
import PricingPage from '@/components/pricing/PricingPage';

const page = () => {
    return (
        <div>
            <PricingPage />
            <MembershipComparisonSection />
            <FAQSection />
        </div>
    );
};

export default page;