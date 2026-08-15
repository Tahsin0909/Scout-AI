import { Card, CardContent } from "@/components/ui/card";

interface UserMonthlyUsageProps {
    used?: number;
    total?: number;
    resetDays?: number;
}

const UserMonthlyUsage = ({
    used = 1,
    total = 2,
    resetDays = 12,
}: UserMonthlyUsageProps) => {
    const totalSegments = 70;
    const percentage = total > 0 ? used / total : 0;
    const activeSegments = Math.round(totalSegments * percentage);

    return (
        <Card className="rounded-xl border-border/70 bg-card shadow-sm">
            <CardContent className="p-5">
                <h2 className="text-base font-medium text-foreground">
                    Monthly Usage
                </h2>

                <div className="mt-7 flex items-center justify-between gap-4">
                    <p className=" text-muted-foreground">
                        Trip Package Usage
                    </p>

                    <div className="flex items-baseline">
                        <span className=" font-medium text-foreground">
                            {used}
                        </span>

                        <span className=" text-muted-foreground">
                            /{total} used
                        </span>
                    </div>
                </div>

                {/* Segmented Progress */}
                <div className="mt-3 flex h-5 w-full items-center overflow-hidden">
                    {Array.from({ length: totalSegments }).map((_, index) => (
                        <span key={index} className={`h-5 w-2 shrink-0 border-r border-card ${index < activeSegments ? "bg-foreground" : "bg-muted-foreground/35"}`} />
                    ))}
                </div>

                <p className="mt-6 text-sm text-muted-foreground">
                    Resets in {resetDays} days
                </p>
            </CardContent>
        </Card>
    );
};

export default UserMonthlyUsage;