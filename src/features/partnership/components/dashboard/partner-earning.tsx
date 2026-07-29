"use client";

import { DataTable } from "@/components/data-table/DataTable";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import {
    CircleDollarSign,
    Landmark
} from "lucide-react";
import { referralData } from "../../data/dashboard";
import { IReferral } from "../../partnership.interface";

const earningsSummary = {
    totalEarnings: 10025,
    availableBalance: 3520,
    withdrawBalance: 7520,
};

const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(value);
};

const formatDate = (date: string | Date) => {
    const parsedDate = new Date(date);

    if (Number.isNaN(parsedDate.getTime())) {
        return String(date);
    }

    return new Intl.DateTimeFormat("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    })
        .format(parsedDate)
        .replace(/\//g, "-");
};

const Earnings = () => {
    const transactionHistory = referralData;

    const columns: ColumnDef<IReferral>[] = [
        {
            accessorKey: "date",
            header: "Date",
            cell: ({ row }) => (
                <span className="whitespace-nowrap text-sm text-muted-foreground">
                    {formatDate(row.original.date)}
                </span>
            ),
        },
        {
            accessorKey: "commission",
            header: () => (
                <div className="w-full text-right">
                    Withdraw Balance
                </div>
            ),
            cell: ({ row }) => (
                <div className="w-full whitespace-nowrap text-right text-sm font-semibold text-foreground">
                    {formatCurrency(row.original.commission)}
                </div>
            ),
        },
    ];

    const handleWithdraw = () => {
        console.log("Withdraw button clicked");
    };

    return (
        <main className="container">
            <div className="mx-auto w-full px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
                {/* Heading */}
                <header className="mb-5">
                    <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                        Earnings
                    </h1>

                    <p className="mt-2 text-sm leading-5 text-muted-foreground sm:text-base sm:leading-6">
                        Track your commissions, monitor payouts, and view your
                        complete earning history with our integrated financial
                        dashboard.
                    </p>
                </header>

                {/* Earnings summary */}
                <section className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    <EarningCard
                        icon={<CircleDollarSign className="h-4 w-4" />}
                        label="Total Earnings"
                        value={formatCurrency(earningsSummary.totalEarnings)}
                    />

                    <EarningCard
                        icon={<CircleDollarSign className="h-4 w-4" />}
                        label="Available Balance"
                        value={formatCurrency(earningsSummary.availableBalance)}
                    />

                    <article className="rounded-md bg-card p-4 sm:col-span-2 lg:col-span-1">
                        <div className="flex items-center gap-2">
                            <Landmark className="h-4 w-4" />

                            <p className="text-xs font-semibold sm:text-sm">
                                Withdraw Balance
                            </p>
                        </div>

                        <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center">
                            <div className="flex h-10 flex-1 items-center justify-center rounded-xl bg-background px-4">
                                <span className="text-sm font-semibold">
                                    {formatCurrency(earningsSummary.withdrawBalance)}
                                </span>
                            </div>

                            <Button
                                type="button"
                                onClick={handleWithdraw}
                                className="h-10 bg-[#FFD43B] px-5 font-semibold text-black hover:bg-[#FFD43B]/90"
                            >
                                Withdraw
                            </Button>
                        </div>
                    </article>
                </section>

                {/* Transaction history */}
                <section className="mt-5 rounded-md bg-card p-3 sm:p-4">
                    <h2 className="mb-3 text-base font-medium sm:text-lg">
                        Transaction History
                    </h2>

                    <div
                        className="
              overflow-x-auto
              rounded-md
              border
              border-border/50

              [&_table]:min-w-[500px]
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
                            data={transactionHistory}
                            columns={columns}
                            paginationMode="client"
                            searchMode="client"
                            total={transactionHistory.length}
                        />
                    </div>
                </section>
            </div>
        </main>
    );
};

interface EarningCardProps {
    icon: React.ReactNode;
    label: string;
    value: string;
}

const EarningCard = ({
    icon,
    label,
    value,
}: EarningCardProps) => {
    return (
        <article className="rounded-md bg-card p-4">
            <div className="flex items-center gap-2">
                <span className="flex shrink-0 items-center justify-center">
                    {icon}
                </span>

                <p className="text-xs font-semibold sm:text-sm">
                    {label}
                </p>
            </div>

            <p className="mt-3 text-2xl font-semibold tracking-tight sm:text-[28px]">
                {value}
            </p>
        </article>
    );
};

export default Earnings;