import EmptyState from '@/components/others-state/EmptayState'
import { Button } from '@/components/ui/button'
import ArticleAffiliation from '@/features/affiliation/components/ArticleAffiliation'
import { ArticlesIcon } from '@/utils/icons'
import Link from 'next/link'
import ArticleContent from './ArticleContent'
import SingleArticlesHeader from './SingleArticlesHeader'
import { advertisements } from '@/features/affiliation/components/data/articles-add'
import SimilarArticles from './SimilarArticles'
import { articles } from './data/articles-data'

type SingleArticlesProps = {
    id: string
}

const SingleArticles = ({
    id,
}: SingleArticlesProps) => {
    const article = articles.find(
        articleItem =>
            articleItem.id === Number(id),
    )

    if (!article) {
        return <EmptyState
            title="No articles available"
            description="This category doesn't have any articles yet. Browse other categories to continue reading."
            icon={<ArticlesIcon />} action={<>
                <Button>
                    <Link href={"/articles"}>
                        Go Back
                    </Link>
                </Button>
            </>} />
    }

    const {
        title,
        category,
        publishedAt,
        readTime,
        views,
        image,
        content,
    } = article

    return (
        <main>
            <SingleArticlesHeader
                title={title}
                category={category}
                publishedAt={publishedAt}
                readTime={readTime}
                views={views}
                backgroundImage={image}
            />

            <section className="bg-background px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
                <div
                    className="
                        container grid gap-12
                        lg:grid-cols-[minmax(0,1fr)_300px]
                        xl:grid-cols-[minmax(0,1fr)_340px]
                        xl:gap-16
                    "
                >
                    <ArticleContent content={content} />

                    <ArticleAffiliation
                        advertisements={advertisements}
                    />
                </div>
            </section>
            <SimilarArticles currentArticleId={id} />
        </main>
    )
}

export default SingleArticles