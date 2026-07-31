import { Articles } from '@/features/articles/components/Articles';
import AdventureKnowledgeHeader from '@/features/articles/components/PageHeader';

const page = () => {
    return (
        <div>
            <AdventureKnowledgeHeader />
            <Articles />
        </div>
    );
};

export default page;