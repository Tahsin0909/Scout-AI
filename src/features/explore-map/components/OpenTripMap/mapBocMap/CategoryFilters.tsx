"use client";

import { CATEGORIES } from "@/data/categories";
import { CategoryId } from "@/types/explore";

const DOT_CLASS: Record<string, string> = {
  forest: "bg-forest",
  summit: "bg-summit",
  trail: "bg-trail",
  clay: "bg-clay",
};

interface Props {
  active: CategoryId[];
  onToggle: (id: CategoryId) => void;
  onClear: () => void;
}

export function CategoryFilters({ active, onToggle, onClear }: Props) {
  const allActive = active.length === 0;

  return (
    <div className="flex flex-wrap items-center gap-2">
      <button
        type="button"
        onClick={onClear}
        className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition ${
          allActive
            ? "border-trail bg-trail/15 text-trail"
            : "border-hairline text-muted hover:border-ink/30 hover:text-ink"
        }`}
      >
        All
      </button>
      {CATEGORIES.map((cat) => {
        const isActive = active.includes(cat.id);
        return (
          <button
            key={cat.id}
            type="button"
            onClick={() => onToggle(cat.id)}
            aria-pressed={isActive}
            title={cat.description}
            className={`flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-medium transition ${
              isActive
                ? "border-trail bg-trail/15 text-trail"
                : "border-hairline text-muted hover:border-ink/30 hover:text-ink"
            }`}
          >
            <span className={`h-1.5 w-1.5 rounded-full ${DOT_CLASS[cat.color]}`} />
            {cat.label}
          </button>
        );
      })}
    </div>
  );
}
