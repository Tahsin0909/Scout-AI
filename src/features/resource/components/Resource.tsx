import { FileText, ImageIcon, LayoutGrid, Library, Video } from "lucide-react";
import { useMemo, useState } from "react";
import { IPartnerResource, ResourceCategory } from "../resource.interface";
import { ResourceCard } from "./ResourceCard";

const partnerResources: IPartnerResource[] = [
  {
    id: 1,
    title: "Brand Assets Pack v2.0",
    description:
      "Latest high-resolution logos, icons, and color guides for the Winter 2024 season.",
    category: "Assets",
    actionLabel: "Download Assets",
    icon: <ImageIcon className="h-5 w-5" />,
  },
  {
    id: 2,
    title: "Elite Partner Training",
    description:
      "Exclusive video tutorial on maximizing conversion for technical gear reviews.",
    category: "Training",
    actionLabel: "Watch Module",
    icon: <Video className="h-5 w-5" />,
  },
  {
    id: 3,
    title: "Campaign Brief: Everest '24",
    description:
      "Guidelines, required hashtags, and messaging for the upcoming expedition.",
    category: "Assets",
    actionLabel: "Download PDF",
    icon: <FileText className="h-5 w-5" />,
  },
  {
    id: 4,
    title: "Story Templates Kit",
    description:
      "Custom-designed Instagram story frames and overlays for gear unboxing.",
    category: "Templates",
    actionLabel: "Get Templates",
    icon: <LayoutGrid className="h-5 w-5" />,
  },
];

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