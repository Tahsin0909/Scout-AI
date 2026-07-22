import { Footer } from '@/components/footer/components/Footer';
import { Navbar } from '@/components/navbar/components/Navbar';
import ArticleCta from '@/features/articles/components/ArticleCta';
import { Articles } from '@/features/articles/components/Articles';
import AdventureKnowledgeHeader from '@/features/articles/components/PageHeader';

const page = () => {
    return (
        <div>
            <Navbar />
            <AdventureKnowledgeHeader />
            <Articles />
            <ArticleCta />
            <Footer />
        </div>
    );
};

export default page;