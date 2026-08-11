import {
    Facebook,
    Globe,
    Instagram,
    Linkedin,
    Youtube,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { IPartnerDetails, SocialPlatform } from "../partnership.interface";

const getSocialIcon = (platform: SocialPlatform) => {
    switch (platform) {
        case "Instagram":
            return Instagram;

        case "Facebook":
            return Facebook;

        case "YouTube":
            return Youtube;

        case "LinkedIn":
            return Linkedin;

        default:
            return Globe;
    }
};

interface PartnerContactInfoProps {
    partner: IPartnerDetails;
}

const PartnerContactInfo = ({
    partner,
}: PartnerContactInfoProps) => {
    return (
        <Card className="h-full border-border bg-card shadow-sm">
            <CardContent className="p-5">
                <h3 className="text-lg font-semibold text-foreground">
                    Contact Information
                </h3>

                <div className="mt-6 space-y-5">
                    <div className="flex flex-col gap-2 text-sm sm:flex-row sm:items-center sm:justify-between">
                        <span className="text-muted-foreground">
                            Email Address:
                        </span>

                        <span className="break-all font-medium text-foreground">
                            {partner.email}
                        </span>
                    </div>

                    <div className="flex flex-col gap-2 text-sm sm:flex-row sm:items-center sm:justify-between">
                        <span className="text-muted-foreground">
                            Phone Number:
                        </span>

                        <span className="font-medium text-foreground">
                            {partner.phone}
                        </span>
                    </div>

                    <div className="flex flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between">
                        <span className="text-muted-foreground">
                            Social Profile:
                        </span>

                        <div className="flex items-center gap-3">
                            {partner.socialAccounts.map((account) => {
                                const Icon = getSocialIcon(account.platform);

                                return (
                                    <a key={account.id} href={account.url} target="_blank" rel="noopener noreferrer" aria-label={account.platform} className="flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary">
                                        <Icon className="h-4 w-4" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default PartnerContactInfo;