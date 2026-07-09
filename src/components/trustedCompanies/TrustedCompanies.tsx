"use client";
import {
    FaAirbnb,
    FaAmazon,
    FaApple,
    FaGithub,
    FaGoogle,
    FaLyft,
    FaMicrosoft,
    FaUber,
} from "react-icons/fa";
import { IconType } from "react-icons/lib";

interface Partner {
    Icon: IconType;
    name: string;
}

export default function TrustedCompanies() {

    const partners: Partner[] = [
        { Icon: FaAmazon, name: "Amazon" },
        { Icon: FaAirbnb, name: "Airbnb" },
        { Icon: FaGoogle, name: "Google" },
        { Icon: FaApple, name: "Apple" },
        { Icon: FaMicrosoft, name: "Microsoft" },
        { Icon: FaGithub, name: "GitHub" },
        { Icon: FaUber, name: "Uber" },
        { Icon: FaLyft, name: "Lyft" },
    ];

    // Duplicate for seamless loop
    const marqueeItems = [...partners, ...partners, ...partners, ...partners];

    return (
        <section className=" ">
            <div className="container py-12 overflow-hidden ">
                <h2 className="text-center dark:text-white sm:text-lg  font-medium text-gray-900 uppercase tracking-wider mb-8">
                    Trusted by Leading Companies Worldwide
                </h2>

                <div className="relative h-20 flex justify-center">
                    {/* Gradient masks for fade effect */}
                    <div className="absolute -left-6 top-0 bottom-0 w-25  bg-gradient-to-r  from-background to-transparent  z-10" />
                    <div className="absolute -right-6 top-0 bottom-0 w-25  bg-gradient-to-l from-background to-transparent z-10" />

                    <div className="flex animate-marquee">
                        {marqueeItems.map((partner, index) => (
                            <div
                                key={`${partner.name}-${index}`}
                                className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300 mx-8 md:mx-12"
                            >
                                <partner.Icon
                                    size={40}
                                    className="text-black dark:text-white"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <style jsx>{`
                @keyframes marquee {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-33.333%);
                    }
                }

                .animate-marquee {
                    animation: marquee 30s linear infinite;
                }

                .animate-marquee:hover {
                    animation-play-state: paused;
                }
            `}</style>
            </div>
        </section>
    );
}