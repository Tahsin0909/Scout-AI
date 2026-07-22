import EmptyState from '@/components/others-state/EmptayState'
import ArticleAdvertisements from './ArticleAdvertisements'
import ArticleContent from './ArticleContent'
import { articlesData } from './data/articlesData'
import SingleArticlesHeader from './SingleArticlesHeader'
import { ArticlesIcon } from '@/utils/icons'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

type SingleArticlesProps = {
    id: string
}

const SingleArticles = ({
    id,
}: SingleArticlesProps) => {
    const article = articlesData.find(
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
        backgroundImage,
        content,
        advertisements,
    } = article

    return (
        <main>
            <SingleArticlesHeader
                title={title}
                category={category}
                publishedAt={publishedAt}
                readTime={readTime}
                views={views}
                backgroundImage={backgroundImage}
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

                    <ArticleAdvertisements
                        advertisements={advertisements}
                    />
                </div>
            </section>
        </main>
    )
}

export default SingleArticles