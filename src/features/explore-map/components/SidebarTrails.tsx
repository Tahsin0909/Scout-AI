import TrailsCard from "./TrailsCard";

const SidebarTrails = () => {
    return (
        <div className="bg-gray-600 p-2">
            <p className="text-lg font-bold">
                Explore trails
            </p>
            <div className="space-y-3">
                <TrailsCard />
                <TrailsCard />
                <TrailsCard />
                <TrailsCard />
            </div>
        </div>
    );
};

export default SidebarTrails;