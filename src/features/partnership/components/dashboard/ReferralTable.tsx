import { DataTable } from '@/components/data-table/DataTable';
import { ColumnDef } from '@tanstack/react-table';
import { IReferral } from '../../partnership.interface';
import { Calendar, CreditCard } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const ReferralTable = ({ referralData }: { referralData: IReferral[] }) => {

    const columns: ColumnDef<IReferral>[] = [
        {
            accessorKey: "date",
            header: "Date",
            cell: ({ row }) => (
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5" />
                    {new Date(row.original.date).toLocaleDateString()}
                </div>
            ),
        },
        {
            accessorKey: "name",
            header: "Referred User",
            cell: ({ row }) => (
                <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium text-xs">
                        {row.original.firstName[0]}{row.original.lastName[0]}
                    </div>
                    <div className="flex flex-col">
                        <span className="text-sm font-medium">
                            {row.original.firstName} {row.original.lastName}
                        </span>
                        <span className="text-xs text-muted-foreground">ID: {row.original.id}</span>
                    </div>
                </div>
            ),
        },
        {
            accessorKey: "membership",
            header: "Membership",
            cell: ({ row }) => {
                const variant =
                    row.original.membership === "Enterprise" ? "default" :
                        row.original.membership === "Premium" ? "secondary" : "outline";

                return (
                    <Badge variant={variant} className="capitalize">
                        {row.original.membership}
                    </Badge>
                );
            },
        },
        {
            accessorKey: "commission",
            header: "Commission",
            cell: ({ row }) => (
                <div className="flex items-center gap-1.5 font-medium text-green-600 dark:text-green-400">
                    <CreditCard className="h-3.5 w-3.5" />
                    ${row.original.commission.toFixed(2)}
                </div>
            ),
        }
    ];


    return (
        <div>
            {/* Referrals history */}
            <section className="mt-5 rounded-md bg-card p-3 sm:p-4">
                <h2 className="mb-3 text-base font-medium sm:text-lg">
                    Referrals History
                </h2>

                <div
                    className="
              overflow-x-auto
              rounded-md
              border
              border-border/50

              [&_table]:min-w-[600px]
              [&_table]:border-collapse

              [&_thead]:bg-muted
              [&_thead_tr]:border-none

              [&_th]:h-11
              [&_th]:px-4
              [&_th]:text-sm
              [&_th]:font-normal
              [&_th]:text-foreground
              sm:[&_th]:px-5

              [&_tbody_tr]:border-border/50
              [&_tbody_tr]:transition-colors
              hover:[&_tbody_tr]:bg-muted/30

              [&_td]:px-4
              [&_td]:py-3.5
              sm:[&_td]:px-5
            "
                >
                    <DataTable
                        data={referralData}
                        columns={columns}
                        paginationMode="client"
                        searchMode="client"
                        total={referralData.length}
                    />
                </div>
            </section>
        </div>
    );
};

export default ReferralTable;