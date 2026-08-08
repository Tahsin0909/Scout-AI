import { Plus } from 'lucide-react';
import { partnerResources } from '../data/data';
import { ResourceCard } from './ResourceCard';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const AllResources = () => {
    return (
        <section>
            <div className='mb-4 w-fit ml-auto'>
                <Button className=''>
                    <Link href={`/admin/partnerships/resources/add`} className='flex items-center gap-1'>
                        <Plus />
                        <span>Add Resource</span>
                    </Link>
                </Button>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {partnerResources.map((resource) => (
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

export default AllResources;