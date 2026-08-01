"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { 
  Search, 
  Compass, 
  Layers, 
  Calendar, 
  Edit3, 
  CheckCircle2, 
  ChevronLeft, 
  ChevronRight,
  RotateCcw
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function UserTrips() {
  const [searchTerm, setSearchTerm] = useState("");
  const [membershipFilter, setMembershipFilter] = useState("All Tiers");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [currentPage, setCurrentPage] = useState(2);

  // Metrics Data
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

  // All trips dataset
  const initialTrips = [
    {
      id: "TRIP-1112",
      title: "Hiking Trip 1112",
      status: "In Progress",
      statusVariant: "in-progress",
      tier: "Apex Elite",
      meta: "Submitted 2 days ago • Expected in 48h",
      actionText: "Waiting for human preview",
      actionDisabled: true,
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=300&auto=format&fit=crop&q=80",
    },
    {
      id: "TRIP-1113",
      title: "Hiking Trip 1112",
      status: "In Progress",
      statusVariant: "in-progress",
      tier: "Summit",
      meta: "Submitted 2 days ago • Expected in 48h",
      actionText: "Waiting for human preview",
      actionDisabled: true,
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=300&auto=format&fit=crop&q=80",
    },
    {
      id: "TRIP-1114",
      title: "Hiking Trip 1112",
      status: "Ready",
      statusVariant: "ready",
      tier: "Basecamp",
      meta: "Submitted 2 days ago • Expected in 48h",
      actionText: "View Details",
      actionDisabled: false,
      image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=300&auto=format&fit=crop&q=80",
    },
    {
      id: "TRIP-1115",
      title: "Hiking Trip 1112",
      status: "Completed",
      statusVariant: "completed",
      tier: "Apex Elite",
      meta: "Submitted 2 days ago • Expected in 48h",
      actionText: "View Details",
      actionDisabled: false,
      image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=300&auto=format&fit=crop&q=80",
    },
    {
      id: "TRIP-1116",
      title: "Hiking Trip 1112",
      status: "Completed",
      statusVariant: "completed",
      tier: "Trailhead",
      meta: "Submitted 2 days ago • Expected in 48h",
      actionText: "View Details",
      actionDisabled: false,
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=300&auto=format&fit=crop&q=80",
    },
    {
      id: "TRIP-1117",
      title: "Hiking Trip 1112",
      status: "Completed",
      statusVariant: "completed",
      tier: "Summit",
      meta: "Submitted 2 days ago • Expected in 48h",
      actionText: "View Details",
      actionDisabled: false,
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=300&auto=format&fit=crop&q=80",
    },
    {
      id: "TRIP-1118",
      title: "Hiking Trip 1112",
      status: "Completed",
      statusVariant: "completed",
      tier: "Basecamp",
      meta: "Submitted 2 days ago • Expected in 48h",
      actionText: "View Details",
      actionDisabled: false,
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=300&auto=format&fit=crop&q=80",
    },
    {
      id: "TRIP-1119",
      title: "Hiking Trip 1112",
      status: "Completed",
      statusVariant: "completed",
      tier: "Apex Elite",
      meta: "Submitted 2 days ago • Expected in 48h",
      actionText: "View Details",
      actionDisabled: false,
      image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=300&auto=format&fit=crop&q=80",
    },
    {
      id: "TRIP-1120",
      title: "Hiking Trip 1112",
      status: "Completed",
      statusVariant: "completed",
      tier: "Trailhead",
      meta: "Submitted 2 days ago • Expected in 48h",
      actionText: "View Details",
      actionDisabled: false,
      image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=300&auto=format&fit=crop&q=80",
    },
    {
      id: "TRIP-1121",
      title: "Hiking Trip 1112",
      status: "Completed",
      statusVariant: "completed",
      tier: "Summit",
      meta: "Submitted 2 days ago • Expected in 48h",
      actionText: "View Details",
      actionDisabled: false,
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=300&auto=format&fit=crop&q=80",
    },
  ];

  // Filtering Logic
  const filteredTrips = useMemo(() => {
    return initialTrips.filter((trip) => {
      const matchesSearch =
        trip.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        trip.id.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesMembership =
        membershipFilter === "All Tiers" || trip.tier === membershipFilter;
      const matchesStatus =
        statusFilter === "All Status" || trip.status === statusFilter;
      return matchesSearch && matchesMembership && matchesStatus;
    });
  }, [searchTerm, membershipFilter, statusFilter]);

  const handleResetFilters = () => {
    setSearchTerm("");
    setMembershipFilter("All Tiers");
    setStatusFilter("All Status");
  };

  return (
    <div className="w-full bg-[#1E1E21] text-zinc-100 min-h-screen p-6 md:p-8 space-y-8 font-sans">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1.5">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            My Trips
          </h1>
          <p className="text-zinc-400 text-sm md:text-base max-w-2xl font-normal">
            View, manage, and track all of your adventure packages in one place.
          </p>
        </div>
        <button className="bg-[#F7C948] hover:bg-[#eab308] text-black font-semibold text-xs md:text-sm px-5 py-2.5 rounded-xl flex items-center gap-2 shadow-sm transition-all self-start md:self-auto cursor-pointer">
          <Compass className="w-4 h-4 stroke-[2.5]" />
          <span>Plan with Scout AI</span>
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

      {/* Filter and Search Bar */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pt-2">
        <h2 className="text-xl font-bold text-white tracking-tight">All Trips</h2>

        <div className="flex flex-wrap items-center gap-3">
          {/* Search input */}
          <div className="relative min-w-[240px] flex-1 sm:flex-initial">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Name or ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#28282C] border border-[#3A3A40] text-xs text-white placeholder:text-zinc-500 rounded-xl pl-9 pr-4 py-2.5 focus:outline-none focus:border-zinc-500"
            />
          </div>

          {/* Membership dropdown */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-zinc-400 font-medium hidden sm:inline">Membership</span>
            <select
              value={membershipFilter}
              onChange={(e) => setMembershipFilter(e.target.value)}
              className="bg-[#28282C] border border-[#3A3A40] text-xs text-zinc-300 rounded-xl px-3 py-2.5 focus:outline-none focus:border-zinc-500 cursor-pointer"
            >
              <option value="All Tiers">All Tiers</option>
              <option value="Apex Elite">Apex Elite</option>
              <option value="Summit">Summit</option>
              <option value="Basecamp">Basecamp</option>
              <option value="Trailhead">Trailhead</option>
            </select>
          </div>

          {/* Status dropdown */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-zinc-400 font-medium hidden sm:inline">Status</span>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="bg-[#28282C] border border-[#3A3A40] text-xs text-zinc-300 rounded-xl px-3 py-2.5 focus:outline-none focus:border-zinc-500 cursor-pointer"
            >
              <option value="All Status">All Status</option>
              <option value="In Progress">In Progress</option>
              <option value="Ready">Ready</option>
              <option value="Completed">Completed</option>
            </select>
          </div>

          {/* Reset Filters button */}
          {(searchTerm || membershipFilter !== "All Tiers" || statusFilter !== "All Status") && (
            <button
              onClick={handleResetFilters}
              className="text-[#F7C948] hover:underline text-xs font-semibold flex items-center gap-1.5 ml-1 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset Filters
            </button>
          )}
        </div>
      </div>

      {/* Trips List Section */}
      <div className="space-y-3">
        {filteredTrips.length === 0 ? (
          <div className="bg-[#28282C] border border-[#3A3A40] rounded-2xl p-12 text-center text-zinc-400 space-y-2">
            <p className="text-base font-semibold text-white">No trips found</p>
            <p className="text-xs text-zinc-500">Try adjusting your filters or search term.</p>
          </div>
        ) : (
          filteredTrips.map((trip) => (
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
          ))
        )}
      </div>

      {/* Pagination Bar */}
      <div className="flex items-center justify-center gap-2 pt-6">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className="w-8 h-8 rounded-lg bg-[#28282C] border border-[#3A3A40] flex items-center justify-center text-zinc-400 hover:text-white hover:bg-[#333339] transition-colors cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {[1, 2, 3, 4, 5].map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`w-8 h-8 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              currentPage === page
                ? "bg-[#F7C948] text-black shadow-sm"
                : "bg-[#28282C] border border-[#3A3A40] text-zinc-400 hover:text-white hover:bg-[#333339]"
            }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, 5))}
          className="w-8 h-8 rounded-lg bg-[#28282C] border border-[#3A3A40] flex items-center justify-center text-zinc-400 hover:text-white hover:bg-[#333339] transition-colors cursor-pointer"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
