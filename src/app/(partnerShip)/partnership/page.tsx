import CommissionStructureSection from '@/components/partnership/CommissionStructureSection';
import PartnerExpedition from '@/components/partnership/PartnerExpedition';
import PartnerHero from '@/components/partnership/PartnerHero';
import TrustedCompanies from '@/components/trustedCompanies/TrustedCompanies';

const page = () => {
    return (
        <div>
            <PartnerHero />
            <TrustedCompanies />
            <PartnerExpedition />
            {/* <PartnerShipPath /> */}
            <CommissionStructureSection />
        </div>
    );
};

export default page;