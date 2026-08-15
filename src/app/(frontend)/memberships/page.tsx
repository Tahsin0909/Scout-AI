import FAQSection from '@/components/faq/FaqSection';
import MembershipComparisonSection from '@/features/payment/components/pricing/MembershipComparisonSection';
import PricingPage from '@/features/payment/components/pricing/PricingPage';

type RegisterPageProps = {
    searchParams: Promise<{
        next_page?: string | undefined
    }>;
};

const page = async ({
    searchParams,
}: RegisterPageProps) => {
    const params = await searchParams;

    const nextPage = params.next_page as string;
    return (
        <div>
            <PricingPage nextPage={nextPage} />
            <MembershipComparisonSection />
            <FAQSection />
        </div>
    );
};

export default page;