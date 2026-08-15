import { Library } from "lucide-react";
import { useMemo, useState } from "react";
import { ResourceCategory } from "../resource.interface";
import { ResourceCard } from "./ResourceCard";
import { partnerResources } from "../data/data";



export const PartnerResource = () => {
  const [activeCategory, setActiveCategory] = useState<
    "All" | ResourceCategory
  >("All");

  const filteredResources = useMemo(() => {
    if (activeCategory === "All") {
      return partnerResources;
    }

    return partnerResources.filter(
      (resource) => resource.category === activeCategory,
    );
  }, [activeCategory]);

  return (
    <section>
      <div className="min-w-0">
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <Library className="h-4 w-4" />
            <h2 className="text-sm font-medium">Resource Library</h2>
          </div>

          <div className="flex max-w-full gap-2 overflow-x-auto pb-1">
            {(["All", "Assets", "Templates", "Training"] as const).map(
              (category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`shrink-0 rounded-full px-4 py-1.5 text-xs transition-colors ${activeCategory === category
                    ? "bg-[#FFD43B] font-medium text-black"
                    : "bg-card text-muted-foreground hover:text-foreground"
                    }`}
                >
                  {category}
                </button>
              )
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {filteredResources.map((resource) => (
          <ResourceCard
            key={resource.id}
            title={resource.title}
            description={resource.description}
            category={resource.category}
            actionLabel={resource.actionLabel}
            icon={resource.icon}
          />
        ))}
      </div>
    </section>
  );
};