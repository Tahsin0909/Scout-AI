import AllInclusivePartnerTools from '@/components/partnership/AllInclusivePartnerTools';
import CommissionStructureSection from '@/components/partnership/CommissionStructureSection';
import PartnerCTA from '@/components/partnership/PartnerCTA';
import PartnerExpedition from '@/components/partnership/PartnerExpedition';
import PartnerHero from '@/components/partnership/PartnerHero';
import PartnerFAQSection from '@/components/partnership/PArtnerShip-FAQ';
import PartnerShipPath from '@/components/partnership/PartnerShipPath';
import TrustedCompanies from '@/components/trustedCompanies/TrustedCompanies';

const page = () => {
    return (
        <div>
            <PartnerHero />
            <TrustedCompanies />
            <PartnerExpedition />
            <PartnerShipPath />
            <CommissionStructureSection />
            <AllInclusivePartnerTools />
            <PartnerFAQSection />
            <PartnerCTA />
        </div>
    );
};

export default page;