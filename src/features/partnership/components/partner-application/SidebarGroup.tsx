import { CheckCircle2 } from "lucide-react";
import { ReactNode } from "react";

type SidebarGroupProps = {
    icon: ReactNode;
    title: string;
    items: string[];
};

export function SidebarGroup({
    icon,
    title,
    items,
}: SidebarGroupProps) {
    return (
        <div>
            <div className="flex items-center gap-2">
                {icon}

                <h2 className="text-lg font-semibold">
                    {title}
                </h2>
            </div>

            <ul className="mt-4 space-y-4">
                {items.map(item => (
                    <li
                        key={item}
                        className="
                            flex items-start
                            gap-2.5 text-sm
                            leading-5
                            text-white/80
                        "
                    >
                        <CheckCircle2
                            className="
                                mt-0.5 size-4
                                shrink-0
                                fill-[#ffd23f]
                                text-[#ffd23f]
                            "
                        />

                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}