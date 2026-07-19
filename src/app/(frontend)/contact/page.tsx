import FAQSection from "@/components/faq/FaqSection";
import SectionHeader from "@/components/sectionHeader/SectionHeader";

const page = () => {
    return (
        <div>
            <SectionHeader backgroundImage="./contactUs.jpg" subtitle="Apex Adventure Lab " description="Built by adventurers, for adventurers. We believe that great preparation is the difference between a good trip and an unforgettable one." title="Contact Us" />
            <FAQSection />
        </div>
    );
};

export default page;