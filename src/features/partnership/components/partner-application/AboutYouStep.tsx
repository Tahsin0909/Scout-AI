import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { TextareaCard } from "./TextareaCard";
import { updateAboutField } from "../../store/partnership.slice";

export function AboutYouStep() {
    const dispatch = useAppDispatch();

    const about = useAppSelector(
        state =>
            state.partnerApplication.about,
    );

    return (
        <div className="space-y-5">
            <TextareaCard
                title="Your History"
                description="Tell us about your outdoor content. What makes your perspective unique?"
                placeholder="Share your mission, your favorite terrain, or the technical gear you're passionate about..."
                value={about.history}
                maxLength={300}
                onChange={value =>
                    dispatch(
                        updateAboutField({
                            field: "history",
                            value,
                        }),
                    )
                }
            />

            <TextareaCard
                title="Why do you want to join?"
                description="Tell us about your motivation for partnering with Scout Ai and how you envision our mutual growth in the luxury expedition market."
                placeholder="Describe your passion for professional expeditions..."
                value={about.motivation}
                maxLength={1000}
                onChange={value =>
                    dispatch(
                        updateAboutField({
                            field: "motivation",
                            value,
                        }),
                    )
                }
            />

            <TextareaCard
                title="What makes you a great fit?"
                description="Highlight your unique strengths, certifications, or specialized equipment that set your expedition services apart from the standard."
                placeholder="Details on experience, safety record, and specialized gear..."
                value={about.fit}
                maxLength={1000}
                onChange={value =>
                    dispatch(
                        updateAboutField({
                            field: "fit",
                            value,
                        }),
                    )
                }
            />
        </div>
    );
}