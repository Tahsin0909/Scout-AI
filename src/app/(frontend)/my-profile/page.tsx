import { UserProfileCard } from '@/features/user/components/UserProfileCard';
import { currentUser } from '@/features/user/data/data';

const page = () => {
    return (
        <div>
            <UserProfileCard user={currentUser} />
        </div>
    );
};

export default page;