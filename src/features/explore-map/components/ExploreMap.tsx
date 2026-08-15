import SidebarTrails from "@/features/explore-map/components/SidebarTrails";
import GlobeMap from "./GlobeMap";

const ExploreMap = () => {
  return (
    <div className="grid grid-cols-5 overflow-hidden">
      <div className="relative">
        <SidebarTrails />
      </div>
      <div className="col-span-4">
        <GlobeMap />
      </div>
    </div>
  );
};

export default ExploreMap;