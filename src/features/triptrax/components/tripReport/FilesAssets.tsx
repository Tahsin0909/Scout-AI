import { Download, FileText } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { ITripReport } from "../../triptrax.interface";

export const FilesAssets = ({
    trip,
}: {
    trip: ITripReport;
}) => {
    return (
        <section>
            <h2 className="mb-4 text-lg font-semibold text-foreground">
                Files & Assets
            </h2>

            <Card className="overflow-hidden border-border bg-card shadow-sm">
                <CardContent className="divide-y divide-border p-0">
                    {trip.files.map((file) => (
                        <div key={file.id} className="flex items-center justify-between gap-4 p-4 transition-colors hover:bg-muted/30">
                            <div className="flex min-w-0 items-center gap-4">
                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border bg-muted/40">
                                    <FileText className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                                </div>

                                <div className="min-w-0">
                                    <p className="truncate text-xs font-semibold text-foreground">
                                        {file.title}
                                    </p>

                                    <p className="mt-1 text-[10px] text-muted-foreground">
                                        {file.meta}
                                    </p>
                                </div>
                            </div>

                            <button type="button" aria-label={`Download ${file.title}`} className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-transparent text-muted-foreground transition-colors hover:border-border hover:bg-muted hover:text-foreground">
                                <Download className="h-4 w-4" />
                            </button>
                        </div>
                    ))}
                </CardContent>
            </Card>
        </section>
    );
};