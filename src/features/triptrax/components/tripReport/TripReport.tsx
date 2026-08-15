"use client";

import {
    FileText,
    Loader2,
    Radio,
} from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/redux/hook";

import { ITripReport } from "../../triptrax.interface";
import { defaultTripReport } from "./data/tripReport.data";
import { ExpeditionLodging } from "./ExpeditionLodging";
import { FilesAssets } from "./FilesAssets";
import { GearOptimization } from "./GearOptimization";
import { IntelBriefing } from "./IntelBriefing";
import { MissionSidebar } from "./MissionSidebar";
import { OverviewMetrics } from "./OverviewMetrics";
import { RouteNavigation } from "./RouteNavigation";
import { SafetyProtocols } from "./SafetyProtocols";
import { Sustainment } from "./Sustainment";
import { WeatherIntelligence } from "./WeatherIntelligence";
import { handlePdfExport } from "@/lib/handlePdfExport";

interface TripHeaderProps {
    trip: ITripReport;
    isDownloading: boolean;
    onDownload: () => Promise<void>;
}


//ToDo : Need to work on pdf download feature

const TripHeader = ({
    trip,
    isDownloading,
    onDownload,
}: TripHeaderProps) => {
    return (
        <header className="border-b border-border pb-7">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div>
                    <h1 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                        {trip.title}
                    </h1>

                    <p className="mt-2 text-sm text-muted-foreground sm:text-base">
                        {trip.subtitle}
                    </p>
                </div>

                <div className="flex flex-col items-start gap-2 sm:items-end">
                    <Button data-pdf-hide type="button" variant="primary" disabled={isDownloading} onClick={onDownload} className="bg-amber-400 text-black hover:bg-amber-300">
                        {isDownloading ? (
                            <>
                                Generating PDF
                                <Loader2 className="ml-2 h-4 w-4 animate-spin" />
                            </>
                        ) : (
                            <>
                                Download PDF
                                <FileText className="ml-2 h-4 w-4" />
                            </>
                        )}
                    </Button>

                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Radio className="h-3 w-3" />
                        ID: {trip.id}
                    </span>
                </div>
            </div>
        </header>
    );
};

const TripReport = () => {
    const [isDownloading, setIsDownloading] = useState(false);

    const tripReport = useAppSelector(
        (state) => state.triptrax.tripReport,
    );

    const trip = tripReport ?? defaultTripReport;

    const handleDownloadPDF = async () => {
        try {
            setIsDownloading(true);

            await handlePdfExport({
                elementId: "reportDownload",
                fileName: trip.title,
                width: 1280,
                scale: 2,
            });
        } catch (error) {
            console.error(
                "Failed to generate trip report PDF:",
                error,
            );
        } finally {
            setIsDownloading(false);
        }
    };

    return (
        <div id="reportDownload" className="min-h-screen bg-background text-foreground">
            <div className="mx-auto w-full">
                {/* Header */}
                <div data-pdf-block>
                    <TripHeader trip={trip} isDownloading={isDownloading} onDownload={handleDownloadPDF} />
                </div>

                {/* Main Report */}
                <div className="mt-5 grid gap-5 xl:grid-cols-[minmax(0,2fr)_minmax(300px,0.9fr)]">
                    {/* Left Column */}
                    <div className="min-w-0 space-y-6">
                        <div data-pdf-block>
                            <OverviewMetrics trip={trip} />
                        </div>

                        <div data-pdf-block>
                            <IntelBriefing trip={trip} />
                        </div>

                        <div data-pdf-block>
                            <WeatherIntelligence trip={trip} />
                        </div>
                        <div data-pdf-block>
                            <RouteNavigation trip={trip} />
                        </div>
                    </div>

                    {/* Right Column */}
                    <aside className="xl:row-span-1">
                        <MissionSidebar trip={trip} />
                    </aside>
                </div>

                {/* Bottom Sections */}
                <div className="mt-7 space-y-7">
                    <div data-pdf-block>
                        <SafetyProtocols trip={trip} />
                    </div>

                    <div data-pdf-block>
                        <GearOptimization trip={trip} />
                    </div>

                    <div data-pdf-block>
                        <ExpeditionLodging trip={trip} />
                    </div>



                    <div data-pdf-block>
                        <Sustainment trip={trip} />
                    </div>

                    <div data-pdf-block>
                        <FilesAssets trip={trip} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TripReport;