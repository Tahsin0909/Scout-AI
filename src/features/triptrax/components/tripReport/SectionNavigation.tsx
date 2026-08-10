export const SectionNavigation = () => {
    const sections = [
        "Duration",
        "Weather",
        "Navigation",
        "Safety",
        "Gear",
        "Camps",
        "Food",
        "Files",
    ];

    return (
        <div className="overflow-x-auto border-b border-[#252525]">
            <div className="flex min-w-max items-center gap-8">
                {sections.map((item, index) => (
                    <button key={item} type="button" className={`border-b-2 py-3 text-xs transition-colors font-semibold ${index === 0 ? "border-white text-primary" : "border-transparent  hover:text-neutral-300"}`}>
                        {item}
                    </button>
                ))}
            </div>
        </div>
    );
};