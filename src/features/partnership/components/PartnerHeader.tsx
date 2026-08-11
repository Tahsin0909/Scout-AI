/* eslint-disable @next/next/no-img-element */
import { Badge } from "@/components/ui/badge";
import { IPartnerDetails } from "../partnership.interface";

interface PartnerDetailsHeaderProps {
    partner: IPartnerDetails;
}

const PartnerDetailsHeader = ({
    partner,
}: PartnerDetailsHeaderProps) => {
    return (
        <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-center gap-4">
                    <div className="h-20 w-20 shrink-0 overflow-hidden rounded-full border-2 border-primary/20 bg-muted sm:h-24 sm:w-24">
                        <img src={partner.avatar} alt={partner.fullName} className="h-full w-full object-cover" />
                    </div>

                    <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-3">
                            <h1 className="text-xl font-semibold text-foreground">
                                {partner.fullName}
                            </h1>

                            <Badge className="border-emerald-500/20 bg-emerald-500/10 text-[10px] font-medium capitalize text-emerald-600 hover:bg-emerald-500/10 dark:text-emerald-400">
                                {partner.status}
                            </Badge>
                        </div>

                        <p className="mt-1 text-sm text-muted-foreground">
                            {partner.email}
                        </p>

                        <Badge className="mt-3 border-primary/20 bg-primary/10 px-3 py-1 text-[10px] font-medium text-primary hover:bg-primary/10">
                            Partner since {partner.joinedAt}
                        </Badge>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-8 sm:min-w-[280px]">
                    <div>
                        <p className="text-xs text-muted-foreground">
                            Total Revenue
                        </p>

                        <p className="mt-1 text-xl font-semibold text-foreground">
                            ${partner.totalRevenue.toLocaleString()}
                        </p>
                    </div>

                    <div>
                        <p className="text-xs text-muted-foreground">
                            Total Referrals
                        </p>

                        <p className="mt-1 text-xl font-semibold text-foreground">
                            {partner.totalReferrals.toLocaleString()}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PartnerDetailsHeader;