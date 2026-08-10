import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TripStepProps } from "../../triptrax.interface";


const GoalsPreferencesStep = ({ state, dispatch }: TripStepProps) => {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">
                    Goals & Preferences
                </h1>

                <p className="mt-2 text-sm text-muted-foreground">
                    Define what is joining the expedition. Technical precision ensures
                    safe and accurate route planning.
                </p>
            </div>

            <Card>
                <CardContent className="space-y-3 p-5">
                    <h2 className="font-semibold">1. Type of Hike</h2>

                    {[
                        ["day-hike", "Day Hike"],
                        ["overnight", "Overnight"],
                        ["multi-day", "Multi-Day"],
                    ].map(([value, label]) => (
                        <button key={value} type="button" onClick={() => dispatch({ type: "UPDATE_PREFERENCES", payload: { tripType: value } })} className={`w-full rounded-md border px-4 py-3 text-left text-sm ${state.preferences.tripType === value ? "border-amber-500 bg-amber-500/20 text-amber-400" : "border-border bg-background text-muted-foreground"}`}>
                            {label}
                        </button>
                    ))}
                </CardContent>
            </Card>

            <Card>
                <CardContent className="p-5">
                    <h2 className="mb-4 font-semibold">2. Maximum Daily Mileage</h2>

                    <div className="grid gap-3 sm:grid-cols-3">
                        {["5", "5-7", "7-10", "10-20", "no-limit"].map((value) => (
                            <label key={value} className="flex items-center gap-2 text-sm">
                                <input type="radio" checked={state.preferences.maximumDailyMileage === value} onChange={() => dispatch({ type: "UPDATE_PREFERENCES", payload: { maximumDailyMileage: value } })} className="accent-amber-400" />

                                {value === "5" ? "≤ 5 Miles" : value === "no-limit" ? "No Limit" : `${value} Miles`}
                            </label>
                        ))}
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardContent className="p-5">
                    <h2 className="mb-4 font-semibold">3. Maximum Elevation Gain</h2>

                    <div className="grid gap-3 sm:grid-cols-3">
                        {[
                            ["negative-500", "Negative to 500 Feet"],
                            ["500-1500", "500 Feet - 1,500 Feet"],
                            ["1500-3000", "1,500 Feet - 3,000 Feet"],
                            ["3000-5000", "3,000 Feet - 5,000 Feet"],
                            ["no-limit", "No Limit"],
                        ].map(([value, label]) => (
                            <label key={value} className="flex items-center gap-2 text-sm">
                                <input type="radio" checked={state.preferences.maximumElevationGain === value} onChange={() => dispatch({ type: "UPDATE_PREFERENCES", payload: { maximumElevationGain: value } })} className="accent-amber-400" />

                                {label}
                            </label>
                        ))}
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardContent className="p-5">
                    <h2 className="mb-4 font-semibold">4. Trail Style</h2>

                    <div className="grid gap-4 md:grid-cols-3">
                        {["Conventional", "Technical", "Blueway"].map((title) => (
                            <div key={title} className="rounded-lg bg-muted/30 p-4">
                                <h3 className="mb-3 text-sm font-medium">{title}</h3>

                                {["Loop", "Out-and-Back", "Point-to-Point"].map((style) => (
                                    <label key={style} className="mb-2 flex items-center gap-2 text-xs text-muted-foreground">
                                        <input type="checkbox" checked={state.preferences.trailStyles.includes(style.toLowerCase())} onChange={() => {
                                            const value = style.toLowerCase();
                                            const exists = state.preferences.trailStyles.includes(value);

                                            dispatch({
                                                type: "UPDATE_PREFERENCES",
                                                payload: {
                                                    trailStyles: exists
                                                        ? state.preferences.trailStyles.filter((item) => item !== value)
                                                        : [...state.preferences.trailStyles, value],
                                                },
                                            });
                                        }} className="accent-amber-400" />

                                        {style}
                                    </label>
                                ))}
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardContent className="space-y-3 p-5">
                    <h2 className="font-semibold">5. Preferred Difficulty</h2>

                    {["easy", "moderate", "difficult"].map((difficulty) => (
                        <button key={difficulty} type="button" onClick={() => dispatch({ type: "UPDATE_PREFERENCES", payload: { preferredDifficulty: difficulty } })} className={`w-full rounded-md border px-4 py-3 text-left text-sm capitalize ${state.preferences.preferredDifficulty === difficulty ? "border-amber-500 bg-amber-500/20 text-amber-400" : "border-border bg-background text-muted-foreground"}`}>
                            {difficulty}
                        </button>
                    ))}
                </CardContent>
            </Card>

            <Card>
                <CardContent className="p-5">
                    <h2 className="mb-4 font-semibold">6. Preferred Pacing</h2>

                    <div className="grid gap-3 sm:grid-cols-3">
                        {["relaxed", "balanced", "aggressive"].map((pace) => (
                            <label key={pace} className="flex items-center gap-2 text-sm capitalize">
                                <input type="radio" checked={state.preferences.preferredPacing === pace} onChange={() => dispatch({ type: "UPDATE_PREFERENCES", payload: { preferredPacing: pace } })} className="accent-amber-400" />

                                {pace}
                            </label>
                        ))}
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

export default GoalsPreferencesStep;