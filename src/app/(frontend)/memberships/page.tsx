import FAQSection from '@/components/faq/FaqSection';
import MembershipComparisonSection from '@/components/pricing/MembershipComparisonSection';
import PricingPage from '@/components/pricing/PricingPage';

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