"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { PartnerTier } from "../partnership.interface";

interface PartnerActionsProps {
    currentTier: PartnerTier;
}

const PartnerActions = ({
    currentTier,
}: PartnerActionsProps) => {
    const [tier, setTier] = useState<PartnerTier>(
        currentTier,
    );

    const handleSuspend = () => {
        console.log("Suspend partner");
    };

    return (
        <Card className="h-full border-border bg-card shadow-sm">
            <CardContent className="p-5">
                <h3 className="text-lg font-semibold text-foreground">
                    Action
                </h3>

                <div className="mt-5">
                    <label className="mb-2 block text-sm text-muted-foreground">
                        Upgrade Tier
                    </label>

                    <Select value={tier} onValueChange={(value) => setTier(value as PartnerTier)}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select tier" />
                        </SelectTrigger>

                        <SelectContent>
                            <SelectItem value="Member">
                                Member
                            </SelectItem>

                            <SelectItem value="Plus">
                                Plus
                            </SelectItem>

                            <SelectItem value="Prime">
                                Prime
                            </SelectItem>

                            <SelectItem value="Elite">
                                Elite
                            </SelectItem>
                        </SelectContent>
                    </Select>

                    <Button type="button" variant="destructive" onClick={handleSuspend} className="mt-5 w-full">
                        Suspend
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};

export default PartnerActions;