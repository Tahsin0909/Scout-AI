import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { recentMembers } from '../data/recentMember';



const getTierClasses = (variant: string) => {
    switch (variant) {
        case "apex":
            return `
        border-amber-200
        bg-amber-50
        text-amber-700
        dark:border-amber-500/20
        dark:bg-amber-500/10
        dark:text-amber-400
      `;

        case "summit":
            return `
        border-emerald-200
        bg-emerald-50
        text-emerald-700
        dark:border-emerald-500/20
        dark:bg-emerald-500/10
        dark:text-emerald-400
      `;

        case "basecamp":
            return `
        border-blue-200
        bg-blue-50
        text-blue-700
        dark:border-blue-500/20
        dark:bg-blue-500/10
        dark:text-blue-400
      `;

        case "trailhead":
            return `
        border-cyan-200
        bg-cyan-50
        text-cyan-700
        dark:border-cyan-500/20
        dark:bg-cyan-500/10
        dark:text-cyan-400
      `;

        default:
            return "border-border bg-muted text-muted-foreground";
    }
};


const AdminResentMember = () => {
    return (
        <Card
            className="
            overflow-hidden
            rounded-2xl
            border-border/70
            bg-card
            shadow-sm
            dark:shadow-none
          "
        >
            <CardContent className="p-0">
                <div
                    className="
                flex items-center
                justify-between
                border-b
                border-border/70
                px-5 py-5
                sm:px-6
              "
                >
                    <div>
                        <h3 className="text-lg font-bold text-foreground">
                            Recent Members
                        </h3>

                        <p className="mt-1 text-xs text-muted-foreground">
                            Latest users joining your memberships.
                        </p>
                    </div>

                    <Link
                        href="#"
                        className="
                  group flex
                  items-center gap-1
                  text-sm font-semibold
                  text-amber-600
                  transition-colors
                  hover:text-amber-700
                  dark:text-amber-400
                  dark:hover:text-amber-300
                "
                    >
                        View all

                        <ArrowRight
                            className="
                    h-4 w-4
                    transition-transform
                    group-hover:translate-x-0.5
                  "
                        />
                    </Link>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead>
                            <tr
                                className="
                      border-b
                      border-border/70
                      bg-muted/20
                      text-xs
                      font-medium
                      text-muted-foreground
                    "
                            >
                                <th className="px-5 py-3.5 sm:px-6">
                                    Name
                                </th>

                                <th className="px-4 py-3.5">
                                    Tier
                                </th>

                                <th className="px-5 py-3.5 sm:px-6">
                                    Status
                                </th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-border/60">
                            {recentMembers.map((member) => (
                                <tr
                                    key={member.name}
                                    className="
                        transition-colors
                        hover:bg-muted/30
                      "
                                >
                                    <td
                                        className="
                          px-5 py-4
                          font-medium
                          text-foreground
                          sm:px-6
                        "
                                    >
                                        {member.name}
                                    </td>

                                    <td className="px-4 py-4">
                                        <span
                                            className={`
                            inline-flex
                            rounded-full
                            border
                            px-2.5 py-1
                            text-[11px]
                            font-semibold
                            ${getTierClasses(
                                                member.tierVariant
                                            )}
                          `}
                                        >
                                            {member.tier}
                                        </span>
                                    </td>

                                    <td className="px-5 py-4 sm:px-6">
                                        <span
                                            className="
                            inline-flex
                            items-center gap-1.5
                            text-xs
                            font-medium
                            text-muted-foreground
                          "
                                        >
                                            <span
                                                className="
                              h-1.5 w-1.5
                              rounded-full
                              bg-emerald-500
                            "
                                            />

                                            {member.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </CardContent>
        </Card>
    );
};

export default AdminResentMember;