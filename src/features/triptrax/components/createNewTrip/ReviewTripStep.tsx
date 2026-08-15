import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TripStepProps } from "../../triptrax.interface";
import UserMonthlyUsage from "@/features/scoutai/components/UserMonthlyUsage";


const ReviewTripStep = ({ state, dispatch }: TripStepProps) => {
    return (
        <div className="space-y-7">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">
                    Review Your Trip Package
                </h1>

                <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
                    Review your trip details before submitting your request. Once
                    submitted, our team will review your package before planning begins.
                </p>
            </div>

            <Card>
                <CardContent className="p-5">
                    <h2 className="mb-5 font-semibold">Trip Summary</h2>

                    <div className="grid gap-6 sm:grid-cols-2">
                        <div>
                            <p className="text-xs text-muted-foreground">Adventure Type</p>
                            <p className="mt-1 text-sm font-medium capitalize">
                                {state.adventureMode}
                            </p>
                        </div>

                        <div>
                            <p className="text-xs text-muted-foreground">Destination</p>
                            <p className="mt-1 text-sm font-medium">
                                {state.trip.endLocation || state.trip.region || "Not provided"}
                            </p>
                        </div>

                        <div>
                            <p className="text-xs text-muted-foreground">Trip Name</p>
                            <p className="mt-1 text-sm font-medium">
                                {state.trip.name || "Untitled Trip"}
                            </p>
                        </div>

                        <div>
                            <p className="text-xs text-muted-foreground">Dates</p>
                            <p className="mt-1 text-sm font-medium">
                                {state.trip.startDate || "Not selected"} -{" "}
                                {state.trip.endDate || "Not selected"}
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <div className="grid gap-4 md:grid-cols-2">
                <Card>
                    <CardContent className="p-5">
                        <h2 className="mb-5 font-semibold">Group Information</h2>

                        <div className="space-y-4 text-sm">
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Group</span>
                                <span>
                                    {state.group.adults + state.group.children} Travelers
                                </span>
                            </div>

                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Experience</span>
                                <span className="capitalize">
                                    {state.group.experienceLevel}
                                </span>
                            </div>

                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Fitness Level</span>
                                <span className="capitalize">{state.group.fitnessLevel}</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="p-5">
                        <h2 className="mb-5 font-semibold">Risk & Safety</h2>

                        <div className="space-y-4 text-sm">
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Satellite Comm</span>
                                <span>Required</span>
                            </div>

                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Exposure</span>
                                <span className="capitalize">{state.risk.exposure}</span>
                            </div>

                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Remoteness</span>
                                <span className="capitalize">{state.risk.remoteness}</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <UserMonthlyUsage />

                <Card>
                    <CardContent className="p-5">
                        <h2 className="mb-3 font-semibold">Final Review</h2>

                        <p className="text-xs leading-5 text-muted-foreground">
                            Your request will be reviewed by an expedition expert to ensure
                            your itinerary meets safety standards.
                        </p>

                        <Button variant="primary" onClick={() => dispatch({ type: "SUBMIT_TRIP" })} className="mt-5 w-full">
                            Submit Trip Request
                        </Button>
                    </CardContent>
                </Card>
            </div>

            <Button variant="outline" onClick={() => dispatch({ type: "PREVIOUS_STEP" })}>
                Back
            </Button>
        </div>
    );
};

export default ReviewTripStep;