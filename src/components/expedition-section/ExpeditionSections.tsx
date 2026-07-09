'use client'

import { Cloud, AlertTriangle, MapPin, Tent, Camera, Users } from 'lucide-react'
import Link from 'next/link'



export default function ExpeditionSection() {
    return (
        <section className="w-full bg-background py-16 md:py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
                {/* Header */}
                <div className="mb-12 text-center md:mb-16 max-w-3xl mx-auto">
                    <p className="mb-4 text-sm font-medium text-muted-foreground uppercase tracking-wide">
                        The Platform
                    </p>
                    <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                        Not Just A Trip Planner An Expedition{' '}
                        <span className="text-[#97B900]">Engine</span>
                    </h2>
                    <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg">
                        You give us the details. Our AI builds the first draft. A human expert reviews and delivers. Adventure, Down To A Science.
                    </p>
                </div>

                {/* Feature Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-16">
                    {/* Weather */}
                    <div className="col-span-6 rounded-lg p-6 bg-card hover:bg-card-foreground group transition-colors hover:cursor-pointer delay-200">
                        <div className="w-fit p-1 rounded-lg bg-icon-bg group-hover:bg-icon-bg-hover lg:mb-12">
                            <Cloud className="w-8 h-8 group-hover:text-card" />
                        </div>
                        <h3 className="lg:text-2xl mb-3 group-hover:text-card">
                            Weather Analysis
                        </h3>
                        <p className="group-hover:text-card">
                            Live forecasts from OpenWeather & Tomorrow.io layered across your full
                            route and each waypoint.
                        </p>
                    </div>

                    {/* Safety */}
                    <div className="col-span-5 rounded-lg p-6 bg-card hover:bg-card-foreground group transition-colors hover:cursor-pointer delay-200">
                        <div className="w-fit p-1 rounded-lg bg-icon-bg group-hover:bg-icon-bg-hover lg:mb-12">
                            <AlertTriangle className="w-8 h-8 group-hover:text-card" />
                        </div>
                        <h3 className="lg:text-2xl mb-3 group-hover:text-card">
                            Safety & Emergency
                        </h3>
                        <p className="group-hover:text-card">
                            Nearest hospitals, ranger stations, wildlife advisories, Emergency
                            Action Plans, and evacuation routes.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div className="col-span-5 rounded-lg p-6 bg-card hover:bg-card-foreground group transition-colors hover:cursor-pointer delay-200">
                        <div className="w-fit p-1 rounded-lg bg-icon-bg group-hover:bg-icon-bg-hover lg:mb-12">
                            <MapPin className="w-8 h-8 group-hover:text-card" />
                        </div>
                        <h3 className="lg:text-2xl mb-3 group-hover:text-card">
                            Navigation & Mapping
                        </h3>
                        <p className="group-hover:text-card">
                            Annotated GPX files, elevation profiles, terrain difficulty, backup
                            routing, and offline maps.
                        </p>
                    </div>

                    {/* Campsite */}
                    <div className="col-span-5 rounded-lg p-6 bg-card hover:bg-card-foreground group transition-colors hover:cursor-pointer delay-200">
                        <div className="w-fit p-1 rounded-lg bg-icon-bg group-hover:bg-icon-bg-hover lg:mb-12">
                            <Tent className="w-8 h-8 group-hover:text-card" />
                        </div>
                        <h3 className="lg:text-2xl mb-3 group-hover:text-card">
                            Campsite & Lodging
                        </h3>
                        <p className="group-hover:text-card">
                            Vetted stays with precision, satellite imaging, credit card hacks, and
                            reservation guidance.
                        </p>
                    </div>

                    {/* Photography */}
                    <div className="col-span-5 rounded-lg p-6 bg-card hover:bg-card-foreground group transition-colors hover:cursor-pointer delay-200">
                        <div className="w-fit p-1 rounded-lg bg-icon-bg group-hover:bg-icon-bg-hover lg:mb-12">
                            <Camera className="w-8 h-8 group-hover:text-card" />
                        </div>
                        <h3 className="lg:text-2xl mb-3 group-hover:text-card">
                            Photography & Drone
                        </h3>
                        <p className="group-hover:text-card">
                            Golden hour schedules, drone zone maps, astrophotography windows, and
                            vintage coordinates.
                        </p>
                    </div>

                    {/* Group */}
                    <div className="col-span-6 rounded-lg p-6 bg-card hover:bg-card-foreground group transition-colors hover:cursor-pointer delay-200">
                        <div className="w-fit p-1 rounded-lg bg-icon-bg group-hover:bg-icon-bg-hover lg:mb-12">
                            <Users className="w-8 h-8 group-hover:text-card" />
                        </div>
                        <h3 className="lg:text-2xl mb-3 group-hover:text-card">
                            Group Expedition
                        </h3>
                        <p className="group-hover:text-card">
                            Certified adventure experts verify facts, add local knowledge, apply
                            safety judgment, and give your dossier to the public.
                        </p>
                    </div>
                </div>

                {/* CTA Button */}
                <div className="mt-12 text-center md:mt-16 w-fit mx-auto">
                    <Link
                        href="/register"
                        className="flex items-center justify-center md:text-lg text-sm  font-work-sans font-medium transition-colors duration-300 md:gap-2 gap-1 outline-none border-2 border-primary bg-primary rounded-xl md:px-4 px-2 md:py-2 py-1.5"
                    >
                        <span>View Packaging</span>
                    </Link>
                </div>
            </div>
        </section>
    )
}
