/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    Bot,
    CalendarDays,
    MapPin,
    Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TripStepProps } from "../../triptrax.interface";
import UnderConstruction from "@/components/others-state/underConstruction";



// const ScoutAiStep = ({ state, dispatch }: TripStepProps) => {
//     return (
//         <div className="space-y-5">
//             <Card className="overflow-hidden">
//                 <div className="flex items-center justify-between border-b border-border p-5">
//                     <div className="flex items-center gap-3">
//                         <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-foreground text-background">
//                             <Bot className="h-6 w-6" />

//                             <span className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full border-2 border-card bg-amber-400" />
//                         </div>

//                         <div>
//                             <h2 className="font-semibold">Scout AI</h2>

//                             <p className="text-xs text-muted-foreground">
//                                 Status: Online — Adventure Planning Assistant
//                             </p>
//                         </div>
//                     </div>

//                     <p className="hidden text-right text-xs italic text-muted-foreground md:block">
//                         Answer Scout&apos;s questions to sharpen your dossier.
//                     </p>
//                 </div>

//                 <div className="space-y-5 p-5">
//                     <div className="max-w-xl rounded-lg bg-muted p-4 text-sm leading-6">
//                         Hey! I&apos;m Scout. I&apos;ve reviewed your intake and I&apos;m
//                         ready to start shaping your dossier.
//                         <br />
//                         <br />
//                         A few quick questions to dial it in — what&apos;s your experience
//                         level with the terrain you&apos;re heading into?
//                     </div>

//                     <div className="max-w-xl overflow-hidden rounded-lg border border-border">
//                         <div className="flex items-center justify-between border-b border-border bg-muted/40 px-4 py-3">
//                             <span className="flex items-center gap-2 text-sm font-medium">
//                                 <Sparkles className="h-4 w-4" />
//                                 Terrain Engine Sync
//                             </span>

//                             <span className="rounded-md border border-border px-2 py-1 text-[10px]">
//                                 Confirmed
//                             </span>
//                         </div>

//                         <div className="grid grid-cols-2 gap-px bg-border">
//                             <div className="bg-card p-4">
//                                 <p className="text-xs text-muted-foreground">Activity</p>
//                                 <p className="mt-1 text-sm capitalize">
//                                     {state.adventureMode}
//                                 </p>
//                             </div>

//                             <div className="bg-card p-4">
//                                 <p className="text-xs text-muted-foreground">Type</p>
//                                 <p className="mt-1 text-sm">Ground Camping & Walking</p>
//                             </div>

//                             <div className="bg-card p-4">
//                                 <p className="flex items-center gap-1 text-xs text-muted-foreground">
//                                     <MapPin className="h-3 w-3" />
//                                     Destination
//                                 </p>

//                                 <p className="mt-1 text-sm">
//                                     {state.trip.endLocation || "Not selected"}
//                                 </p>
//                             </div>

//                             <div className="bg-card p-4">
//                                 <p className="flex items-center gap-1 text-xs text-muted-foreground">
//                                     <CalendarDays className="h-3 w-3" />
//                                     Timeline
//                                 </p>

//                                 <p className="mt-1 text-sm">
//                                     {state.trip.startDate || "Start"} →{" "}
//                                     {state.trip.endDate || "End"}
//                                 </p>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="max-w-xl rounded-lg bg-muted p-4 text-sm leading-6">
//                         Got it. Will you be camping each night, doing day hikes from a
//                         basecamp, or a mix? That changes how I structure your gear and
//                         logistics sections.
//                     </div>

//                     <div className="ml-auto max-w-xs rounded-lg bg-black px-4 py-3 text-sm text-white">
//                         Ok, help me plan the safest option.
//                     </div>

//                     <div className="flex items-center rounded-full border border-border bg-background p-2">
//                         <input placeholder="What would you like to plan today?" className="h-10 flex-1 bg-transparent px-3 text-sm outline-none" />

//                         <Button size="icon" className="rounded-full">
//                             <Sparkles className="h-4 w-4" />
//                         </Button>
//                     </div>
//                 </div>
//             </Card>

//             <div className="flex justify-between">
//                 <Button variant="outline" onClick={() => dispatch({ type: "PREVIOUS_STEP" })}>
//                     Back
//                 </Button>

//                 <Button variant="primary" onClick={() => dispatch({ type: "NEXT_STEP" })}>
//                     Continue
//                 </Button>
//             </div>
//         </div>
//     );
// };

// export default ScoutAiStep;
const ScoutAiStep = ({ state, dispatch }: TripStepProps) => {
    return (
        <div>
            <UnderConstruction name="Scout Ai" type="server" />
            <div className="flex justify-between">
                <Button variant="outline" onClick={() => dispatch({ type: "PREVIOUS_STEP" })}>
                    Back
                </Button>

                <Button variant="primary" onClick={() => dispatch({ type: "NEXT_STEP" })}>
                    Continue
                </Button>
            </div>
        </div>
    )
};

export default ScoutAiStep;