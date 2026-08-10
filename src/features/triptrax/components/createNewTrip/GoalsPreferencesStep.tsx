import { FormEvent } from "react";
import {
    CircleAlert,
    ShieldCheck,
    Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TripStepProps } from "../../triptrax.interface";

const GoalsPreferencesStep = ({ state, dispatch }: TripStepProps) => {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        dispatch({ type: "NEXT_STEP" });
    };

    const toggleTrailStyle = (style: string) => {
        const exists = state.preferences.trailStyles.includes(style);

        dispatch({
            type: "UPDATE_PREFERENCES",
            payload: {
                trailStyles: exists
                    ? state.preferences.trailStyles.filter((item) => item !== style)
                    : [...state.preferences.trailStyles, style],
            },
        });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">
                    Goals & Preferences
                </h1>

                <p className="mt-2 text-sm text-muted-foreground">
                    Define your hiking goals and preferences so Scout can create a route
                    that best matches your experience and expectations.
                </p>
            </div>

            {/* Type of Hike */}
            <Card>
                <CardContent className="p-5">
                    <h2 className="border-b border-border pb-4 font-semibold">
                        1. Type of Hike <span className="text-destructive">*</span>
                    </h2>

                    <div className="mt-5 space-y-3">
                        {/* Day Hike */}
                        <label className={`flex cursor-pointer items-center justify-between rounded-lg border px-4 py-3 text-sm transition-colors ${state.preferences.tripType === "day-hike" ? "border-amber-500 bg-amber-500/20 text-amber-400" : "border-border bg-background text-muted-foreground hover:bg-muted/40"}`}>
                            <span>Day Hike</span>

                            <input type="radio" name="tripType" value="day-hike" required checked={state.preferences.tripType === "day-hike"} onChange={() => dispatch({ type: "UPDATE_PREFERENCES", payload: { tripType: "day-hike", multiDayStyle: "" } })} className="h-4 w-4 accent-amber-400" />
                        </label>

                        {/* Overnight */}
                        <label className={`flex cursor-pointer items-center justify-between rounded-lg border px-4 py-3 text-sm transition-colors ${state.preferences.tripType === "overnight" ? "border-amber-500 bg-amber-500/20 text-amber-400" : "border-border bg-background text-muted-foreground hover:bg-muted/40"}`}>
                            <span>Overnight</span>

                            <input type="radio" name="tripType" value="overnight" required checked={state.preferences.tripType === "overnight"} onChange={() => dispatch({ type: "UPDATE_PREFERENCES", payload: { tripType: "overnight", multiDayStyle: "" } })} className="h-4 w-4 accent-amber-400" />
                        </label>

                        {/* Multi-Day */}
                        <div className={`overflow-hidden rounded-lg border transition-colors ${state.preferences.tripType === "multi-day" ? "border-border bg-background" : "border-border bg-background"}`}>
                            <label className={`flex cursor-pointer items-center justify-between px-4 py-3 text-sm transition-colors ${state.preferences.tripType === "multi-day" ? "text-foreground" : "text-muted-foreground hover:bg-muted/40"}`}>
                                <span>Multi-Day</span>

                                <input type="radio" name="tripType" value="multi-day" required checked={state.preferences.tripType === "multi-day"} onChange={() => dispatch({ type: "UPDATE_PREFERENCES", payload: { tripType: "multi-day" } })} className="h-4 w-4 accent-amber-400" />
                            </label>

                            {state.preferences.tripType === "multi-day" && (
                                <div className="space-y-3 border-t border-border p-3">
                                    <label className={`flex cursor-pointer items-center gap-3 rounded-lg px-4 py-3 text-sm transition-colors ${state.preferences.multiDayStyle === "loop" ? "bg-amber-500/10 text-amber-400" : "bg-muted/40 text-muted-foreground hover:bg-muted/60"}`}>
                                        <input type="radio" name="multiDayStyle" value="loop" required checked={state.preferences.multiDayStyle === "loop"} onChange={() => dispatch({ type: "UPDATE_PREFERENCES", payload: { multiDayStyle: "loop" } })} className="h-4 w-4 accent-amber-400" />

                                        <span>Loop</span>
                                    </label>

                                    <label className={`flex cursor-pointer items-center gap-3 rounded-lg px-4 py-3 text-sm transition-colors ${state.preferences.multiDayStyle === "out-and-back" ? "bg-amber-500/10 text-amber-400" : "bg-muted/40 text-muted-foreground hover:bg-muted/60"}`}>
                                        <input type="radio" name="multiDayStyle" value="out-and-back" required checked={state.preferences.multiDayStyle === "out-and-back"} onChange={() => dispatch({ type: "UPDATE_PREFERENCES", payload: { multiDayStyle: "out-and-back" } })} className="h-4 w-4 accent-amber-400" />

                                        <span>Out-and-Back</span>
                                    </label>

                                    <label className={`flex cursor-pointer items-center gap-3 rounded-lg px-4 py-3 text-sm transition-colors ${state.preferences.multiDayStyle === "point-to-point" ? "bg-amber-500/10 text-amber-400" : "bg-muted/40 text-muted-foreground hover:bg-muted/60"}`}>
                                        <input type="radio" name="multiDayStyle" value="point-to-point" required checked={state.preferences.multiDayStyle === "point-to-point"} onChange={() => dispatch({ type: "UPDATE_PREFERENCES", payload: { multiDayStyle: "point-to-point" } })} className="h-4 w-4 accent-amber-400" />

                                        <span>Point-to-Point</span>
                                    </label>
                                </div>
                            )}
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Maximum Daily Mileage */}
            <Card>
                <CardContent className="p-5">
                    <h2 className="border-b border-border pb-4 font-semibold">
                        2. Maximum Daily Mileage <span className="text-destructive">*</span>
                    </h2>

                    <div className="mt-5 grid gap-4 sm:grid-cols-3">
                        {[
                            ["5", "≤ 5 Miles"],
                            ["5-7", "5 - 7 Miles"],
                            ["7-10", "7 - 10 Miles"],
                            ["10-20", "10 - 20 Miles"],
                            ["no-limit", "No Limit"],
                        ].map(([value, label]) => (
                            <label key={value} className="flex cursor-pointer items-center gap-2 text-sm text-muted-foreground">
                                <input type="radio" name="maximumDailyMileage" required checked={state.preferences.maximumDailyMileage === value} onChange={() => dispatch({ type: "UPDATE_PREFERENCES", payload: { maximumDailyMileage: value } })} className="h-4 w-4 accent-amber-400" />

                                {label}
                            </label>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* Maximum Elevation Gain */}
            <Card>
                <CardContent className="p-5">
                    <h2 className="border-b border-border pb-4 font-semibold">
                        3. Maximum Elevation Gain <span className="text-destructive">*</span>
                    </h2>

                    <div className="mt-5 grid gap-4 sm:grid-cols-3">
                        {[
                            ["negative-500", "Negative to 500 Feet"],
                            ["500-1500", "500 Feet - 1,500 Feet"],
                            ["1500-3000", "1,500 Feet - 3,000 Feet"],
                            ["3000-5000", "3,000 Feet - 5,000 Feet"],
                            ["no-limit", "No Limit"],
                        ].map(([value, label]) => (
                            <label key={value} className="flex cursor-pointer items-center gap-2 text-sm text-muted-foreground">
                                <input type="radio" name="maximumElevationGain" required checked={state.preferences.maximumElevationGain === value} onChange={() => dispatch({ type: "UPDATE_PREFERENCES", payload: { maximumElevationGain: value } })} className="h-4 w-4 accent-amber-400" />

                                {label}
                            </label>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* Trail Style */}
            <Card>
                <CardContent className="p-5">
                    <h2 className="border-b border-border pb-4 font-semibold">
                        4. Trail Style <span className="text-destructive">*</span>
                    </h2>

                    <p className="mt-3 text-xs text-muted-foreground">
                        Select at least one preferred trail style.
                    </p>

                    <div className="mt-5 grid gap-4 md:grid-cols-3">
                        {["Conventional", "Technical", "Blueway"].map((title) => (
                            <div key={title} className="rounded-lg border border-border bg-muted/20 p-4">
                                <h3 className="mb-4 text-sm font-medium">
                                    {title}
                                </h3>

                                <div className="space-y-3">
                                    {["Loop", "Out-and-Back", "Point-to-Point"].map((style) => {
                                        const value = `${title.toLowerCase()}-${style.toLowerCase()}`;
                                        const isChecked = state.preferences.trailStyles.includes(value);

                                        return (
                                            <label key={style} className="flex cursor-pointer items-center gap-2 text-xs text-muted-foreground">
                                                <input type="checkbox" required={state.preferences.trailStyles.length === 0} checked={isChecked} onChange={() => toggleTrailStyle(value)} className="h-4 w-4 rounded accent-amber-400" />

                                                {style}
                                            </label>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* Preferred Difficulty */}
            <Card>
                <CardContent className="p-5">
                    <h2 className="border-b border-border pb-4 font-semibold">
                        5. Preferred Difficulty <span className="text-destructive">*</span>
                    </h2>

                    <div className="mt-5 space-y-3">
                        {/* Easy */}
                        <label className={`flex cursor-pointer items-center justify-between rounded-lg border px-4 py-3 transition-colors ${state.preferences.preferredDifficulty === "easy" ? "border-amber-500 bg-amber-500/20 text-amber-400" : "border-border bg-background text-muted-foreground hover:bg-muted/40"}`}>
                            <span className="flex items-center gap-2 text-sm">
                                <ShieldCheck className="h-4 w-4" />
                                Easy
                            </span>

                            <input type="radio" name="preferredDifficulty" value="easy" required checked={state.preferences.preferredDifficulty === "easy"} onChange={() => dispatch({ type: "UPDATE_PREFERENCES", payload: { preferredDifficulty: "easy" } })} className="h-4 w-4 accent-amber-400" />
                        </label>

                        {/* Moderate */}
                        <label className={`flex cursor-pointer items-center justify-between rounded-lg border px-4 py-3 transition-colors ${state.preferences.preferredDifficulty === "moderate" ? "border-amber-500 bg-amber-500/20 text-amber-400" : "border-border bg-background text-muted-foreground hover:bg-muted/40"}`}>
                            <span className="flex items-center gap-2 text-sm">
                                <CircleAlert className="h-4 w-4" />
                                Moderate
                            </span>

                            <input type="radio" name="preferredDifficulty" value="moderate" required checked={state.preferences.preferredDifficulty === "moderate"} onChange={() => dispatch({ type: "UPDATE_PREFERENCES", payload: { preferredDifficulty: "moderate" } })} className="h-4 w-4 accent-amber-400" />
                        </label>

                        {/* Difficult */}
                        <label className={`flex cursor-pointer items-center justify-between rounded-lg border px-4 py-3 transition-colors ${state.preferences.preferredDifficulty === "difficult" ? "border-amber-500 bg-amber-500/20 text-amber-400" : "border-border bg-background text-muted-foreground hover:bg-muted/40"}`}>
                            <span className="flex items-center gap-2 text-sm">
                                <Zap className="h-4 w-4" />
                                Difficult
                            </span>

                            <input type="radio" name="preferredDifficulty" value="difficult" required checked={state.preferences.preferredDifficulty === "difficult"} onChange={() => dispatch({ type: "UPDATE_PREFERENCES", payload: { preferredDifficulty: "difficult" } })} className="h-4 w-4 accent-amber-400" />
                        </label>
                    </div>
                </CardContent>
            </Card>

            {/* Preferred Pacing */}
            <Card>
                <CardContent className="p-5">
                    <h2 className="border-b border-border pb-4 font-semibold">
                        6. Preferred Pacing <span className="text-destructive">*</span>
                    </h2>

                    <div className="mt-5 grid gap-4 sm:grid-cols-3">
                        {[
                            ["relaxed", "Relaxed"],
                            ["balanced", "Balanced"],
                            ["aggressive", "Aggressive Safety & Risk Tolerance"],
                        ].map(([value, label]) => (
                            <label key={value} className="flex cursor-pointer items-center gap-2 text-sm text-muted-foreground">
                                <input type="radio" name="preferredPacing" required checked={state.preferences.preferredPacing === value} onChange={() => dispatch({ type: "UPDATE_PREFERENCES", payload: { preferredPacing: value } })} className="h-4 w-4 accent-amber-400" />

                                {label}
                            </label>
                        ))}
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

export default GoalsPreferencesStep;