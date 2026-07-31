import { Award, Medal } from "lucide-react";
import { SidebarGroup } from "./SidebarGroup";
import Image from "next/image";

export function PartnerBenefitsSidebar() {
    return (
        <aside
            className="
                overflow-hidden
                rounded-xl border
                border-white/10
                bg-[#222325]
                text-white
                shadow-[0_28px_60px_-30px_rgba(0,0,0,0.85)]
                lg:sticky lg:top-6
            "
        >
            <div className="relative h-[170px]">
                <Image
                    src="/howItWorksSection.jpg"
                    alt="Mountain expedition"
                    fill
                    priority
                    sizes="340px"
                    className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#222325] via-transparent to-black/15" />

                <span
                    className="
                        absolute bottom-4 left-5
                        rounded-full
                        bg-[#006845]
                        px-4 py-2
                        text-xs
                        font-medium
                        uppercase
                    "
                >
                    Premium Partner
                </span>
            </div>

            <div className="space-y-8 p-6">
                <SidebarGroup
                    icon={
                        <Award className="size-5" />
                    }
                    title="Program Benefits"
                    items={[
                        "Access to high-end global expedition leads",
                        "Professional marketing kit & branding",
                        "Lowered transaction fees on luxury trips",
                    ]}
                />

                <SidebarGroup
                    icon={
                        <Medal className="size-5" />
                    }
                    title="Creator Success Tip"
                    items={[
                        "Link your most active platform first.",
                        "Verification increases approval speed by 40%.",
                        "Video platforms (TikTok/YouTube) are prioritized.",
                    ]}
                />
            </div>
        </aside>
    );
}