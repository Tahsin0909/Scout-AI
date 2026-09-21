import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { updateAgreement } from "../../store/partnership.slice";
import { AgreementContent } from "./AgreementContent";
import { CheckboxRow } from "./CheckBoxRow";
import { StepCard } from "./StepCard";

export function FinalAgreementStep() {
    const dispatch = useAppDispatch();

    const agreements = useAppSelector(
        state =>
            state.partnerApplication
                .agreements,
    );

    return (
        <div>
            <StepCard title="Scout Ai Partner Agreement">
                <div
                    className="
                        max-h-[500px]
                        overflow-y-auto
                        rounded-lg
                        bg-black/[0.035]
                        px-4 py-5
                        text-sm
                        leading-6
                        text-muted-foreground
                        dark:bg-black/25
                        sm:px-6
                    "
                >
                    <AgreementContent />
                </div>
            </StepCard>

            <div className="mt-6 space-y-5">
                <CheckboxRow
                    checked={
                        agreements.partnerAgreement
                    }
                    onChange={checked =>
                        dispatch(
                            updateAgreement({
                                field:
                                    "partnerAgreement",
                                value: checked,
                            }),
                        )
                    }
                    title="I have read and agree to the Scout Ai Partner Agreement"
                    description="This includes safety protocols and commission structures."
                />

                <CheckboxRow
                    checked={
                        agreements.platformTerms
                    }
                    onChange={checked =>
                        dispatch(
                            updateAgreement({
                                field:
                                    "platformTerms",
                                value: checked,
                            }),
                        )
                    }
                    title="I accept the Platform Terms and Privacy Policy"
                    description="Governs your use of our digital portal and data handling."
                />

                <CheckboxRow
                    checked={
                        agreements.informationAccuracy
                    }
                    onChange={checked =>
                        dispatch(
                            updateAgreement({
                                field:
                                    "informationAccuracy",
                                value: checked,
                            }),
                        )
                    }
                    title="I confirm all provided information is accurate"
                    description="Intentional misinformation may lead to permanent account deactivation."
                />
            </div>
        </div>
    );
}