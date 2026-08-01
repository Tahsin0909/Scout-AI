"use client";

import React from "react";
import { 
  CheckCircle2, 
  CreditCard, 
  Download, 
  Sparkles, 
  ArrowUpRight 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function UserMembership() {
  const includedFeatures = [
    "Access to Scout AI.",
    "Generate 4 trip packages per month",
    "Additional package cost at $5.00 each",
    "All core modules included",
    "Trip Planning Window Available within 60 days of departure",
    "Access to members-only content",
    "Analysis & Support",
    "Tier III priority in queue",
    "Merchandise Discount 5%",
  ];

  const billingHistory = [
    { date: "July 15, 2024", amount: "$15.00", status: "Paid" },
    { date: "July 15, 2024", amount: "$15.00", status: "Paid" },
    { date: "July 15, 2024", amount: "$15.00", status: "Paid" },
  ];

  return (
    <div className="w-full bg-[#1E1E21] text-zinc-100 min-h-screen p-6 md:p-8 space-y-8 font-sans">
      {/* Header Section */}
      <div className="space-y-1.5">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
          Membership
        </h1>
        <p className="text-zinc-400 text-sm md:text-base max-w-3xl font-normal">
          Manage your membership, track your usage, and unlock more powerful planning tools.
        </p>
      </div>

      {/* Main Grid: 2 Columns on Desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        
        {/* Left Column (Spans 2 columns on desktop) */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Card 1: Membership Details ("Plus - Go Further") */}
          <Card className="bg-[#28282C] border-[#36363B] rounded-2xl overflow-hidden shadow-md">
            <CardContent className="p-6 md:p-8 space-y-6">
              
              {/* Top Row: Title & Upgrade Plan Button */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="space-y-1">
                  <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                    Plus &ndash; Go Further
                  </h2>
                  <p className="text-xs md:text-sm text-zinc-400">
                    Your current path to discovery. $19.99/month.
                  </p>
                </div>
                <button className="bg-[#F7C948] hover:bg-[#eab308] text-black font-bold text-xs md:text-sm px-5 py-2.5 rounded-xl transition-all shadow-sm self-start sm:self-auto cursor-pointer">
                  Upgrade Plan
                </button>
              </div>

              {/* Metadata Row: 3 Items */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 pb-2">
                <div className="space-y-1">
                  <span className="text-xs text-zinc-400 font-semibold block">Next Renewal</span>
                  <span className="text-sm font-semibold text-white">15 July 2026</span>
                </div>
                <div className="space-y-1">
                  <span className="text-xs text-zinc-400 font-semibold block">Member Since</span>
                  <span className="text-sm font-semibold text-white">12 Jan 2026</span>
                </div>
                <div className="space-y-1">
                  <span className="text-xs text-zinc-400 font-semibold block">Priority Level</span>
                  <span className="text-sm font-semibold text-white">Tier IV Priority</span>
                </div>
              </div>

              {/* Included Features Box */}
              <div className="bg-[#212125] border border-[#333339] rounded-xl p-5 md:p-6 space-y-4">
                <h3 className="text-sm font-bold text-white tracking-wide">
                  Included features
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs md:text-sm text-zinc-300">
                  {includedFeatures.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-zinc-400 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Card 2: Billing History Table */}
          <Card className="bg-[#28282C] border-[#36363B] rounded-2xl overflow-hidden shadow-md">
            <CardContent className="p-6 md:p-8 space-y-4">
              <h2 className="text-xl font-bold text-white tracking-tight">Billing History</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs md:text-sm">
                  <thead>
                    <tr className="border-b border-[#36363B] text-zinc-400 font-semibold">
                      <th className="pb-3 pt-1">Date</th>
                      <th className="pb-3 pt-1">Amount</th>
                      <th className="pb-3 pt-1">Status</th>
                      <th className="pb-3 pt-1 text-right">Invoice</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#36363B]/60">
                    {billingHistory.map((item, idx) => (
                      <tr key={idx} className="hover:bg-[#2F2F35]/40 transition-colors">
                        <td className="py-4 text-zinc-200 font-medium">{item.date}</td>
                        <td className="py-4 text-zinc-200 font-medium">{item.amount}</td>
                        <td className="py-4">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#38383D] text-zinc-200 text-[11px] font-medium border border-[#484850]">
                            <span className="w-1.5 h-1.5 rounded-full bg-zinc-300" />
                            {item.status}
                          </span>
                        </td>
                        <td className="py-4 text-right">
                          <button className="text-zinc-400 hover:text-white transition-colors cursor-pointer p-1">
                            <Download className="w-4 h-4 ml-auto" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

        </div>

        {/* Right Column (Sidebar Widgets) */}
        <div className="space-y-6">

          {/* Widget 1: Monthly Usage */}
          <Card className="bg-[#28282C] border-[#36363B] rounded-2xl overflow-hidden shadow-md">
            <CardContent className="p-6 space-y-4">
              <h3 className="text-base font-bold text-white">Monthly Usage</h3>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-semibold">
                  <span className="text-zinc-400">Trip Package Usage</span>
                  <span className="text-white">1 <span className="text-zinc-400 font-normal">/2 Used</span></span>
                </div>
                {/* Progress bar with vertical striped pattern matching design */}
                <div className="w-full bg-[#212125] h-3.5 rounded-md overflow-hidden p-0.5 border border-[#36363B] flex items-center">
                  <div className="w-1/2 h-full bg-[#E4E4E7] rounded-sm transition-all" />
                </div>
                <p className="text-[11px] text-zinc-500 font-medium pt-1">
                  Resets in 12 days
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Widget 2: Billing Payment Method */}
          <Card className="bg-[#28282C] border-[#36363B] rounded-2xl overflow-hidden shadow-md">
            <CardContent className="p-6 space-y-4">
              <h3 className="text-base font-bold text-white">Billing Payment Method</h3>
              
              <div className="flex items-start justify-between gap-3 pt-1">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-8 rounded-lg bg-[#212125] border border-[#36363B] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CreditCard className="w-5 h-5 text-zinc-300" />
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-xs md:text-sm font-semibold text-white">
                      Visa ending in 4582
                    </p>
                    <p className="text-[11px] text-zinc-400">
                      Expires 09/28
                    </p>
                  </div>
                </div>
                <button className="text-xs font-medium px-3 py-1 rounded-md bg-[#333338] hover:bg-[#3F3F46] text-zinc-200 transition-colors border border-neutral-700 cursor-pointer">
                  Edit
                </button>
              </div>
            </CardContent>
          </Card>

          {/* Widget 3: Expansion */}
          <Card className="bg-[#28282C] border-[#36363B] rounded-2xl overflow-hidden shadow-md">
            <CardContent className="p-6 space-y-4">
              <span className="text-xs font-semibold text-zinc-400 block">Expansion</span>
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Need more distance?
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Buy an additional trip package for just $5.
                </p>
              </div>
              <button className="w-full bg-[#38383D] hover:bg-[#44444A] text-white font-semibold text-xs py-3 px-4 rounded-xl transition-colors border border-neutral-700 shadow-sm cursor-pointer block text-center">
                Buy Additional Package
              </button>
            </CardContent>
          </Card>

        </div>

      </div>
    </div>
  );
}
