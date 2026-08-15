"use client";

import {
    ComponentType,
    useReducer,
} from "react";

import AdventureModeStep from "./AdventureModeStep";
import GoalsPreferencesStep from "./GoalsPreferencesStep";
import GroupDetailsStep from "./GroupDetailsStep";
import ReviewTripStep from "./ReviewTripStep";
import RiskToleranceStep from "./RiskToleranceStep";
import ScoutAiStep from "./ScoutAiStep";
import TripBasicsStep from "./TripBasicsStep";
import TripSuccessModal from "./TripSuccessModal";
import TripWizardHeader from "./TripWizardHeader";
import WaterRequirementStep from "./WaterRequirementStep";
import { initialTripWizardState, tripWizardReducer } from "../../store/triptrax.slice";
import { TripStepProps } from "../../triptrax.interface";


const stepComponents: Record<number, ComponentType<TripStepProps>> = {
    1: AdventureModeStep,
    2: TripBasicsStep,
    3: GroupDetailsStep,
    4: GoalsPreferencesStep,
    5: RiskToleranceStep,
    6: WaterRequirementStep,
    7: ScoutAiStep,
    8: ReviewTripStep,
};

const TripWizard = () => {
    const [state, dispatch] = useReducer(
        tripWizardReducer,
        initialTripWizardState,
    );

    const CurrentStep = stepComponents[state.step];

    return (
        <>
            <main className="mx-auto min-h-screen w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
                <TripWizardHeader step={state.step} />

                <div className="mt-12">
                    <CurrentStep state={state} dispatch={dispatch} />
                </div>
            </main>

            <TripSuccessModal state={state} dispatch={dispatch} />
        </>
    );
};

export default TripWizard;