"use client";

import React, { useState, useMemo } from "react";
import { 
  Eye, 
  ChevronLeft, 
  ChevronRight 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// Interface for Trip Record
interface TripRecord {
  id: string;
  name: string;
  email: string;
  membership: "Apex Elite" | "Summit" | "Basecamp" | "Trailhead";
  status: "Urgent" | "Pending" | "Approve";
  date: string;
  trips: string; // e.g., "02/05"
  avatarUrl?: string;
}

export default function TripPackages() {
  const [currentPage, setCurrentPage] = useState(2); // Default to Page 2 as in screenshot
  const itemsPerPage = 10;

  // Generate 50 mock records for 5 pages of pagination
  const mockTrips: TripRecord[] = useMemo(() => {
    const list: TripRecord[] = [];
    
    for (let i = 1; i <= 50; i++) {
      let name = "Marcus Thorne";
      let email = "m.thorne@apexlab.com";
      let membership: "Apex Elite" | "Summit" | "Basecamp" | "Trailhead" = "Apex Elite";
      let status: "Urgent" | "Pending" | "Approve" = "Approve";
      let date = "Oct 12, 2023";
      let trips = "02/05";

      if (i <= 10) {
        // Page 1 data
        name = i % 2 === 0 ? "Sarah Jenkins" : "David Chen";
        email = i % 2 === 0 ? "s.jenkins@apexlab.com" : "d.chen@apexlab.com";
        membership = i % 2 === 0 ? "Summit" : "Basecamp";
        status = i % 3 === 0 ? "Urgent" : i % 2 === 0 ? "Pending" : "Approve";
        date = "Oct 28, 2023";
        trips = "03/05";
      } else if (i > 10 && i <= 20) {
        // Page 2 data - MATCHES SCREENSHOT EXACTLY
        name = "Marcus Thorne";
        email = "m.thorne@apexlab.com";
        membership = "Apex Elite";
        date = "Oct 12, 2023";
        trips = "02/05";
        
        // Status breakdown: 3 Urgent, 4 Pending, 3 Approve
        if (i >= 11 && i <= 13) {
          status = "Urgent";
        } else if (i >= 14 && i <= 17) {
          status = "Pending";
        } else {
          status = "Approve";
        }
      } else if (i > 20 && i <= 30) {
        // Page 3 data
        name = i % 2 === 0 ? "Elena Rodriguez" : "Liam Carter";
        email = i % 2 === 0 ? "e.rodriguez@apexlab.com" : "l.carter@apexlab.com";
        membership = i % 2 === 0 ? "Trailhead" : "Summit";
        date = "Sep 15, 2023";
        status = i % 2 === 0 ? "Pending" : "Approve";
        trips = "01/05";
      } else {
        // Page 4 and 5 data
        name = i % 2 === 0 ? "Sophia Martinez" : "Jackson Reed";
        email = i % 2 === 0 ? "s.martinez@apexlab.com" : "j.reed@apexlab.com";
        membership = i % 2 === 0 ? "Basecamp" : "Trailhead";
        date = "Aug 02, 2023";
        status = "Approve";
        trips = "04/05";
      }

      list.push({
        id: `TRP-${1000 + i}`,
        name,
        email,
        membership,
        status,
        date,
        trips,
        avatarUrl: `https://api.dicebear.com/7.x/avataaars/svg?seed=${name}-${i}`,
      });
    }
    return list;
  }, []);

  const totalPages = Math.ceil(mockTrips.length / itemsPerPage) || 1;

  // Paginated Trips
  const paginatedTrips = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return mockTrips.slice(startIndex, startIndex + itemsPerPage);
  }, [mockTrips, currentPage]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Status Styling Helper
  const getStatusTextStyle = (status: "Urgent" | "Pending" | "Approve") => {
    switch (status) {
      case "Urgent":
        return "text-[#ff6467] font-semibold";
      case "Pending":
        return "text-[#FFD23F] font-semibold";
      case "Approve":
        return "text-[#38d792] font-semibold";
      default:
        return "text-zinc-400";
    }
  };

  // Membership Badge Styling Helper
  const getMembershipStyle = (membership: string) => {
    switch (membership) {
      case "Apex Elite":
        return "bg-[#38d792]/10 text-[#38d792] border-[#38d792]/20";
      case "Summit":
        return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
      case "Basecamp":
        return "bg-blue-500/10 text-blue-400 border-blue-500/20";
      case "Trailhead":
        return "bg-cyan-500/10 text-cyan-400 border-cyan-500/20";
      default:
        return "bg-zinc-800 text-zinc-400 border-zinc-700";
    }
  };

  return (
    <div className="w-full bg-[#111111] text-zinc-100 min-h-screen p-6 md:p-8 space-y-8 font-sans">
      
      {/* Page Header */}
      <div className="space-y-2">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
          Trip Packages
        </h1>
        <p className="text-zinc-400 text-sm md:text-base max-w-2xl font-light">
          Access your available trip packages, advance through membership.
        </p>
      </div>

      {/* Trips Table */}
      <Card className="bg-[#181818] border-[#262626] rounded-xl shadow-md overflow-hidden">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-[#262626] text-zinc-500 font-medium text-xs tracking-wider uppercase bg-[#141313]/40">
                  <th className="px-6 py-4">Name</th>
                  <th className="px-6 py-4">Membership</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Dates</th>
                  <th className="px-6 py-4">Trips</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#262626]/50">
                {paginatedTrips.map((record) => {
                  const [currentTrips, totalTrips] = record.trips.split("/");
                  return (
                    <tr key={record.id} className="hover:bg-[#202020]/30 transition-colors">
                      
                      {/* Name Column with Avatar */}
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3.5">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={record.avatarUrl}
                            alt={record.name}
                            className="w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700/50"
                          />
                          <div className="flex flex-col">
                            <span className="font-semibold text-zinc-200 text-sm">{record.name}</span>
                            <span className="text-zinc-500 text-xs mt-0.5">{record.email}</span>
                          </div>
                        </div>
                      </td>

                      {/* Membership Badge */}
                      <td className="px-6 py-4">
                        <span className={`px-2.5 py-1 text-xs font-semibold rounded-md border ${getMembershipStyle(record.membership)}`}>
                          {record.membership}
                        </span>
                      </td>

                      {/* Status (Urgent / Pending / Approve) */}
                      <td className="px-6 py-4 text-sm">
                        <span className={getStatusTextStyle(record.status)}>
                          {record.status}
                        </span>
                      </td>

                      {/* Date */}
                      <td className="px-6 py-4 text-zinc-400 text-sm">
                        {record.date}
                      </td>

                      {/* Trips */}
                      <td className="px-6 py-4 text-sm font-medium">
                        <span className="text-white">{currentTrips}</span>
                        <span className="text-zinc-500">/{totalTrips}</span>
                      </td>

                      {/* Action Icons */}
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end">
                          <button className="p-2 hover:bg-zinc-800 hover:text-white rounded-lg text-zinc-400 transition cursor-pointer" title="View Details">
                            <Eye className="w-4.5 h-4.5" />
                          </button>
                        </div>
                      </td>

                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Pagination Footer */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 pt-2 select-none">
          {/* Previous Arrow */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 bg-[#181818] border border-[#262626] hover:bg-zinc-800 rounded-lg text-zinc-400 disabled:opacity-40 disabled:hover:bg-[#181818] cursor-pointer disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="w-4.5 h-4.5" />
          </button>

          {/* Page Numbers */}
          {Array.from({ length: totalPages }, (_, idx) => idx + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`w-9.5 h-9.5 rounded-lg text-sm font-semibold transition-all border ${
                currentPage === page
                  ? "bg-[#FFD23F] text-black border-[#FFD23F] font-bold shadow-md"
                  : "bg-transparent text-zinc-400 border-transparent hover:bg-zinc-800 hover:text-white"
              } cursor-pointer`}
            >
              {page}
            </button>
          ))}

          {/* Next Arrow */}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2 bg-[#181818] border border-[#262626] hover:bg-zinc-800 rounded-lg text-zinc-400 disabled:opacity-40 disabled:hover:bg-[#181818] cursor-pointer disabled:cursor-not-allowed transition-colors"
          >
            <ChevronRight className="w-4.5 h-4.5" />
          </button>
        </div>
      )}

    </div>
  );
}
