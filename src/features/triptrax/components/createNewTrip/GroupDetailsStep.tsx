import { Minus, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TripStepProps } from "../../triptrax.interface";


const GroupDetailsStep = ({ state, dispatch }: TripStepProps) => {
    const toggleMedicalCondition = (condition: string) => {
        const exists = state.group.medicalConditions.includes(condition);

        dispatch({
            type: "UPDATE_GROUP",
            payload: {
                medicalConditions: exists
                    ? state.group.medicalConditions.filter((item) => item !== condition)
                    : [...state.group.medicalConditions, condition],
            },
        });
    };

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Group Details</h1>

                <p className="mt-2 text-sm text-muted-foreground">
                    Define who is joining the expedition. Technical precision in group
                    composition ensures safety and logistical accuracy.
                </p>
            </div>

            <Card>
                <CardContent className="p-5">
                    <h2 className="border-b border-border pb-4 font-semibold">
                        Traveller Information
                    </h2>

                    <div className="mt-5 grid gap-4 sm:grid-cols-2">
                        <input value={state.group.firstName} onChange={(event) => dispatch({ type: "UPDATE_GROUP", payload: { firstName: event.target.value } })} placeholder="First Name" className="h-11 rounded-lg border border-border bg-background px-3 text-sm outline-none focus:border-amber-400" />

                        <input value={state.group.lastName} onChange={(event) => dispatch({ type: "UPDATE_GROUP", payload: { lastName: event.target.value } })} placeholder="Last Name" className="h-11 rounded-lg border border-border bg-background px-3 text-sm outline-none focus:border-amber-400" />

                        <input type="date" value={state.group.dateOfBirth} onChange={(event) => dispatch({ type: "UPDATE_GROUP", payload: { dateOfBirth: event.target.value } })} className="h-11 rounded-lg border border-border bg-background px-3 text-sm outline-none focus:border-amber-400 sm:col-span-2" />
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardContent className="p-5">
                    <h2 className="border-b border-border pb-4 font-semibold">
                        Group Composition
                    </h2>

                    <div className="mt-5 grid gap-5 md:grid-cols-[1fr_1fr_180px]">
                        <div>
                            <p className="mb-2 text-sm font-medium">Adults</p>

                            <div className="flex items-center gap-3">
                                <Button variant="outline" size="icon" onClick={() => dispatch({ type: "UPDATE_GROUP", payload: { adults: Math.max(1, state.group.adults - 1) } })}>
                                    <Minus className="h-4 w-4" />
                                </Button>

                                <span>{state.group.adults} person</span>

                                <Button variant="outline" size="icon" onClick={() => dispatch({ type: "UPDATE_GROUP", payload: { adults: state.group.adults + 1 } })}>
                                    <Plus className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>

                        <div>
                            <p className="mb-2 text-sm font-medium">Children</p>

                            <div className="flex items-center gap-3">
                                <Button variant="outline" size="icon" onClick={() => dispatch({ type: "UPDATE_GROUP", payload: { children: Math.max(0, state.group.children - 1) } })}>
                                    <Minus className="h-4 w-4" />
                                </Button>

                                <span>{state.group.children} person</span>

                                <Button variant="outline" size="icon" onClick={() => dispatch({ type: "UPDATE_GROUP", payload: { children: state.group.children + 1 } })}>
                                    <Plus className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>

                        <div className="flex flex-col items-center justify-center rounded-xl bg-muted/40 p-5">
                            <span className="text-4xl font-semibold">
                                {state.group.adults + state.group.children}
                            </span>

                            <span className="mt-2 text-xs text-muted-foreground">
                                Total Travelers
                            </span>
                        </div>
                    </div>

                    <div className="mt-6 flex items-center justify-between">
                        <span className="text-sm font-medium">Traveling with Pets</span>

                        <button type="button" onClick={() => dispatch({ type: "UPDATE_GROUP", payload: { travelingWithPets: !state.group.travelingWithPets } })} className={`rounded-md px-4 py-2 text-xs font-semibold ${state.group.travelingWithPets ? "bg-amber-400 text-black" : "bg-muted text-muted-foreground"}`}>
                            {state.group.travelingWithPets ? "Yes" : "No"}
                        </button>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardContent className="p-5">
                    <h2 className="font-semibold">Overall Fitness Level</h2>

                    <input type="range" min="1" max="3" value={state.group.fitnessLevel === "low" ? 1 : state.group.fitnessLevel === "moderate" ? 2 : 3} onChange={(event) => dispatch({ type: "UPDATE_GROUP", payload: { fitnessLevel: Number(event.target.value) === 1 ? "low" : Number(event.target.value) === 2 ? "moderate" : "high" } })} className="mt-6 w-full accent-amber-400" />
                </CardContent>
            </Card>

            <Card>
                <CardContent className="p-5">
                    <h2 className="font-semibold">Overall Experience Level</h2>

                    <div className="mt-5 grid gap-3 sm:grid-cols-4">
                        {(["beginner", "intermediate", "advanced", "expert"] as const).map((experience) => (
                            <label key={experience} className="flex cursor-pointer items-center gap-2 text-sm capitalize">
                                <input type="radio" checked={state.group.experienceLevel === experience} onChange={() => dispatch({ type: "UPDATE_GROUP", payload: { experienceLevel: experience } })} className="accent-amber-400" />

                                {experience}
                            </label>
                        ))}
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardContent className="p-5">
                    <h2 className="font-semibold">Medical Considerations</h2>

                    <p className="mt-1 text-xs text-muted-foreground">
                        Select all that apply for group members.
                    </p>

                    <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {[
                            "Asthma",
                            "Heart Conditions",
                            "Diabetes",
                            "Seizure Disorders",
                            "Temperature Sensitivity",
                            "Altitude Sickness",
                            "Limited Mobility",
                            "Recent Injuries",
                            "Pregnancy",
                            "Vision Impairment",
                            "Hearing Impairment",
                            "Anxiety",
                            "Allergies",
                        ].map((condition) => (
                            <label key={condition} className="flex cursor-pointer items-center gap-2 text-sm text-muted-foreground">
                                <input type="checkbox" checked={state.group.medicalConditions.includes(condition)} onChange={() => toggleMedicalCondition(condition)} className="accent-amber-400" />

                                {condition}
                            </label>
                        ))}
                    </div>

                    <textarea value={state.group.otherConditions} onChange={(event) => dispatch({ type: "UPDATE_GROUP", payload: { otherConditions: event.target.value } })} placeholder="Please provide specific details..." className="mt-5 min-h-20 w-full rounded-lg border border-border bg-background p-3 text-sm outline-none focus:border-amber-400" />
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

export default GroupDetailsStep;