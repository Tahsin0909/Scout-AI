import ExpeditionSection from '@/components/expedition-section/ExpeditionSections';
import TrustedCompanies from '@/components/trustedCompanies/TrustedCompanies';
import React from 'react';

const page = () => {
    return (
        <div>
            <TrustedCompanies />
            <ExpeditionSection />
        </div>
    );
};

export default page;