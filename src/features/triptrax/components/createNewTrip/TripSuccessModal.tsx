import {
    CheckCircle2,
} from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { TripWizardAction, TripWizardState } from "../../triptrax.interface";



interface TripSuccessModalProps {
    state: TripWizardState;
    dispatch: React.Dispatch<TripWizardAction>;
}

const TripSuccessModal = ({
    state,
    dispatch,
}: TripSuccessModalProps) => {
    const router = useRouter();

    if (!state.submitted) {
        return null;
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4">
            <div className="w-full max-w-md rounded-xl border border-border bg-card p-6 shadow-2xl">
                <div className="text-center">
                    <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-500" />

                    <h2 className="mt-4 text-2xl font-bold">
                        Trip Request
                        <br />
                        Submitted Successfully
                    </h2>

                    <p className="mt-3 text-sm leading-5 text-muted-foreground">
                        Your request has been received and is now waiting for review by the
                        Scout AI team.
                    </p>
                </div>

                <div className="mt-6">
                    <h3 className="mb-3 text-xs font-semibold">Current Status</h3>

                    <div className="divide-y divide-border rounded-lg bg-muted/40 px-4">
                        <div className="flex justify-between py-3 text-xs">
                            <span className="text-muted-foreground">Adventure Type</span>
                            <span className="capitalize">{state.adventureMode}</span>
                        </div>

                        <div className="flex justify-between py-3 text-xs">
                            <span className="text-muted-foreground">Estimated Time</span>
                            <span>1-3 Business Days</span>
                        </div>

                        <div className="flex justify-between py-3 text-xs">
                            <span className="text-muted-foreground">Queue Position</span>
                            <span>Trailhead Priority</span>
                        </div>

                        <div className="flex justify-between py-3 text-xs">
                            <span className="text-muted-foreground">Submission Health</span>
                            <span>92%</span>
                        </div>
                    </div>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                    <Button variant="outline" onClick={() => {
                        dispatch({ type: "CLOSE_SUCCESS" });
                        router.push("/user");
                    }}>
                        Return to Dashboard
                    </Button>

                    <Button variant="primary" onClick={() => router.push("/travel-trips")}>
                        Go to My Trips
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default TripSuccessModal;