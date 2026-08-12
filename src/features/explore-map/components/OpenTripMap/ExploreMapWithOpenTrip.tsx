import GlobeMap from "../GlobeMap";
import TravelPlacesClient from "./TravelPlaces";

const ExploreMapWithOpenTrip = () => {
    return (
        <div className="grid grid-cols-5 overflow-hidden">
            <div className="relative col-span-1">
                <TravelPlacesClient />
            </div>

            <div className="col-span-4">
                <GlobeMap />
            </div>
        </div>
    );
};

export default ExploreMapWithOpenTrip;