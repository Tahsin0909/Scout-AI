"use client";

import {
    Check,
    Eye,
    ExternalLink,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { IPartnerContent } from "../partnership.interface";

interface PartnerContentProps {
    content: IPartnerContent[];
}

const PartnerContent = ({
    content,
}: PartnerContentProps) => {
    return (
        <Card className="overflow-hidden border-border bg-card shadow-sm">
            <CardContent className="p-0">
                <div className="overflow-x-auto">
                    <table className="w-full min-w-[650px] text-left">
                        <thead className="border-b border-border bg-muted/40">
                            <tr>
                                <th className="px-5 py-4 text-xs font-medium text-foreground">
                                    Platform
                                </th>

                                <th className="px-5 py-4 text-xs font-medium text-foreground">
                                    Post Link
                                </th>

                                <th className="px-5 py-4 text-right text-xs font-medium text-foreground">
                                    Actions
                                </th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-border">
                            {content.map((item) => (
                                <tr key={item.id} className="transition-colors hover:bg-muted/30">
                                    <td className="px-5 py-4 text-xs font-medium text-foreground">
                                        {item.platform}
                                    </td>

                                    <td className="max-w-md px-5 py-4">
                                        <a href={item.postLink} target="_blank" rel="noopener noreferrer" className="block truncate text-xs text-muted-foreground transition-colors hover:text-primary">
                                            {item.postLink}
                                        </a>
                                    </td>

                                    <td className="px-5 py-4">
                                        <div className="flex justify-end gap-2">
                                            <a href={item.postLink} target="_blank" rel="noopener noreferrer" aria-label={`View ${item.platform} post`} className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
                                                <Eye className="h-4 w-4" />
                                            </a>

                                            <button type="button" aria-label="Content status" className={`flex h-8 w-8 items-center justify-center rounded-md border transition-colors ${item.status === "active" ? "border-primary/20 bg-primary/10 text-primary" : "border-border text-muted-foreground hover:bg-muted"}`}>
                                                {item.status === "active" ? (
                                                    <Check className="h-4 w-4" />
                                                ) : (
                                                    <ExternalLink className="h-4 w-4" />
                                                )}
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {content.length === 0 && (
                    <div className="px-6 py-12 text-center">
                        <p className="text-sm font-medium text-foreground">
                            No partner content
                        </p>

                        <p className="mt-1 text-xs text-muted-foreground">
                            This partner has not submitted any content yet.
                        </p>
                    </div>
                )}
            </CardContent>
        </Card>
    );
};

export default PartnerContent;