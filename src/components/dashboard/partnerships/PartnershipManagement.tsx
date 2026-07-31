"use client";

import React, { useState } from "react";
import { 
  Users, 
  Handshake 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function PartnershipManagement() {
  const [activeTab, setActiveTab] = useState<"7d" | "30d" | "12m">("30d");

  // Mock Activity Data
  const activities = [
    {
      title: "New Application: Alpine Ascent Outfitters",
      description: "Adventure guide service based in Switzerland applied for the Elite Tier. partnership. Verification required.",
      time: "2m ago",
    },
    {
      title: "Renewal Request: Summit Trail Trekkers",
      description: "Experienced hiking company from Canada seeking Elite Tier renewal. Awaiting document submission.",
      time: "5m ago",
    },
    {
      title: "New Application: Alpine Ascent Outfitters",
      description: "Adventure guide service based in Switzerland applied for the Elite Tier. partnership. Verification required.",
      time: "2m ago",
    },
    {
      title: "New Application: Ocean Wave Explorers",
      description: "Surfing school from Australia applied for the Pro Tier. Background check in progress.",
      time: "10m ago",
    },
  ];

  // Bar Chart Data (Jan - Dec)
  const barChartData = [
    { month: "Jan", value: 4, height: "h-[8%]" },
    { month: "Feb", value: 15, height: "h-[30%]" },
    { month: "Mar", value: 10, height: "h-[20%]" },
    { month: "Apr", value: 25, height: "h-[50%]" },
    { month: "May", value: 35, height: "h-[70%]" },
    { month: "Jun", value: 45, height: "h-[90%]", isCurrent: true, tooltip: "This month: 8879.09" },
    { month: "Jul", value: 20, height: "h-[40%]" },
    { month: "Aug", value: 30, height: "h-[60%]" },
    { month: "Sep", value: 18, height: "h-[36%]" },
    { month: "Oct", value: 15, height: "h-[30%]" },
    { month: "Nov", value: 28, height: "h-[56%]" },
    { month: "Dec", value: 40, height: "h-[80%]" },
  ];

  return (
    <div className="w-full bg-[#111111] text-zinc-100 min-h-screen p-6 md:p-8 space-y-8 font-sans">
      
      {/* Page Header */}
      <div className="space-y-2">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
          Partnership Management
        </h1>
      </div>

      {/* Metrics Row (2 Cards taking full width of the row) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
        {/* Card 1: Total Partner */}
        <Card className="bg-[#181818] border-[#262626] rounded-xl overflow-hidden shadow-md">
          <CardContent className="p-5 flex flex-col justify-between h-full space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-2xl md:text-3xl font-semibold text-white tracking-tight">
                2,486
              </span>
              <div className="w-8 h-8 rounded-lg bg-[#262626] flex items-center justify-center">
                <Users className="w-4 h-4 text-zinc-400" />
              </div>
            </div>
            <div className="flex items-end justify-between">
              <span className="text-zinc-400 text-sm font-medium">Total Partner</span>
              <span className="bg-[#009a57]/15 text-[#38d792] text-xs font-semibold px-2 py-0.5 rounded-full flex items-center gap-1 border border-[#009a57]/20">
                +12%
              </span>
            </div>
          </CardContent>
        </Card>

        {/* Card 2: Active Partner */}
        <Card className="bg-[#181818] border-[#262626] rounded-xl overflow-hidden shadow-md">
          <CardContent className="p-5 flex flex-col justify-between h-full space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-2xl md:text-3xl font-semibold text-white tracking-tight">
                2,000
              </span>
              <div className="w-8 h-8 rounded-lg bg-[#262626] flex items-center justify-center">
                <Users className="w-4 h-4 text-zinc-400" />
              </div>
            </div>
            <div className="flex items-end justify-between">
              <span className="text-zinc-400 text-sm font-medium">Active Partner</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Partner Growth Bar Chart */}
        <Card className="lg:col-span-2 bg-[#181818] border-[#262626] rounded-xl shadow-md">
          <CardContent className="p-6 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <span className="text-zinc-100 text-base font-semibold">Partner Growth</span>
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

        {/* Tier Distribution Donut Chart */}
        <Card className="bg-[#181818] border-[#262626] rounded-xl shadow-md">
          <CardContent className="p-6 space-y-6 flex flex-col justify-between h-full">
            <div>
              <span className="text-zinc-100 text-base font-semibold">Tier Distribution</span>
            </div>

            {/* Donut SVG Wrapper */}
            <div className="relative flex items-center justify-center py-4">
              <svg className="w-48 h-48 transform -rotate-90" viewBox="0 0 160 160">
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
                  {/* Teal Segment (Member) - 45% */}
                  <circle
                    cx="80"
                    cy="80"
                    r="62"
                    fill="transparent"
                    stroke="#38d792"
                    strokeWidth="14"
                    strokeDasharray="170 389.5"
                    strokeDashoffset="-2"
                    strokeLinecap="butt"
                    className="transition-all duration-500 hover:stroke-opacity-80 cursor-pointer"
                  />

                  {/* Lime Green Segment (Ambassador) - 30% */}
                  <circle
                    cx="80"
                    cy="80"
                    r="62"
                    fill="transparent"
                    stroke="#a3e635"
                    strokeWidth="14"
                    strokeDasharray="113 389.5"
                    strokeDashoffset="-176"
                    strokeLinecap="butt"
                    className="transition-all duration-500 hover:stroke-opacity-80 cursor-pointer"
                  />

                  {/* Yellow Segment (Advocate) - 25% */}
                  <circle
                    cx="80"
                    cy="80"
                    r="62"
                    fill="transparent"
                    stroke="#FFD23F"
                    strokeWidth="14"
                    strokeDasharray="94.5 389.5"
                    strokeDashoffset="-293"
                    strokeLinecap="butt"
                    className="transition-all duration-500 hover:stroke-opacity-80 cursor-pointer"
                  />
                </g>
              </svg>
            </div>

            {/* Donut Legend */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-sm bg-[#38d792]" />
                  <span className="text-zinc-300 font-medium">Member</span>
                </div>
                <span className="text-zinc-100 font-semibold">45%</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-sm bg-[#a3e635]" />
                  <span className="text-zinc-300 font-medium">Ambassador</span>
                </div>
                <span className="text-zinc-100 font-semibold">30%</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-sm bg-[#FFD23F]" />
                  <span className="text-zinc-300 font-medium">Advocate</span>
                </div>
                <span className="text-zinc-100 font-semibold">25%</span>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>

      {/* Recent Activity Section */}
      <Card className="bg-[#181818] border-[#262626] rounded-xl shadow-md overflow-hidden">
        <CardContent className="p-6 space-y-4">
          <div>
            <h4 className="text-lg font-semibold text-white">Recent Activity</h4>
          </div>
          
          <div className="border border-[#262626] rounded-xl overflow-hidden divide-y divide-[#262626]">
            {activities.map((act, idx) => (
              <div key={idx} className="p-5 flex items-start justify-between gap-4 hover:bg-[#202020]/20 transition-colors">
                <div className="space-y-1.5">
                  <h5 className="text-sm font-semibold text-zinc-100">{act.title}</h5>
                  <p className="text-xs text-zinc-400 font-light leading-relaxed">{act.description}</p>
                </div>
                <span className="text-[10px] text-zinc-500 font-medium bg-zinc-800/40 border border-zinc-700/30 px-2 py-0.5 rounded-full shrink-0">
                  {act.time}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
