import { ArrowRight } from "lucide-react";
import Link from "next/link";

import ArticleCard from "./ArticleCard";
import {
    articles,
    type ArticleCategory,
} from "./articles-data";

type SimilarArticlesProps = {
    currentArticleId: number | string;
    category?: ArticleCategory;
    limit?: number;
};

const SimilarArticles = ({
    currentArticleId,
    category,
    limit = 3,
}: SimilarArticlesProps) => {
    const normalizedId = Number(currentArticleId);

    /*
     * Same-category articles receive priority.
     * Other articles are used as fallbacks when fewer than
     * the requested number exist in that category.
     */
    const relatedArticles = articles
        .filter(article => article.id !== normalizedId)
        .sort((a, b) => {
            if (!category) {
                return 0;
            }

            const aMatches = a.category === category ? 1 : 0;
            const bMatches = b.category === category ? 1 : 0;

            return bMatches - aMatches;
        })
        .slice(0, limit);

    if (relatedArticles.length === 0) {
        return null;
    }

    return (
        <section className="bg-background px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
            <div className="container">
                {/* Header */}
                <div
                    className="
            mb-9 flex flex-col gap-5
            sm:flex-row sm:items-end sm:justify-between
            lg:mb-11
          "
                >
                    <div className="max-w-3xl">
                        <h2
                            className="
                text-3xl font-bold tracking-[-0.035em]
                sm:text-4xl lg:text-[42px]
              "
                        >
                            Similar Articles
                        </h2>

                        <p
                            className="
                mt-2 max-w-xl text-sm leading-relaxed
                text-muted-foreground sm:text-base
              "
                        >
                            More insights from the Apex Adventure Lab experts.
                        </p>
                    </div>

                    <Link
                        href="/articles"
                        className="
              group inline-flex w-fit items-center gap-2
              text-sm font-medium text-[#ff7043]
              transition-colors duration-200
              hover:text-[#e85c32]
            "
                    >
                        View All Articles

                        <ArrowRight
                            aria-hidden="true"
                            className="
                size-4 transition-transform duration-200
                group-hover:translate-x-1
              "
                        />
                    </Link>
                </div>

                {/* Related articles */}
                <div
                    className="
            grid grid-cols-1 gap-x-6 gap-y-10
            sm:grid-cols-2
            lg:grid-cols-3
          "
                >
                    {relatedArticles.map(article => (
                        <ArticleCard
                            key={article.id}
                            article={article}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SimilarArticles;