"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Users, 
  UserCheck, 
  DollarSign, 
  RefreshCw, 
  TrendingUp, 
  CreditCard 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Overview() {
  const [activeTab, setActiveTab] = useState<"7d" | "30d" | "12m">("30d");

  // Metrics Data
  const metrics = [
    {
      title: "Total Members",
      value: "2,486",
      change: "+12%",
      icon: Users,
    },
    {
      title: "Active Memberships",
      value: "2,214",
      change: "+12%",
      icon: UserCheck,
    },
    {
      title: "Monthly Revenue",
      value: "$18,420",
      change: "+8.5%",
      icon: DollarSign,
    },
    {
      title: "Membership Renewals",
      value: "128",
      change: "+8.5%",
      icon: RefreshCw,
    },
  ];

  // Bar Chart Data (Jan - Dec)
  const barChartData = [
    { month: "Jan", value: 4, height: "h-[8%]" },
    { month: "Feb", value: 15, height: "h-[30%]" },
    { month: "Mar", value: 10, height: "h-[20%]" },
    { month: "Apr", value: 25, height: "h-[50%]" },
    { month: "May", value: 35, height: "h-[70%]" },
    { month: "Jun", value: 45, height: "h-[90%]", isCurrent: true, tooltip: "This month: $8879.09" },
    { month: "Jul", value: 20, height: "h-[40%]" },
    { month: "Aug", value: 30, height: "h-[60%]" },
    { month: "Sep", value: 18, height: "h-[36%]" },
    { month: "Oct", value: 15, height: "h-[30%]" },
    { month: "Nov", value: 28, height: "h-[56%]" },
    { month: "Dec", value: 40, height: "h-[80%]" },
  ];

  // Recent Members Data
  const recentMembers = [
    {
      name: "Marcus Thorne",
      tier: "Apex Elite",
      status: "Active",
      tierColor: "bg-[#38d792]/10 text-[#38d792] border-[#38d792]/20",
    },
    {
      name: "Sarah Jenkins",
      tier: "Summit",
      status: "Active",
      tierColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    },
    {
      name: "David Chen",
      tier: "Basecamp",
      status: "Active",
      tierColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    },
    {
      name: "Elena Rodriguez",
      tier: "Trailhead",
      status: "Active",
      tierColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    },
    {
      name: "Elena Rodriguez",
      tier: "Trailhead",
      status: "Active",
      tierColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    },
  ];

  // Recent Payments Data
  const recentPayments = [
    { id: "#INV-8821", amount: "$199.00", date: "Oct 24, 2024" },
    { id: "#INV-8820", amount: "$199.00", date: "Oct 24, 2024" },
    { id: "#INV-8819", amount: "$199.00", date: "Oct 24, 2024" },
    { id: "#INV-8818", amount: "$199.00", date: "Oct 24, 2024" },
    { id: "#INV-8819", amount: "$199.00", date: "Oct 24, 2024" },
  ];

  return (
    <div className="w-full bg-[#111111] text-zinc-100 min-h-screen p-6 md:p-8 space-y-8 font-sans">
      
      {/* Welcome Header */}
      <div className="space-y-2">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
          Welcome Back, Alex
        </h1>
        <p className="text-zinc-400 text-sm md:text-base max-w-2xl font-light">
          Plan, track, and manage your adventures from one place. Your rugged intelligence is ready.
        </p>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, idx) => (
          <Card key={idx} className="bg-[#181818] border-[#262626] rounded-xl overflow-hidden shadow-md">
            <CardContent className="p-5 flex flex-col justify-between h-full space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-zinc-400 text-sm font-medium">{metric.title}</span>
                <div className="w-8 h-8 rounded-lg bg-[#262626] flex items-center justify-center">
                  <metric.icon className="w-4 h-4 text-zinc-400" />
                </div>
              </div>
              <div className="flex items-end justify-between">
                <span className="text-2xl md:text-3xl font-semibold text-white tracking-tight">
                  {metric.value}
                </span>
                <span className="bg-[#009a57]/15 text-[#38d792] text-xs font-semibold px-2 py-0.5 rounded-full flex items-center gap-1 border border-[#009a57]/20">
                  {metric.change}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Revenue Breakdown Bar Chart */}
        <Card className="lg:col-span-2 bg-[#181818] border-[#262626] rounded-xl shadow-md">
          <CardContent className="p-6 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <span className="text-zinc-400 text-sm font-medium">Revenue Breakdown</span>
                <h3 className="text-3xl font-semibold text-white tracking-tight mt-1">$18,420</h3>
              </div>
              
              {/* Tab Selector */}
              <div className="flex bg-[#262626] p-1 rounded-lg self-start text-xs font-medium border border-[#333333]">
                <button
                  onClick={() => setActiveTab("7d")}
                  className={`px-3 py-1.5 rounded-md transition-all ${
                    activeTab === "7d"
                      ? "bg-transparent text-zinc-400"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  Last 7 Days
                </button>
                <button
                  onClick={() => setActiveTab("30d")}
                  className={`px-3 py-1.5 rounded-md transition-all ${
                    activeTab === "30d"
                      ? "bg-[#FFD23F] text-black font-semibold shadow-sm"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  Last 30 Days
                </button>
                <button
                  onClick={() => setActiveTab("12m")}
                  className={`px-3 py-1.5 rounded-md transition-all ${
                    activeTab === "12m"
                      ? "bg-transparent text-zinc-400"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  Last 12 Months
                </button>
              </div>
            </div>

            {/* Custom Bar Chart Container */}
            <div className="relative pt-12 pb-2 h-72 flex items-end">
              
              {/* Grid Lines & Y Axis */}
              <div className="absolute inset-0 flex flex-col justify-between text-right text-[10px] text-zinc-500 font-medium pe-2 select-none pointer-events-none pb-7 pt-12">
                <div className="flex items-center w-full">
                  <span className="w-8 text-left">50k</span>
                  <div className="w-full border-t border-[#262626]/60 ml-2" />
                </div>
                <div className="flex items-center w-full">
                  <span className="w-8 text-left">30k</span>
                  <div className="w-full border-t border-[#262626]/60 ml-2" />
                </div>
                <div className="flex items-center w-full">
                  <span className="w-8 text-left">20k</span>
                  <div className="w-full border-t border-[#262626]/60 ml-2" />
                </div>
                <div className="flex items-center w-full">
                  <span className="w-8 text-left">10k</span>
                  <div className="w-full border-t border-[#262626]/60 ml-2" />
                </div>
                <div className="flex items-center w-full">
                  <span className="w-8 text-left">5k</span>
                  <div className="w-full border-t border-[#262626]/60 ml-2" />
                </div>
                <div className="flex items-center w-full">
                  <span className="w-8 text-left">1k</span>
                  <div className="w-full border-t border-[#262626]/60 ml-2" />
                </div>
                <div className="flex items-center w-full">
                  <span className="w-8 text-left">0</span>
                  <div className="w-full border-t border-[#262626]/60 ml-2" />
                </div>
              </div>

              {/* Bars Row */}
              <div className="flex-1 flex justify-between items-end h-full pl-10 relative z-10 pb-6">
                {barChartData.map((data, index) => (
                  <div key={index} className="flex flex-col items-center flex-1 group cursor-pointer relative h-full justify-end">
                    
                    {/* Tooltip for Current Month (June) */}
                    {data.isCurrent && (
                      <div className="absolute bottom-[calc(90%+16px)] left-1/2 -translate-x-1/2 flex flex-col items-center z-20">
                        <div className="bg-white text-black font-semibold text-[11px] px-2.5 py-1 rounded-md shadow-lg whitespace-nowrap border border-zinc-200">
                          {data.tooltip}
                        </div>
                        {/* Connecting Dashed Line */}
                        <div className="h-16 border-l border-dashed border-[#FFD23F] mt-1" />
                      </div>
                    )}

                    {/* Bar representation */}
                    <div 
                      className={`w-4 sm:w-6 md:w-7 rounded-t-sm transition-all duration-300 ${
                        data.isCurrent 
                          ? "bg-[#FFD23F] hover:bg-[#ffe066]" 
                          : "bg-[#2d2d2d] group-hover:bg-[#404040]"
                      } ${data.height}`}
                    />
                    
                    {/* X Axis label */}
                    <span className="absolute bottom-[-24px] text-[11px] text-zinc-500 font-medium group-hover:text-white transition-colors mt-2">
                      {data.month}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Membership Distribution Donut Chart */}
        <Card className="bg-[#181818] border-[#262626] rounded-xl shadow-md">
          <CardContent className="p-6 space-y-6 flex flex-col justify-between h-full">
            <div>
              <span className="text-zinc-400 text-sm font-medium">Membership Distribution</span>
            </div>

            {/* Donut SVG Wrapper */}
            <div className="relative flex items-center justify-center py-4">
              <svg className="w-48 h-48 transform -rotate-90" viewBox="0 0 160 160">
                {/* Background Ring */}
                <defs>
                  <filter id="round-corners">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="1.2" />
                    <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" />
                  </filter>
                </defs>
                {/* Background Ring */}
                <circle
                  cx="80"
                  cy="80"
                  r="62"
                  fill="transparent"
                  stroke="#262626"
                  strokeWidth="14"
                />
                
                <g filter="url(#round-corners)">
                  {/* Teal/Cyan Segment (Trailhead) - 42% */}
                  <circle
                    cx="80"
                    cy="80"
                    r="62"
                    fill="transparent"
                    stroke="#38d792"
                    strokeWidth="14"
                    strokeDasharray="161.6 389.5"
                    strokeDashoffset="-1"
                    strokeLinecap="butt"
                    className="transition-all duration-500 hover:stroke-opacity-80 cursor-pointer"
                  />

                  {/* Lime Green Segment (Summit) - 30% */}
                  <circle
                    cx="80"
                    cy="80"
                    r="62"
                    fill="transparent"
                    stroke="#a3e635"
                    strokeWidth="14"
                    strokeDasharray="114.8 389.5"
                    strokeDashoffset="-164.6"
                    strokeLinecap="butt"
                    className="transition-all duration-500 hover:stroke-opacity-80 cursor-pointer"
                  />

                  {/* Yellow Segment (Apex Elite) - 28% */}
                  <circle
                    cx="80"
                    cy="80"
                    r="62"
                    fill="transparent"
                    stroke="#FFD23F"
                    strokeWidth="14"
                    strokeDasharray="107.1 389.5"
                    strokeDashoffset="-281.4"
                    strokeLinecap="butt"
                    className="transition-all duration-500 hover:stroke-opacity-80 cursor-pointer"
                  />
                </g>
              </svg>

              {/* Inside Text */}
              <div className="absolute flex flex-col items-center text-center justify-center">
                <span className="text-3xl font-semibold text-white tracking-tight">2,486</span>
                <span className="text-zinc-500 text-xs mt-2">Members</span>
              </div>
            </div>

            {/* Donut Legend */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-sm bg-[#38d792]" />
                  <span className="text-zinc-300 font-medium">Trailhead</span>
                </div>
                <span className="text-zinc-100 font-semibold">820</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-sm bg-[#a3e635]" />
                  <span className="text-zinc-300 font-medium">Trailhead</span>
                </div>
                <span className="text-zinc-100 font-semibold">710</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-sm bg-[#FFD23F]" />
                  <span className="text-zinc-300 font-medium">Trailhead</span>
                </div>
                <span className="text-zinc-100 font-semibold">560</span>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>

      {/* Lists / Tables Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Recent Members */}
        <Card className="bg-[#181818] border-[#262626] rounded-xl shadow-md overflow-hidden">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-semibold text-white">Recent Members</h4>
              <Link href="#" className="text-[#FFD23F] hover:underline text-sm font-medium">
                View All
              </Link>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-[#262626] text-zinc-500 font-medium">
                    <th className="pb-3 pt-1">Name</th>
                    <th className="pb-3 pt-1">Tier</th>
                    <th className="pb-3 pt-1">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#262626]/50">
                  {recentMembers.map((member, idx) => (
                    <tr key={idx} className="hover:bg-[#202020]/40 transition-colors">
                      <td className="py-3.5 text-zinc-200 font-medium">{member.name}</td>
                      <td className="py-3.5">
                        <span className={`px-2 py-0.5 text-xs font-semibold rounded-md border ${member.tierColor}`}>
                          {member.tier}
                        </span>
                      </td>
                      <td className="py-3.5 text-zinc-400">{member.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Recent Payments */}
        <Card className="bg-[#181818] border-[#262626] rounded-xl shadow-md overflow-hidden">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-semibold text-white">Recent Payments</h4>
              <Link href="#" className="text-[#FFD23F] hover:underline text-sm font-medium">
                View All
              </Link>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-[#262626] text-zinc-500 font-medium">
                    <th className="pb-3 pt-1">ID</th>
                    <th className="pb-3 pt-1">Amount</th>
                    <th className="pb-3 pt-1">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#262626]/50">
                  {recentPayments.map((payment, idx) => (
                    <tr key={idx} className="hover:bg-[#202020]/40 transition-colors">
                      <td className="py-3.5 text-zinc-400 font-mono">{payment.id}</td>
                      <td className="py-3.5 text-zinc-200 font-medium">{payment.amount}</td>
                      <td className="py-3.5 text-zinc-400">{payment.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

      </div>

    </div>
  );
}
