import { FileText, ImageIcon, LayoutGrid, Video } from "lucide-react";
import { IPartnerResource } from "../resource.interface";

export const partnerResources: IPartnerResource[] = [
    {
        id: 1,
        title: "Brand Assets Pack v2.0",
        description:
            "Latest high-resolution logos, icons, and color guides for the Winter 2024 season.",
        category: "Assets",
        actionLabel: "Download Assets",
        icon: <ImageIcon className="h-5 w-5" />,
    },
    {
        id: 2,
        title: "Elite Partner Training",
        description:
            "Exclusive video tutorial on maximizing conversion for technical gear reviews.",
        category: "Training",
        actionLabel: "Watch Module",
        icon: <Video className="h-5 w-5" />,
    },
    {
        id: 3,
        title: "Campaign Brief: Everest '24",
        description:
            "Guidelines, required hashtags, and messaging for the upcoming expedition.",
        category: "Assets",
        actionLabel: "Download PDF",
        icon: <FileText className="h-5 w-5" />,
    },
    {
        id: 4,
        title: "Story Templates Kit",
        description:
            "Custom-designed Instagram story frames and overlays for gear unboxing.",
        category: "Templates",
        actionLabel: "Get Templates",
        icon: <LayoutGrid className="h-5 w-5" />,
    },
];