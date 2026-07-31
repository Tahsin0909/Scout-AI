"use client";

import { useMemo, useState } from "react";

import EmptyState from "@/components/others-state/EmptayState";
import { Pagination } from "@/components/pagination/Pagination";
import { ArticlesIcon } from "@/utils/icons";

import ArticleCard from "./ArticleCard";
import {
  articles,
  type ArticleCategory,
} from "./articles-data";

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

  const handlePageChange = (page: number) => {
    setCurrentPage(page);

    document
      .getElementById("articles-section")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  return (
    <section
      id="articles-section"
      className="
        scroll-mt-20 bg-background
        px-4 py-16
        sm:px-6 sm:py-20
        lg:px-8 lg:py-24
      "
    >
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
        <div
          className="
            mb-9 flex flex-col gap-5 pb-5
            sm:flex-row sm:items-center
            sm:justify-between
          "
        >
          <div
            role="tablist"
            aria-label="Article categories"
            className="
              flex max-w-full gap-2 overflow-x-auto pb-1
              [scrollbar-width:none]
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
                outline-none
                transition-[border-color,box-shadow]
                duration-200
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
              grid grid-cols-1
              gap-x-5 gap-y-10
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >
            {visibleArticles.map(article => (
              <ArticleCard
                key={article.id}
                article={article}
              />
            ))}
          </div>
        ) : (
          <EmptyState
            title="No articles found"
            description="Try selecting a different category."
            icon={<ArticlesIcon />}
          />
        )}

        {/* Pagination */}
        {filteredArticles.length >
          ARTICLES_PER_PAGE && (
            <div className="mt-14 flex justify-center sm:mt-16">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          )}
      </div>
    </section>
  );
};