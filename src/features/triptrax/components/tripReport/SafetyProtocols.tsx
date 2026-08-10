import { Card, CardContent } from "@/components/ui/card";
import { Phone } from "lucide-react";

import { ITripReport } from "../../triptrax.interface";

export const SafetyProtocols = ({
    trip,
}: {
    trip: ITripReport;
}) => {
    return (
        <section>
            <h2 className="mb-4 text-lg font-semibold text-foreground">
                Safety & Emergency Protocols
            </h2>

            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {trip.safetyContacts.map((contact) => (
                    <Card key={contact.title} className="border-border bg-card shadow-sm transition-colors hover:bg-muted/30">
                        <CardContent className="p-4">
                            <p className="flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400">
                                <Phone className="h-3.5 w-3.5 shrink-0" />
                                {contact.title}
                            </p>

                            <p className="mt-2 text-xs font-medium text-foreground">
                                {contact.phone}
                            </p>

                            <p className="mt-1 text-[10px] text-muted-foreground">
                                {contact.subtitle}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
};