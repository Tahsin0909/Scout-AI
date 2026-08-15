import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CreditCard } from 'lucide-react';
import Link from 'next/link';
import { recentPayments } from '../data/recent';

const AdminResentPayment = () => {
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
                            Recent Payments
                        </h3>

                        <p className="mt-1 text-xs text-muted-foreground">
                            Latest successful membership transactions.
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
                                    Invoice
                                </th>

                                <th className="px-4 py-3.5">
                                    Amount
                                </th>

                                <th className="px-5 py-3.5 sm:px-6">
                                    Date
                                </th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-border/60">
                            {recentPayments.map((payment) => (
                                <tr
                                    key={payment.id}
                                    className="
                        transition-colors
                        hover:bg-muted/30
                      "
                                >
                                    <td className="px-5 py-4 sm:px-6">
                                        <div className="flex items-center gap-2.5">
                                            <div
                                                className="
                              flex h-8 w-8
                              items-center
                              justify-center
                              rounded-lg
                              border border-border
                              bg-muted/50
                              text-muted-foreground
                            "
                                            >
                                                <CreditCard className="h-3.5 w-3.5" />
                                            </div>

                                            <span
                                                className="
                              font-mono
                              text-xs
                              font-medium
                              text-muted-foreground
                            "
                                            >
                                                {payment.id}
                                            </span>
                                        </div>
                                    </td>

                                    <td
                                        className="
                          px-4 py-4
                          font-semibold
                          text-foreground
                        "
                                    >
                                        {payment.amount}
                                    </td>

                                    <td
                                        className="
                          px-5 py-4
                          text-sm
                          text-muted-foreground
                          sm:px-6
                        "
                                    >
                                        {payment.date}
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

export default AdminResentPayment;