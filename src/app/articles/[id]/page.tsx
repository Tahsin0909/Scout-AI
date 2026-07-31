import SingleArticles from "@/features/articles/components/SingleArticles";

type ArticlePageProps = {
    params: Promise<{
        id: string;
    }>;
};

const Page = async ({ params }: ArticlePageProps) => {
    const { id } = await params;

    return (
        <main>
            <SingleArticles id={id} />
        </main>
    );
};

export default Page;