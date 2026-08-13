import { Dispatch, SetStateAction } from 'react';
import { LocationResult } from '../../explore-map.interface';
import { LocationSearch } from './LocationSearch';

const OpenTripHeader = ({ setSelectedLocation, loadPlaces }: { setSelectedLocation: Dispatch<SetStateAction<LocationResult | null>>, loadPlaces: (lat: number, lng: number) => Promise<void> }) => {

    const handleLocationSelect = async (location: LocationResult) => {
        setSelectedLocation(location);
        await loadPlaces(location.latitude, location.longitude);
    };

    return (
        <div>
            <div className="max-w-md">
                <LocationSearch onSelect={handleLocationSelect} />
            </div>
        </div>
    );
};

export default OpenTripHeader;