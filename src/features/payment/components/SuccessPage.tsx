"use client";

import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type SuccessPageProps = {
    planName: string;
    billingLabel: string;
    date: string;
};

export default function SuccessPage({
    planName,
    billingLabel,
    date,
}: SuccessPageProps) {
    return (
        <main className=" px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
            <div className="mx-auto w-full max-w-2xl">
                {/* Success Icon */}
                <div className="flex justify-center">
                    <div className="flex size-14 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-green-600 shadow-lg shadow-green-500/20 ">
                        <CheckCircle className="size-8 text-green-500" strokeWidth={2.5} />
                    </div>
                </div>

                {/* Heading */}
                <h1 className="mt-6 text-center text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
                    Welcome To TripTrax
                </h1>

                {/* Subtitle */}
                <p className="mt-3 text-center text-sm leading-relaxed text-neutral-500 sm:text-base">
                    Your next billing cycle starts exactly 30 days from today. Access is now unlocked.
                </p>

                {/* Order Summary Card */}
                <div className="mt-8 overflow-hidden rounded-xl border border-neutral-200 shadow-sm">
                    <div className="border-b border-neutral-100 px-5 py-4 sm:px-6">
                        <h2 className="text-sm font-semibold text-neutral-900">
                            Order Summary
                        </h2>
                    </div>

                    <div className="divide-y divide-neutral-100">
                        {/* Membership Name */}
                        <div className="flex items-center justify-between px-5 py-4 sm:px-6">
                            <span className="text-sm text-neutral-600">
                                Membership name
                            </span>
                            <span className="text-sm font-medium text-neutral-900">
                                {planName}
                            </span>
                        </div>

                        {/* Amount Paid */}
                        <div className="flex items-center justify-between px-5 py-4 sm:px-6">
                            <span className="text-sm text-neutral-600">
                                Amount paid
                            </span>
                            <span className="text-sm font-medium text-neutral-900">
                                {billingLabel} Subscription
                            </span>
                        </div>

                        {/* Total Due Today */}
                        <div className="flex items-center justify-between px-5 py-4 sm:px-6">
                            <span className="text-sm text-neutral-600">
                                Total Due Today
                            </span>
                            <span className="text-sm font-semibold text-neutral-900">
                                $210
                                <span className="ml-0.5 text-xs font-normal text-neutral-500">
                                    /mo
                                </span>
                            </span>
                        </div>

                        {/* Date */}
                        <div className="flex items-center justify-between px-5 py-4 sm:px-6">
                            <span className="text-sm text-neutral-600">
                                Date
                            </span>
                            <span className="text-sm font-medium text-neutral-900">
                                {date}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Go to Dashboard Button */}
                <Button
                    asChild
                    variant="outline"
                    size="lg"
                    fullWidth
                    className="mt-4"
                >
                    <Link href="/dashboard">
                        Go to Dashboard
                    </Link>
                </Button>
            </div>
        </main>
    );
}