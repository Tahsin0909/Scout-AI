import {
    Award,
    BadgeCheck,
    BarChart3,
    BookOpen,
    FileText,
    Headphones,
    Landmark,
    LayoutGrid,
    Link,
    TrendingUp,
} from 'lucide-react';

const tools = [
    { icon: LayoutGrid, label: 'Dashboard' },
    { icon: Link, label: 'Link/Code' },
    { icon: TrendingUp, label: 'Earnings' },
    { icon: Landmark, label: 'Stripe Tracking' },
    { icon: FileText, label: 'Submission' },
    { icon: BarChart3, label: 'Analytics' },
    { icon: Award, label: 'Tier Progress' },
    { icon: BookOpen, label: 'Resources' },
    { icon: Headphones, label: 'Support' },
    { icon: BadgeCheck, label: 'Early Access' },
];

const AllInclusivePartnerTools = () => {
    return (
        <section className="py-16 px-4 bg-gray-50">
            <div className="container">
                {/* Section Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
                    All-Inclusive Partner Tools
                </h2>

                {/* Tools Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {tools.map((tool, index) => {
                        const Icon = tool.icon;
                        return (
                            <div
                                key={index}
                                className="bg-white rounded-xl p-6 flex flex-col items-center justify-center text-center border border-gray-100 hover:shadow-md transition-shadow duration-300"
                            >
                                {/* Icon Container */}
                                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-3">
                                    <Icon className="w-6 h-6 text-gray-800" strokeWidth={2.5} />
                                </div>
                                {/* Label */}
                                <span className="text-sm font-medium text-gray-700">
                                    {tool.label}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default AllInclusivePartnerTools;