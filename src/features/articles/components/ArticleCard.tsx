/* eslint-disable @next/next/no-img-element */

import { ArrowRight } from "lucide-react";
import Link from "next/link";

import type { Article } from "./articles-data";

type ArticleCardProps = {
    article: Article;
};

function formatDate(date: string) {
    return new Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
    }).format(new Date(date));
}

const ArticleCard = ({ article }: ArticleCardProps) => {
    const {
        id,
        title,
        excerpt,
        category,
        image,
        publishedAt,
        readTime,
    } = article;

    return (
        <article className="group min-w-0">
            <Link
                href={`/articles/${id}`}
                aria-label={`Read ${title}`}
                className="block"
            >
                {/* Image */}
                <div className="relative aspect-[16/9] overflow-hidden rounded-lg bg-muted">
                    <img
                        src={image}
                        alt={title}
                        loading="lazy"
                        className="
              size-full object-cover
              transition-transform duration-700
              ease-[cubic-bezier(0.45,0,0.55,1)]
              group-hover:scale-[1.035]
              motion-reduce:transform-none
              motion-reduce:transition-none
            "
                    />

                    <span
                        className="
              absolute left-3 top-3
              rounded-full border border-white/15
              bg-black/55 px-2.5 py-1
              text-[9px] font-medium uppercase
              tracking-wide text-white
              backdrop-blur-sm
            "
                    >
                        {category}
                    </span>
                </div>

                {/* Content */}
                <div className="pt-4">
                    <p className="text-[11px] text-muted-foreground">
                        <time dateTime={publishedAt}>
                            {formatDate(publishedAt)}
                        </time>

                        <span aria-hidden="true"> · </span>

                        <span>{readTime} min read</span>
                    </p>

                    <h3
                        className="
              mt-2 line-clamp-2
              text-base font-semibold leading-snug
              tracking-[-0.02em]
              transition-colors duration-200
              group-hover:text-[#97B900]
              sm:text-lg
            "
                    >
                        {title}
                    </h3>

                    <p
                        className="
              mt-2 line-clamp-2
              text-xs leading-relaxed
              text-muted-foreground
              sm:text-sm
            "
                    >
                        {excerpt}
                    </p>

                    <span
                        className="
              mt-4 inline-flex items-center gap-2
              text-xs font-medium text-foreground
              transition-colors duration-200
              group-hover:text-[#97B900]
            "
                    >
                        Read More

                        <ArrowRight
                            aria-hidden="true"
                            className="
                size-3.5
                transition-transform duration-200
                group-hover:translate-x-1
                motion-reduce:transform-none
              "
                        />
                    </span>
                </div>
            </Link>
        </article>
    );
};

export default ArticleCard;