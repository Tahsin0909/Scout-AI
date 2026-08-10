import {
    Car,
    Caravan,
    CircleCheck,
    Compass,
    Footprints,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { TripStepProps } from "../../triptrax.interface";


const AdventureModeStep = ({ state, dispatch }: TripStepProps) => {
    const selected = state.adventureMode;

    return (
        <div className="space-y-10">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">
                    Choose Your Adventure Mode
                </h1>

                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                    Select the option that best matches your primary trip goal. If your
                    trip includes additional activities, Scout will ask about those later.
                </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
                <button type="button" onClick={() => dispatch({ type: "SET_ADVENTURE_MODE", payload: "hiking" })} className={`relative rounded-xl border p-6 text-left transition-colors ${selected === "hiking" ? "border-amber-400 bg-accent" : "border-border bg-card hover:bg-accent/40"}`}>
                    <Footprints className="mb-5 h-8 w-8" />

                    {selected === "hiking" && (
                        <CircleCheck className="absolute right-5 top-5 h-5 w-5 text-amber-400" />
                    )}

                    <h3 className="text-lg font-semibold">Hiking</h3>

                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        Technical off-road corridors, recovery-ready routing, dispersed
                        camping, and terrain analysis for when the pavement ends.
                    </p>
                </button>

                <button type="button" onClick={() => dispatch({ type: "SET_ADVENTURE_MODE", payload: "road" })} className={`relative rounded-xl border p-6 text-left transition-colors ${selected === "road" ? "border-amber-400 bg-accent" : "border-border bg-card hover:bg-accent/40"}`}>
                    <Car className="mb-5 h-8 w-8" />

                    {selected === "road" && (
                        <CircleCheck className="absolute right-5 top-5 h-5 w-5 text-amber-400" />
                    )}

                    <h3 className="text-lg font-semibold">Road Trip</h3>

                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        Curated scenic routes focusing on architectural stays and hidden
                        gastronomic landmarks across continents.
                    </p>
                </button>

                <button type="button" onClick={() => dispatch({ type: "SET_ADVENTURE_MODE", payload: "rv" })} className={`relative rounded-xl border p-6 text-left transition-colors ${selected === "rv" ? "border-amber-400 bg-accent" : "border-border bg-card hover:bg-accent/40"}`}>
                    <Caravan className="mb-5 h-8 w-8" />

                    {selected === "rv" && (
                        <CircleCheck className="absolute right-5 top-5 h-5 w-5 text-amber-400" />
                    )}

                    <h3 className="text-lg font-semibold">RV Journey</h3>

                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        Travel with confidence in your home on wheels. Get personalised
                        routes, RV-friendly campgrounds, fuel stops, and overnight parking.
                    </p>
                </button>

                <button type="button" onClick={() => dispatch({ type: "SET_ADVENTURE_MODE", payload: "overland" })} className={`relative rounded-xl border p-6 text-left transition-colors ${selected === "overland" ? "border-amber-400 bg-accent" : "border-border bg-card hover:bg-accent/40"}`}>
                    <Compass className="mb-5 h-8 w-8" />

                    {selected === "overland" && (
                        <CircleCheck className="absolute right-5 top-5 h-5 w-5 text-amber-400" />
                    )}

                    <h3 className="text-lg font-semibold">Overland Expedition</h3>

                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        The pinnacle of planning. Remote wilderness navigation, satellite
                        communication protocols, and emergency medical mapping.
                    </p>
                </button>
            </div>

            <div className="flex justify-between">
                <Button variant="outline" disabled>
                    Back
                </Button>

                <Button variant="primary" onClick={() => dispatch({ type: "NEXT_STEP" })}>
                    Continue
                </Button>
            </div>
        </div>
    );
};

export default AdventureModeStep;