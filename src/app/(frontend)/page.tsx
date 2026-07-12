import AdventureHero from '@/components/adventureHero/AdventureHero';
import ExpeditionSection from '@/components/expedition-section/ExpeditionSections';
import FAQSection from '@/components/faq/FaqSection';
import TrustedCompanies from '@/components/trustedCompanies/TrustedCompanies';
import React from 'react';

const page = () => {
    return (
        <div>
            <AdventureHero />
            <TrustedCompanies />
            <ExpeditionSection />
            <FAQSection />
        </div>
    );
};

export default page;