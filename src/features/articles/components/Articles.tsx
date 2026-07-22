"use client";

/* eslint-disable @next/next/no-img-element */

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";

import { Pagination } from "@/components/pagination/Pagination";
import {
  articles,
  type ArticleCategory,
} from "./articles-data";
import EmptyState from "@/components/others-state/EmptayState";

type CategoryFilter = "All" | ArticleCategory;
type SortOption = "newest" | "oldest" | "title";

const categories: CategoryFilter[] = [
  "All",
  "Hiking",
  "Safety",
  "Gear",
  "Destinations",
  "Camping",
];

const ARTICLES_PER_PAGE = 10;

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  }).format(new Date(date));
}

export const Articles = () => {
  const [activeCategory, setActiveCategory] =
    useState<CategoryFilter>("All");

  const [sortBy, setSortBy] =
    useState<SortOption>("newest");

  const [currentPage, setCurrentPage] = useState(1);

  const filteredArticles = useMemo(() => {
    const categoryFiltered =
      activeCategory === "All"
        ? articles
        : articles.filter(
          article =>
            article.category === activeCategory,
        );

    return [...categoryFiltered].sort((a, b) => {
      if (sortBy === "oldest") {
        return (
          new Date(a.publishedAt).getTime() -
          new Date(b.publishedAt).getTime()
        );
      }

      if (sortBy === "title") {
        return a.title.localeCompare(b.title);
      }

      return (
        new Date(b.publishedAt).getTime() -
        new Date(a.publishedAt).getTime()
      );
    });
  }, [activeCategory, sortBy]);

  const totalPages = Math.max(
    1,
    Math.ceil(
      filteredArticles.length / ARTICLES_PER_PAGE,
    ),
  );

  const startIndex =
    (currentPage - 1) * ARTICLES_PER_PAGE;

  const visibleArticles = filteredArticles.slice(
    startIndex,
    startIndex + ARTICLES_PER_PAGE,
  );

  const handleCategoryChange = (
    category: CategoryFilter,
  ) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const handleSortChange = (
    value: SortOption,
  ) => {
    setSortBy(value);
    setCurrentPage(1);
  };

  return (
    <section className="bg-background px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="container">
        {/* Header */}
        <div className="mb-9 max-w-3xl">
          <h2 className="text-3xl font-bold tracking-[-0.035em] sm:text-4xl lg:text-[42px]">
            Articles
          </h2>

          <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Here, we share adventure tips, destination
            guides, and stories that inspire your next
            journey.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-9 flex flex-col gap-5 pb-5 sm:flex-row sm:items-center sm:justify-between">
          <div
            role="tablist"
            aria-label="Article categories"
            className="
              flex max-w-full gap-2 overflow-x-auto
              pb-1 [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
            "
          >
            {categories.map(category => {
              const isActive =
                activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() =>
                    handleCategoryChange(category)
                  }
                  className={`
                    shrink-0 rounded-full px-4 py-2
                    text-xs font-medium
                    transition-colors duration-200
                    ${isActive
                      ? "bg-primary text-primary-foreground"
                      : "bg-transparent text-muted-foreground hover:bg-muted hover:text-foreground"
                    }
                  `}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-3 self-end sm:self-auto">
            <label
              htmlFor="article-sort"
              className="text-xs font-medium text-muted-foreground"
            >
              Sort by
            </label>

            <select
              id="article-sort"
              value={sortBy}
              onChange={event =>
                handleSortChange(
                  event.target.value as SortOption,
                )
              }
              className="
                h-9 rounded-lg border border-border
                bg-card px-3 text-xs text-foreground
                outline-none transition-colors
                focus:border-primary
                focus:ring-2 focus:ring-primary/15
              "
            >
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
              <option value="title">Title A–Z</option>
            </select>
          </div>
        </div>

        {/* Results */}
        {visibleArticles.length > 0 ? (
          <div
            className="
              grid grid-cols-1 gap-x-5 gap-y-10
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >
            {visibleArticles.map(article => (
              <article
                key={article.id}
                className="group min-w-0"
              >
                <Link
                  href={`/articles/${article.id}`}
                  className="block"
                >
                  {/* Image */}
                  <div className="relative aspect-[16/9] overflow-hidden rounded-lg bg-muted">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="
                        size-full object-cover
                        transition-transform duration-700
                        ease-[cubic-bezier(0.45,0,0.55,1)]
                        group-hover:scale-[1.035]
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
                      {article.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="pt-4">
                    <p className="text-[11px] text-muted-foreground">
                      {formatDate(article.publishedAt)}
                      {" · "}
                      {article.readTime} min read
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
                      {article.title}
                    </h3>

                    <p
                      className="
                        mt-2 line-clamp-2
                        text-xs leading-relaxed
                        text-muted-foreground
                        sm:text-sm
                      "
                    >
                      {article.excerpt}
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
                        className="
                          size-3.5
                          transition-transform duration-200
                          group-hover:translate-x-1
                        "
                      />
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        ) : <EmptyState title="No articles found" description="Try selecting a different category." icon={<ArtilesIcon />} />
        }

        {/* Pagination */}
        {filteredArticles.length >
          ARTICLES_PER_PAGE && (
            <div className="mt-14 flex justify-center sm:mt-16">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={page => {
                  setCurrentPage(page);
                }}
              />
            </div>
          )}
      </div>
    </section>
  );
};

const ArtilesIcon = () => {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120">
    <rect x="20" y="10" width="70" height="85" rx="4" fill="#f0f0f0" stroke="#d0d0d0" strokeWidth="2" />

    <line x1="30" y1="28" x2="75" y2="28" stroke="#c0c0c0" strokeWidth="3" strokeLinecap="round" />
    <line x1="30" y1="40" x2="70" y2="40" stroke="#c0c0c0" strokeWidth="3" strokeLinecap="round" />
    <line x1="30" y1="52" x2="65" y2="52" stroke="#c0c0c0" strokeWidth="3" strokeLinecap="round" />
    <line x1="30" y1="64" x2="72" y2="64" stroke="#c0c0c0" strokeWidth="3" strokeLinecap="round" />
    <line x1="30" y1="76" x2="55" y2="76" stroke="#c0c0c0" strokeWidth="3" strokeLinecap="round" />

    <path d="M70 10 L70 25 L85 25" fill="#e8e8e8" stroke="#d0d0d0" strokeWidth="2" />

    <circle cx="82" cy="72" r="22" fill="none" stroke="#666" strokeWidth="4" />
    <line x1="97" y1="87" x2="110" y2="100" stroke="#666" strokeWidth="5" strokeLinecap="round" />

    <circle cx="82" cy="72" r="28" fill="none" stroke="#ff6b6b" strokeWidth="2" strokeDasharray="4 4" />
  </svg>
}