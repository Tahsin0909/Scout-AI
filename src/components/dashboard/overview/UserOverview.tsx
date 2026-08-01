"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Plus, Layers, Calendar, Edit3, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useAuth } from "@/features/auth/hooks/useAuth";

export default function UserOverview() {
  const { profile } = useAuth();
  const userName = profile ? `${profile.firstName} ${profile.lastName}` : "Marshall White";

  const stats = [
    {
      title: "Total Trips",
      value: "12",
      change: "+12%",
      icon: Layers,
    },
    {
      title: "Upcoming",
      value: "3",
      change: "+12%",
      icon: Calendar,
    },
    {
      title: "Drafts",
      value: "2",
      change: "+8.5%",
      icon: Edit3,
    },
    {
      title: "Completed",
      value: "9",
      change: "+8.5%",
      icon: CheckCircle2,
    },
  ];

  const recentTrips = [
    {
      id: "1",
      title: "Hiking Trip 1112",
      status: "In Progress",
      statusVariant: "in-progress",
      meta: "Submitted 2 days ago • Expected in 48h",
      actionText: "Undergoing Route Analysis",
      actionDisabled: true,
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=300&auto=format&fit=crop&q=80",
    },
    {
      id: "2",
      title: "Hiking Trip 1112",
      status: "In Progress",
      statusVariant: "in-progress",
      meta: "Submitted 2 days ago • Expected in 48h",
      actionText: "Undergoing Route Analysis",
      actionDisabled: true,
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=300&auto=format&fit=crop&q=80",
    },
    {
      id: "3",
      title: "Hiking Trip 1112",
      status: "Ready",
      statusVariant: "ready",
      meta: "Submitted 2 days ago • Expected in 48h",
      actionText: "View Details",
      actionDisabled: false,
      image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=300&auto=format&fit=crop&q=80",
    },
    {
      id: "4",
      title: "Hiking Trip 1112",
      status: "Completed",
      statusVariant: "completed",
      meta: "Submitted 2 days ago • Expected in 48h",
      actionText: "View Details",
      actionDisabled: false,
      image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=300&auto=format&fit=crop&q=80",
    },
    {
      id: "5",
      title: "Hiking Trip 1112",
      status: "Completed",
      statusVariant: "completed",
      meta: "Submitted 2 days ago • Expected in 48h",
      actionText: "View Details",
      actionDisabled: false,
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=300&auto=format&fit=crop&q=80",
    },
  ];

  return (
    <div className="w-full bg-[#1E1E21] text-zinc-100 min-h-screen p-6 md:p-8 space-y-8 font-sans">
      {/* Welcome Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1.5">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white flex items-center gap-2">
            Welcome Back, {userName} <span className="text-2xl">🖐</span>
          </h1>
          <p className="text-zinc-400 text-sm md:text-base max-w-2xl font-normal">
            Ready for your next adventure? Scout AI is standing by to help you build your next journey
          </p>
        </div>
        <button className="bg-[#F7C948] hover:bg-[#eab308] text-black font-semibold text-xs md:text-sm px-5 py-2.5 rounded-xl flex items-center gap-2 shadow-sm transition-all self-start md:self-auto cursor-pointer">
          <Plus className="w-4 h-4 stroke-[2.5]" />
          <span>Create new trip plan</span>
        </button>
      </div>

      {/* Stats Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, idx) => (
          <Card key={idx} className="bg-[#28282C] border-[#36363B] rounded-xl overflow-hidden shadow-md">
            <CardContent className="p-5 flex flex-col justify-between h-full space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-9 h-9 rounded-lg bg-[#333339] flex items-center justify-center">
                  <stat.icon className="w-4 h-4 text-zinc-300" />
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-zinc-400 text-xs md:text-sm font-medium">{stat.title}</span>
                  <span className="bg-[#05402E] text-[#10B981] text-xs font-semibold px-2 py-0.5 rounded-full border border-[#065F46]">
                    {stat.change}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Trips Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-white tracking-tight">Recent Trips</h2>
          <Link href="/user/travel-trips" className="text-[#F7C948] hover:underline text-sm font-medium">
            View all
          </Link>
        </div>

        <div className="space-y-3">
          {recentTrips.map((trip) => (
            <div
              key={trip.id}
              className="bg-[#28282C] border border-[#36363C] rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all hover:border-[#4F4F56]"
            >
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-neutral-800">
                  <Image
                    src={trip.image}
                    alt={trip.title}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2.5">
                    <h3 className="text-base font-semibold text-white">{trip.title}</h3>
                    {trip.statusVariant === "in-progress" && (
                      <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded bg-[#7F1D1D]/70 text-[#F87171] border border-[#991B1B]/60">
                        {trip.status}
                      </span>
                    )}
                    {trip.statusVariant === "ready" && (
                      <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded bg-[#064E3B]/70 text-[#34D399] border border-[#047857]/60">
                        {trip.status}
                      </span>
                    )}
                    {trip.statusVariant === "completed" && (
                      <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded bg-[#3F3F46]/80 text-zinc-200 border border-[#52525B]/60">
                        {trip.status}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-zinc-400">{trip.meta}</p>
                </div>
              </div>

              <div>
                {trip.actionDisabled ? (
                  <button
                    disabled
                    className="w-full sm:w-auto text-xs font-medium px-4 py-2.5 rounded-xl bg-[#212125] text-zinc-500 cursor-not-allowed border border-[#313136]"
                  >
                    {trip.actionText}
                  </button>
                ) : (
                  <button className="w-full sm:w-auto text-xs font-semibold px-4 py-2.5 rounded-xl bg-[#232328] hover:bg-[#2F2F35] text-[#F7C948] transition-colors border border-[#3F3F46] cursor-pointer">
                    {trip.actionText}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
