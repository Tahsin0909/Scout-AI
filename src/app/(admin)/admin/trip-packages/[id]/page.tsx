import UnderConstruction from '@/components/others-state/underConstruction';
import TripReport from '@/features/triptrax/components/tripReport/TripReport';

const page = () => {
    return (
        <div>
            <UnderConstruction name='Trip Details' type='server' description='The Page design is completed Admin will be able to edit it so waiting for the server after that it will be edit able' />
            <TripReport />
        </div>
    );
};

export default page;