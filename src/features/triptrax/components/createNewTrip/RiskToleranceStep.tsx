import {
    Shield,
    TriangleAlert,
    Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RiskLevel, TripStepProps } from "../../triptrax.interface";


const RiskToleranceStep = ({ state, dispatch }: TripStepProps) => {
    const riskOptions: {
        value: RiskLevel;
        icon: typeof Shield;
    }[] = [
            {
                value: "low",
                icon: Shield,
            },
            {
                value: "medium",
                icon: TriangleAlert,
            },
            {
                value: "high",
                icon: Zap,
            },
        ];

    return (
        <div className="space-y-7">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">
                    Safety & Risk Tolerance
                </h1>

                <p className="mt-2 text-sm text-muted-foreground">
                    Define your personal risk comfort to help Scout create safer and more
                    appropriate routes.
                </p>
            </div>

            <Card>
                <CardContent className="p-5">
                    <h2 className="border-b border-border pb-4 font-semibold">
                        1. Comfort With Exposure
                    </h2>

                    <div className="mt-5 space-y-3">
                        {riskOptions.map((option) => {
                            const Icon = option.icon;

                            return (
                                <button key={option.value} type="button" onClick={() => dispatch({ type: "UPDATE_RISK", payload: { exposure: option.value } })} className={`flex w-full items-center justify-between rounded-lg border px-4 py-3 text-sm capitalize ${state.risk.exposure === option.value ? "border-amber-500 bg-amber-500/20 text-amber-400" : "border-border bg-background text-muted-foreground"}`}>
                                    <span className="flex items-center gap-2">
                                        <Icon className="h-4 w-4" />
                                        {option.value}
                                    </span>

                                    <span>○</span>
                                </button>
                            );
                        })}
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardContent className="p-5">
                    <h2 className="border-b border-border pb-4 font-semibold">
                        2. Comfort With Remoteness
                    </h2>

                    <div className="mt-5 space-y-3">
                        {riskOptions.map((option) => {
                            const Icon = option.icon;

                            return (
                                <button key={option.value} type="button" onClick={() => dispatch({ type: "UPDATE_RISK", payload: { remoteness: option.value } })} className={`flex w-full items-center justify-between rounded-lg border px-4 py-3 text-sm capitalize ${state.risk.remoteness === option.value ? "border-amber-500 bg-amber-500/20 text-amber-400" : "border-border bg-background text-muted-foreground"}`}>
                                    <span className="flex items-center gap-2">
                                        <Icon className="h-4 w-4" />
                                        {option.value}
                                    </span>

                                    <span>○</span>
                                </button>
                            );
                        })}
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

export default RiskToleranceStep;