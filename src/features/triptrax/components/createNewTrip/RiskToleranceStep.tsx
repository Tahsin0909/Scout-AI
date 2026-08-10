import { FormEvent } from "react";
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
        label: string;
        icon: typeof Shield;
    }[] = [
            {
                value: "low",
                label: "Low",
                icon: Shield,
            },
            {
                value: "medium",
                label: "Medium",
                icon: TriangleAlert,
            },
            {
                value: "high",
                label: "High",
                icon: Zap,
            },
        ];

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        dispatch({ type: "NEXT_STEP" });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-7">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">
                    Safety & Risk Tolerance
                </h1>

                <p className="mt-2 text-sm text-muted-foreground">
                    Define your personal risk comfort to help Scout create safer and more
                    appropriate routes.
                </p>
            </div>

            {/* Comfort With Exposure */}
            <Card>
                <CardContent className="p-5">
                    <h2 className="border-b border-border pb-4 font-semibold">
                        1. Comfort With Exposure{" "}
                        <span className="text-destructive">*</span>
                    </h2>

                    <div className="mt-5 space-y-3">
                        {riskOptions.map((option) => {
                            const Icon = option.icon;
                            const isSelected = state.risk.exposure === option.value;

                            return (
                                <label key={option.value} className={`flex w-full cursor-pointer items-center justify-between rounded-lg border px-4 py-3 text-sm transition-colors ${isSelected ? "border-amber-500 bg-amber-500/20 text-amber-400" : "border-border bg-background text-muted-foreground hover:bg-muted/40"}`}>
                                    <span className="flex items-center gap-2">
                                        <Icon className="h-4 w-4" />
                                        {option.label}
                                    </span>

                                    <input type="radio" name="exposure" value={option.value} required checked={isSelected} onChange={() => dispatch({ type: "UPDATE_RISK", payload: { exposure: option.value } })} className="h-4 w-4 cursor-pointer accent-amber-400" />
                                </label>
                            );
                        })}
                    </div>
                </CardContent>
            </Card>

            {/* Comfort With Remoteness */}
            <Card>
                <CardContent className="p-5">
                    <h2 className="border-b border-border pb-4 font-semibold">
                        2. Comfort With Remoteness{" "}
                        <span className="text-destructive">*</span>
                    </h2>

                    <div className="mt-5 space-y-3">
                        {riskOptions.map((option) => {
                            const Icon = option.icon;
                            const isSelected = state.risk.remoteness === option.value;

                            return (
                                <label key={option.value} className={`flex w-full cursor-pointer items-center justify-between rounded-lg border px-4 py-3 text-sm transition-colors ${isSelected ? "border-amber-500 bg-amber-500/20 text-amber-400" : "border-border bg-background text-muted-foreground hover:bg-muted/40"}`}>
                                    <span className="flex items-center gap-2">
                                        <Icon className="h-4 w-4" />
                                        {option.label}
                                    </span>

                                    <input type="radio" name="remoteness" value={option.value} required checked={isSelected} onChange={() => dispatch({ type: "UPDATE_RISK", payload: { remoteness: option.value } })} className="h-4 w-4 cursor-pointer accent-amber-400" />
                                </label>
                            );
                        })}
                    </div>
                </CardContent>
            </Card>

            {/* Navigation */}
            <div className="flex justify-between">
                <Button type="button" variant="outline" onClick={() => dispatch({ type: "PREVIOUS_STEP" })}>
                    Back
                </Button>

                <Button type="submit" variant="primary">
                    Continue
                </Button>
            </div>
        </form>
    );
};

export default RiskToleranceStep;