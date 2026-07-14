'use client'

import { MapPin } from 'lucide-react';
import Link from 'next/link';
import { AiOutlineAim } from "react-icons/ai";
import { FaCloudSunRain } from 'react-icons/fa';
import { FaCamera } from "react-icons/fa6";
import { SiAdguard } from "react-icons/si";
import { TiGroup } from "react-icons/ti";
import { Button } from '../ui/button';

export default function ExpeditionSection() {
    return (
        <section className="w-full bg-background py-16 md:py-24 lg:py-32">
            <div className="container px-4 sm:px-6 lg:px-8 ">
                {/* Header */}
                <div className="mb-12 text-center md:mb-16 max-w-3xl mx-auto">
                    <p className="mb-4 text-sm font-medium text-muted-foreground uppercase tracking-wide border w-fit mx-auto px-3 py-1 rounded-full bg-white/5 ">
                        The Platform
                    </p>
                    <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                        Not Just A Trip Planner An Expedition{' '}
                        <span className="text-[#97B900] italic">Engine</span>
                    </h2>
                    <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg">
                        You give us the details. Our AI builds the first draft. A human expert reviews and delivers. Adventure, Down To A Science.
                    </p>
                </div>

                {/* Feature Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-16">
                    {/* Weather */}
                    <div
                        className="
            group cursor-pointer rounded-lg border border-transparent
            bg-card p-6 lg:col-span-6
            transition-[background-color,border-color,box-shadow,transform]
            duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
            
            hover:border-white/10
            hover:bg-card-foreground
            hover:shadow-[0_18px_45px_-20px_rgba(0,0,0,0.35)]
        "
                    >
                        <div
                            className="
                mb-6 w-fit rounded-lg bg-icon-bg p-2 lg:mb-12
                transition-[background-color,transform]
                duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
                group-hover:scale-105
                group-hover:bg-icon-bg-hover
            "
                        >
                            <FaCloudSunRain
                                className="
                    size-8 text-card-foreground
                    transition-colors duration-300 ease-out
                    group-hover:text-card
                "
                            />
                        </div>

                        <h3
                            className="
                mb-3 text-card-foreground lg:text-2xl
                transition-colors duration-300 ease-out
                group-hover:text-card
            "
                        >
                            Weather Analysis
                        </h3>

                        <p
                            className="
                text-muted-foreground
                transition-colors duration-300 ease-out
                group-hover:text-card/80
            "
                        >
                            Live forecasts from OpenWeather &amp; Tomorrow.io layered across
                            your full route and each waypoint.
                        </p>
                    </div>

                    {/* Safety */}
                    <div
                        className="
            group cursor-pointer rounded-lg border border-transparent
            bg-card p-6 lg:col-span-5
            transition-[background-color,border-color,box-shadow,transform]
            duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
            
            hover:border-white/10
            hover:bg-card-foreground
            hover:shadow-[0_18px_45px_-20px_rgba(0,0,0,0.35)]
        "
                    >
                        <div
                            className="
                mb-6 w-fit rounded-lg bg-icon-bg p-2 lg:mb-12
                transition-[background-color,transform]
                duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
                group-hover:scale-105
                group-hover:bg-icon-bg-hover
            "
                        >
                            <SiAdguard
                                className="
                    size-8 text-card-foreground
                    transition-colors duration-300 ease-out
                    group-hover:text-card
                "
                            />
                        </div>

                        <h3
                            className="
                mb-3 text-card-foreground lg:text-2xl
                transition-colors duration-300 ease-out
                group-hover:text-card
            "
                        >
                            Safety &amp; Emergency
                        </h3>

                        <p
                            className="
                text-muted-foreground
                transition-colors duration-300 ease-out
                group-hover:text-card/80
            "
                        >
                            Nearest hospitals, ranger stations, wildlife advisories, Emergency
                            Action Plans, and evacuation routes.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div
                        className="
            group cursor-pointer rounded-lg border border-transparent
            bg-card p-6 lg:col-span-5
            transition-[background-color,border-color,box-shadow,transform]
            duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
            
            hover:border-white/10
            hover:bg-card-foreground
            hover:shadow-[0_18px_45px_-20px_rgba(0,0,0,0.35)]
        "
                    >
                        <div
                            className="
                mb-6 w-fit rounded-lg bg-icon-bg p-2 lg:mb-12
                transition-[background-color,transform]
                duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
                group-hover:scale-105
                group-hover:bg-icon-bg-hover
            "
                        >
                            <AiOutlineAim
                                className="
                    size-8 text-card-foreground
                    transition-colors duration-300 ease-out
                    group-hover:text-card
                "
                            />
                        </div>

                        <h3
                            className="
                mb-3 text-card-foreground lg:text-2xl
                transition-colors duration-300 ease-out
                group-hover:text-card
            "
                        >
                            Navigation &amp; Mapping
                        </h3>

                        <p
                            className="
                text-muted-foreground
                transition-colors duration-300 ease-out
                group-hover:text-card/80
            "
                        >
                            Annotated GPX files, elevation profiles, terrain difficulty, backup
                            routing, and offline maps.
                        </p>
                    </div>

                    {/* Campsite */}
                    <div
                        className="
            group cursor-pointer rounded-lg border border-transparent
            bg-card p-6 lg:col-span-5
            transition-[background-color,border-color,box-shadow,transform]
            duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
            
            hover:border-white/10
            hover:bg-card-foreground
            hover:shadow-[0_18px_45px_-20px_rgba(0,0,0,0.35)]
        "
                    >
                        <div
                            className="
                mb-6 w-fit rounded-lg bg-icon-bg p-2 lg:mb-12
                transition-[background-color,transform]
                duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
                group-hover:scale-105
                group-hover:bg-icon-bg-hover
            "
                        >
                            <MapPin
                                className="
                    size-8 text-card-foreground
                    transition-colors duration-300 ease-out
                    group-hover:text-card
                "
                            />
                        </div>

                        <h3
                            className="
                mb-3 text-card-foreground lg:text-2xl
                transition-colors duration-300 ease-out
                group-hover:text-card
            "
                        >
                            Campsite &amp; Lodging
                        </h3>

                        <p
                            className="
                text-muted-foreground
                transition-colors duration-300 ease-out
                group-hover:text-card/80
            "
                        >
                            Vetted stays with precision, satellite imaging, credit card hacks,
                            and reservation guidance.
                        </p>
                    </div>

                    {/* Photography */}
                    <div
                        className="
            group cursor-pointer rounded-lg border border-transparent
            bg-card p-6 lg:col-span-5
            transition-[background-color,border-color,box-shadow,transform]
            duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
            
            hover:border-white/10
            hover:bg-card-foreground
            hover:shadow-[0_18px_45px_-20px_rgba(0,0,0,0.35)]
        "
                    >
                        <div
                            className="
                mb-6 w-fit rounded-lg bg-icon-bg p-2 lg:mb-12
                transition-[background-color,transform]
                duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
                group-hover:scale-105
                group-hover:bg-icon-bg-hover
            "
                        >
                            <FaCamera
                                className="
                    size-8 text-card-foreground
                    transition-colors duration-300 ease-out
                    group-hover:text-card
                "
                            />
                        </div>

                        <h3
                            className="
                mb-3 text-card-foreground lg:text-2xl
                transition-colors duration-300 ease-out
                group-hover:text-card
            "
                        >
                            Photography &amp; Drone
                        </h3>

                        <p
                            className="
                text-muted-foreground
                transition-colors duration-300 ease-out
                group-hover:text-card/80
            "
                        >
                            Golden hour schedules, drone zone maps, astrophotography windows,
                            and vintage coordinates.
                        </p>
                    </div>

                    {/* Group */}
                    <div
                        className="
            group cursor-pointer rounded-lg border border-transparent
            bg-card p-6 lg:col-span-6
            transition-[background-color,border-color,box-shadow,transform]
            duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
            
            hover:border-white/10
            hover:bg-card-foreground
            hover:shadow-[0_18px_45px_-20px_rgba(0,0,0,0.35)]
        "
                    >
                        <div
                            className="
                mb-6 w-fit rounded-lg bg-icon-bg p-2 lg:mb-12
                transition-[background-color,transform]
                duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
                group-hover:scale-105
                group-hover:bg-icon-bg-hover
            "
                        >
                            <TiGroup
                                className="
                    size-8 text-card-foreground
                    transition-colors duration-300 ease-out
                    group-hover:text-card
                "
                            />
                        </div>

                        <h3
                            className="
                mb-3 text-card-foreground lg:text-2xl
                transition-colors duration-300 ease-out
                group-hover:text-card
            "
                        >
                            Group Expedition
                        </h3>

                        <p
                            className="
                text-muted-foreground
                transition-colors duration-300 ease-out
                group-hover:text-card/80
            "
                        >
                            Certified adventure experts verify facts, add local knowledge,
                            apply safety judgment, and give your dossier to the public.
                        </p>
                    </div>
                </div>

                {/* CTA Button */}
                <div className="mt-12 text-center md:mt-16 w-fit mx-auto">
                    <Button variant={"primary"}>
                        <Link
                            href="/register"
                        >
                            <span>View Packaging</span>
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
