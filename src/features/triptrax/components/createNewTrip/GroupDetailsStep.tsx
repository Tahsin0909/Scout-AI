import { FormEvent } from "react";
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

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        dispatch({ type: "NEXT_STEP" });
    };

    const fitnessValue =
        state.group.fitnessLevel === "low"
            ? 1
            : state.group.fitnessLevel === "moderate"
                ? 2
                : 3;

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">
                    Group Details
                </h1>

                <p className="mt-2 text-sm text-muted-foreground">
                    Define who is joining the expedition. Technical precision in group
                    composition ensures safety and logistical accuracy.
                </p>
            </div>

            {/* Traveller Information */}
            <Card>
                <CardContent className="p-5">
                    <h2 className="border-b border-border pb-4 font-semibold">
                        Traveller Information
                    </h2>

                    <div className="mt-5 grid gap-4 sm:grid-cols-2">
                        {/* First Name */}
                        <div>
                            <label htmlFor="firstName" className="mb-2 block text-sm font-medium text-muted-foreground">
                                First Name <span className="text-destructive">*</span>
                            </label>

                            <input id="firstName" name="firstName" type="text" required value={state.group.firstName} onChange={(event) => dispatch({ type: "UPDATE_GROUP", payload: { firstName: event.target.value } })} placeholder="e.g. Elias" className="h-11 w-full rounded-lg border border-border bg-background px-3 text-sm outline-none transition-colors focus:border-amber-400" />
                        </div>

                        {/* Last Name */}
                        <div>
                            <label htmlFor="lastName" className="mb-2 block text-sm font-medium text-muted-foreground">
                                Last Name <span className="text-destructive">*</span>
                            </label>

                            <input id="lastName" name="lastName" type="text" required value={state.group.lastName} onChange={(event) => dispatch({ type: "UPDATE_GROUP", payload: { lastName: event.target.value } })} placeholder="e.g. Thorne" className="h-11 w-full rounded-lg border border-border bg-background px-3 text-sm outline-none transition-colors focus:border-amber-400" />
                        </div>

                        {/* Date of Birth */}
                        <div className="sm:col-span-2">
                            <label htmlFor="dateOfBirth" className="mb-2 block text-sm font-medium text-muted-foreground">
                                Date of Birth <span className="text-destructive">*</span>
                            </label>

                            <input id="dateOfBirth" name="dateOfBirth" type="date" required value={state.group.dateOfBirth} onChange={(event) => dispatch({ type: "UPDATE_GROUP", payload: { dateOfBirth: event.target.value } })} className="h-11 w-full rounded-lg border border-border bg-background px-3 text-sm outline-none transition-colors focus:border-amber-400" />
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Group Composition */}
            <Card>
                <CardContent className="p-5">
                    <h2 className="border-b border-border pb-4 font-semibold">
                        Group Composition
                    </h2>

                    <div className="mt-5 grid gap-5 md:grid-cols-[1fr_1fr_180px]">
                        {/* Adults */}
                        <div>
                            <p className="mb-2 text-sm font-medium">
                                Adults <span className="text-destructive">*</span>
                            </p>

                            <div className="flex items-center gap-3">
                                <Button type="button" variant="outline" size="icon" className="rounded-full aspect-square" onClick={() => dispatch({ type: "UPDATE_GROUP", payload: { adults: Math.max(1, state.group.adults - 1) } })}>
                                    <Minus className="h-4 w-4" />
                                </Button>

                                <span className="min-w-20 text-center text-sm font-medium">
                                    {state.group.adults} {state.group.adults === 1 ? "person" : "people"}
                                </span>

                                <Button type="button" variant="outline" size="icon" className="rounded-full aspect-square" onClick={() => dispatch({ type: "UPDATE_GROUP", payload: { adults: state.group.adults + 1 } })}>
                                    <Plus className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>

                        {/* Children */}
                        <div>
                            <p className="mb-2 text-sm font-medium">
                                Children
                            </p>

                            <div className="flex items-center gap-3">
                                <Button type="button" variant="outline" size="icon" className="rounded-full aspect-square" onClick={() => dispatch({ type: "UPDATE_GROUP", payload: { children: Math.max(0, state.group.children - 1) } })}>
                                    <Minus className="h-4 w-4" />
                                </Button>

                                <span className="min-w-20 text-center text-sm font-medium">
                                    {state.group.children} {state.group.children === 1 ? "person" : "people"}
                                </span>

                                <Button type="button" variant="outline" size="icon" className="rounded-full aspect-square" onClick={() => dispatch({ type: "UPDATE_GROUP", payload: { children: state.group.children + 1 } })}>
                                    <Plus className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>

                        {/* Total Travelers */}
                        <div className="flex flex-col items-center justify-center rounded-xl border border-border bg-muted/40 p-5">
                            <span className="text-4xl font-semibold">
                                {state.group.adults + state.group.children}
                            </span>

                            <span className="mt-2 text-xs text-muted-foreground">
                                Total Travelers
                            </span>
                        </div>
                    </div>

                    {/* Traveling with Pets */}
                    <div className="mt-6 flex flex-col gap-3 border-t border-border pt-5 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <p className="text-sm font-medium">
                                Traveling with Pets <span className="text-destructive">*</span>
                            </p>

                            <p className="mt-1 text-xs text-muted-foreground">
                                Are any pets joining you on this trip?
                            </p>
                        </div>

                        <div className="flex items-center rounded-lg border border-border bg-muted/30 p-1">
                            <button type="button" onClick={() => dispatch({ type: "UPDATE_GROUP", payload: { travelingWithPets: false } })} className={`rounded-md px-5 py-2 text-xs font-semibold transition-colors ${!state.group.travelingWithPets ? "bg-amber-400 text-black shadow-sm" : "text-muted-foreground hover:text-foreground"}`}>
                                No
                            </button>

                            <button type="button" onClick={() => dispatch({ type: "UPDATE_GROUP", payload: { travelingWithPets: true } })} className={`rounded-md px-5 py-2 text-xs font-semibold transition-colors ${state.group.travelingWithPets ? "bg-amber-400 text-black shadow-sm" : "text-muted-foreground hover:text-foreground"}`}>
                                Yes
                            </button>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Fitness Level */}
            <Card>
                <CardContent className="p-5">
                    <div className="flex items-center justify-between gap-4">
                        <h2 className="font-semibold">
                            Overall Fitness Level <span className="text-destructive">*</span>
                        </h2>

                        <span className="text-sm font-semibold capitalize text-amber-500">
                            {state.group.fitnessLevel}
                        </span>
                    </div>

                    <div className="mt-6">
                        <input type="range" min="1" max="3" step="1" required value={fitnessValue} onChange={(event) => dispatch({ type: "UPDATE_GROUP", payload: { fitnessLevel: Number(event.target.value) === 1 ? "low" : Number(event.target.value) === 2 ? "moderate" : "high" } })} className="w-full cursor-pointer accent-amber-400" />

                        <div className="mt-2 flex items-center justify-between text-xs font-medium text-muted-foreground">
                            <span className={state.group.fitnessLevel === "low" ? "text-amber-500" : ""}>
                                Low
                            </span>

                            <span className={state.group.fitnessLevel === "moderate" ? "text-amber-500" : ""}>
                                Medium
                            </span>

                            <span className={state.group.fitnessLevel === "high" ? "text-amber-500" : ""}>
                                High
                            </span>
                        </div>

                        <p className="mt-3 text-xs leading-5 text-muted-foreground">
                            Scout will help refine this based on group specifics (like carrying infants) later.
                        </p>
                    </div>
                </CardContent>
            </Card>

            {/* Experience Level */}
            <Card>
                <CardContent className="p-5">
                    <h2 className="font-semibold">
                        Overall Experience Level <span className="text-destructive">*</span>
                    </h2>

                    <div className="mt-5 grid gap-3 sm:grid-cols-4">
                        {(["beginner", "intermediate", "advanced", "expert"] as const).map((experience) => (
                            <label key={experience} className="flex cursor-pointer items-center gap-2 text-sm capitalize">
                                <input type="radio" name="experienceLevel" required checked={state.group.experienceLevel === experience} onChange={() => dispatch({ type: "UPDATE_GROUP", payload: { experienceLevel: experience } })} className="h-4 w-4 accent-amber-400" />

                                {experience}
                            </label>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* Medical Considerations */}
            <Card>
                <CardContent className="p-5">
                    <h2 className="font-semibold">
                        Medical Considerations
                    </h2>

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
                                <input type="checkbox" checked={state.group.medicalConditions.includes(condition)} onChange={() => toggleMedicalCondition(condition)} className="h-4 w-4 rounded accent-amber-400" />

                                {condition}
                            </label>
                        ))}
                    </div>

                    {/* Other Conditions */}
                    <div className="mt-6">
                        <label htmlFor="otherConditions" className="mb-2 block text-sm font-medium text-muted-foreground">
                            Other Conditions
                        </label>

                        <textarea id="otherConditions" name="otherConditions" value={state.group.otherConditions} onChange={(event) => dispatch({ type: "UPDATE_GROUP", payload: { otherConditions: event.target.value } })} placeholder="Please provide specific details..." className="min-h-24 w-full resize-none rounded-lg border border-border bg-background p-3 text-sm outline-none transition-colors focus:border-amber-400" />
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

export default GroupDetailsStep;