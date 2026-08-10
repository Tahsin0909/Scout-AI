import {
    Flag,
    Map,
    MapPin,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TripStepProps } from "../../triptrax.interface";


const TripBasicsStep = ({ state, dispatch }: TripStepProps) => {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Trip Basics</h1>

                <p className="mt-2 text-sm text-muted-foreground">
                    Define the core parameters of your expedition. This data will be used
                    to calibrate your gear requirements and weather alerts.
                </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-2">
                <div className="flex min-h-[420px] items-center justify-center rounded-xl border border-border bg-muted/30">
                    <div className="text-center">
                        <Map className="mx-auto h-12 w-12 text-muted-foreground" />

                        <p className="mt-3 text-sm font-medium">
                            Interactive Map
                        </p>

                        <p className="mt-1 text-xs text-muted-foreground">
                            Replace with Mapbox / Google Maps / Leaflet
                        </p>
                    </div>
                </div>

                <div className="space-y-4">
                    <Card>
                        <CardContent className="p-5">
                            <h2 className="border-b border-border pb-4 text-lg font-semibold">
                                Trip Details
                            </h2>

                            <div className="mt-5 grid gap-4 sm:grid-cols-2">
                                <div>
                                    <label className="mb-2 block text-sm text-muted-foreground">
                                        Trip Name
                                    </label>

                                    <input value={state.trip.name} onChange={(event) => dispatch({ type: "UPDATE_TRIP", payload: { name: event.target.value } })} placeholder="e.g. Glacier Peak High Route" className="h-11 w-full rounded-lg border border-border bg-background px-3 text-sm outline-none transition-colors focus:border-amber-400" />
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm text-muted-foreground">
                                        Region
                                    </label>

                                    <select value={state.trip.region} onChange={(event) => dispatch({ type: "UPDATE_TRIP", payload: { region: event.target.value } })} className="h-11 w-full rounded-lg border border-border bg-background px-3 text-sm outline-none focus:border-amber-400">
                                        <option value="">Select a region...</option>
                                        <option value="yellowstone">Yellowstone</option>
                                        <option value="yosemite">Yosemite</option>
                                        <option value="glacier">Glacier National Park</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm text-muted-foreground">
                                        Start Date
                                    </label>

                                    <input type="date" value={state.trip.startDate} onChange={(event) => dispatch({ type: "UPDATE_TRIP", payload: { startDate: event.target.value } })} className="h-11 w-full rounded-lg border border-border bg-background px-3 text-sm outline-none focus:border-amber-400" />
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm text-muted-foreground">
                                        End Date
                                    </label>

                                    <input type="date" value={state.trip.endDate} onChange={(event) => dispatch({ type: "UPDATE_TRIP", payload: { endDate: event.target.value } })} className="h-11 w-full rounded-lg border border-border bg-background px-3 text-sm outline-none focus:border-amber-400" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-5">
                            <h2 className="border-b border-border pb-4 text-lg font-semibold">
                                Trip Route
                            </h2>

                            <div className="mt-5 grid gap-4 sm:grid-cols-2">
                                <div>
                                    <label className="mb-2 block text-sm text-muted-foreground">
                                        Start Location
                                    </label>

                                    <div className="relative">
                                        <MapPin className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />

                                        <input value={state.trip.startLocation} onChange={(event) => dispatch({ type: "UPDATE_TRIP", payload: { startLocation: event.target.value } })} placeholder="Enter location..." className="h-11 w-full rounded-lg border border-border bg-background pl-10 pr-3 text-sm outline-none focus:border-amber-400" />
                                    </div>
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm text-muted-foreground">
                                        End Point
                                    </label>

                                    <div className="relative">
                                        <Flag className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />

                                        <input value={state.trip.endLocation} onChange={(event) => dispatch({ type: "UPDATE_TRIP", payload: { endLocation: event.target.value } })} placeholder="Enter location..." className="h-11 w-full rounded-lg border border-border bg-background pl-10 pr-3 text-sm outline-none focus:border-amber-400" />
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <div className="flex justify-between">
                <Button variant="outline" onClick={() => dispatch({ type: "PREVIOUS_STEP" })}>
                    Back
                </Button>

                <Button variant="primary" onClick={() => dispatch({ type: "NEXT_STEP" })}>
                    Continue
                </Button>
            </div>
        </div>
    );
};

export default TripBasicsStep;