import CompanyTimelineSection from "@/components/about-us/CompanyTimeline";
import Foundation from "@/components/about-us/Foundation";
import MissionSection from "@/components/about-us/Mission";
import FAQSection from "@/components/faq/FaqSection";
import SectionHeader from "@/components/sectionHeader/SectionHeader";
import TestimonialsSection from "@/components/testimonials/TestimonialsSection";

const page = () => {
    return (
        <div>
            <SectionHeader backgroundImage="./articlesheader.jpg" metrics={400} metricsSubtitle="Beta Dossiers Delivered" subtitle="TripTrax " description="Adventure, down to a science. Every expedition begins with a plan. Plan. Track. Go" title="About Us" />
            <MissionSection />
            <CompanyTimelineSection />
            <Foundation />
            <TestimonialsSection />
            <FAQSection />
        </div>
    );
};

export default page; 