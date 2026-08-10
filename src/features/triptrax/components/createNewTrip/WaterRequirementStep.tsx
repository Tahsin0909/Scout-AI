import {
    Droplets,
    TriangleAlert,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TripStepProps, WaterRequirement } from "../../triptrax.interface";



const WaterRequirementStep = ({ state, dispatch }: TripStepProps) => {
    const options: {
        value: WaterRequirement;
        label: string;
    }[] = [
            {
                value: "less-than-1",
                label: "Less Than 1 Liter",
            },
            {
                value: "1-2",
                label: "1 - 2 Liters",
            },
            {
                value: "3-5",
                label: "3 - 5 Liters",
            },
            {
                value: "over-5",
                label: "Over 5 Liters",
            },
            {
                value: "not-sure",
                label: "Not Sure",
            },
        ];

    return (
        <div className="space-y-7">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">
                    Safety & Risk Tolerance
                </h1>

                <p className="mt-2 text-sm text-muted-foreground">
                    Help Scout understand your expected resource requirements.
                </p>
            </div>

            <Card>
                <CardContent className="p-5">
                    <h2 className="border-b border-border pb-4 font-semibold">
                        1. Water Carrying Capacity
                    </h2>

                    <div className="mt-5 space-y-3">
                        {options.map((option) => (
                            <button key={option.value} type="button" onClick={() => dispatch({ type: "UPDATE_WATER", payload: { requirement: option.value } })} className={`flex w-full items-center justify-between rounded-md border px-4 py-3 text-left text-sm ${state.water.requirement === option.value ? "border-amber-500 bg-amber-500/20 text-amber-400" : "border-border bg-background text-muted-foreground"}`}>
                                <span className="flex items-center gap-2">
                                    <Droplets className="h-4 w-4" />
                                    {option.label}
                                </span>

                                <span>○</span>
                            </button>
                        ))}
                    </div>

                    <div className="mt-5 flex gap-2 text-xs text-muted-foreground">
                        <TriangleAlert className="h-4 w-4 shrink-0" />

                        <span>
                            Scout AI Note: Scout AI recommends approximately 1 liter per 5
                            miles of trail. Recommendations increase in hot conditions.
                        </span>
                    </div>
                </CardContent>
            </Card>

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

export default WaterRequirementStep;