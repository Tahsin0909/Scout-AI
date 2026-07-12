import AdventureHero from '@/components/adventureHero/AdventureHero';
import ExpeditionSection from '@/components/expedition-section/ExpeditionSections';
import FAQSection from '@/components/faq/FaqSection';
import HowItWorksSection from '@/components/howItWorksSection/HowItWorksSection';
import TravelModesSection from '@/components/travelModesSection/TravelModesSection';
import TrustedCompanies from '@/components/trustedCompanies/TrustedCompanies';
import React from 'react';

const page = () => {
    return (
        <div>
            <AdventureHero />
            <TrustedCompanies />
            <ExpeditionSection />
            <HowItWorksSection />
            <TravelModesSection />
            <FAQSection />
        </div>
    );
};

export default page;