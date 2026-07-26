import AllInclusivePartnerTools from '@/components/partnership/AllInclusivePartnerTools';
import CommissionStructureSection from '@/components/partnership/CommissionStructureSection';
import PartnerExpedition from '@/components/partnership/PartnerExpedition';
import PartnerHero from '@/components/partnership/PartnerHero';
import PartnerFAQSection from '@/components/partnership/PArtnerShip-FAQ';
import TrustedCompanies from '@/components/trustedCompanies/TrustedCompanies';

const page = () => {
    return (
        <div>
            <PartnerHero />
            <TrustedCompanies />
            <PartnerExpedition />
            {/* <PartnerShipPath /> */}
            <CommissionStructureSection />
            <AllInclusivePartnerTools />
            <PartnerFAQSection />
        </div>
    );
};

export default page;