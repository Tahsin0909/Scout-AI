/* eslint-disable react/no-unescaped-entities */

const CommissionStructureSection = () => {
    return (
        <section className="py-16 ">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold  mb-4">
                                Commission Structure
                            </h2>
                            <p className="leading-relaxed">
                                Maximize your earnings with our tiered commission model. Every new subscriber you bring to the community adds value and earns you ongoing rewards.
                            </p>
                        </div>

                        <div className="bg-gray-50 dark:bg-gray-600 p-5 rounded-lg border-l-4 border-primary">
                            <p className=" italic">
                                "Partner payouts are processed monthly through Stripe Connect, ensuring fast and secure transfers directly to your account."
                            </p>
                        </div>
                    </div>

                    {/* Right Content - Commission Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Monthly Sub Card */}
                        <div className="bg-black rounded-xl p-6 text-center text-white">
                            <div className="text-5xl md:text-6xl font-bold mb-2">20%</div>
                            <div className="text-xl font-semibold mb-3">Monthly Sub</div>
                            <div className="text-gray-300 text-sm">
                                <div>20% commission for partner</div>
                                <div>20% off for customer</div>
                            </div>
                        </div>

                        {/* Annual Sub Card */}
                        <div className="bg-card rounded-xl p-6 text-center">
                            <div className="text-5xl md:text-6xl font-bold mb-2">10%</div>
                            <div className="text-xl font-semibold mb-3">Annual Sub</div>
                            <div className=" text-sm">
                                <div>10% commission for partner</div>
                                <div>10% off for customer</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CommissionStructureSection;