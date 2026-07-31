"use client";

import React, { useState, useMemo } from "react";
import { 
  Search, 
  Eye, 
  Trash2, 
  Ban, 
  ChevronLeft, 
  ChevronRight, 
  ChevronDown 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Interface for User
interface User {
  id: string;
  name: string;
  email: string;
  membership: "Apex Elite" | "Summit" | "Basecamp" | "Trailhead";
  status: "Active" | "Suspended" | "Inactive";
  date: string;
  trips: string; // e.g., "02/05"
  avatarUrl?: string;
}

export default function UserManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [membershipFilter, setMembershipFilter] = useState("All Tiers");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [currentPage, setCurrentPage] = useState(2); // Page 2 selected by default as in screenshot
  const itemsPerPage = 10;

  // Generate 45 mock users to cover 5 pages of pagination
  const mockUsers: User[] = useMemo(() => {
    const list: User[] = [];
    
    // Exact users matching screenshot (10 rows of Marcus Thorne for Page 2)
    // We'll populate page 2 with Marcus Thornes, and pages 1, 3, 4, 5 with variations to showcase search/filters.
    for (let i = 1; i <= 50; i++) {
      // Determine pages to make it look realistic
      let name = "Marcus Thorne";
      let email = "m.thorne@apexlab.com";
      let membership: "Apex Elite" | "Summit" | "Basecamp" | "Trailhead" = "Apex Elite";
      let status: "Active" | "Suspended" | "Inactive" = "Active";
      let date = "Oct 12, 2023";
      let trips = "02/05";

      if (i <= 10) {
        // Page 1 users
        name = i % 2 === 0 ? "Sarah Jenkins" : "David Chen";
        email = i % 2 === 0 ? "s.jenkins@apexlab.com" : "d.chen@apexlab.com";
        membership = i % 2 === 0 ? "Summit" : "Basecamp";
        status = i % 3 === 0 ? "Suspended" : "Active";
        date = "Nov 04, 2023";
        trips = "04/05";
      } else if (i > 10 && i <= 20) {
        // Page 2 - EXACTLY like screenshot (Marcus Thorne, Apex Elite, Active, Oct 12, 2023, 02/05)
        name = "Marcus Thorne";
        email = "m.thorne@apexlab.com";
        membership = "Apex Elite";
        status = "Active";
        date = "Oct 12, 2023";
        trips = "02/05";
      } else if (i > 20 && i <= 30) {
        // Page 3 users
        name = i % 2 === 0 ? "Elena Rodriguez" : "Liam Carter";
        email = i % 2 === 0 ? "e.rodriguez@apexlab.com" : "l.carter@apexlab.com";
        membership = i % 2 === 0 ? "Trailhead" : "Summit";
        status = i % 5 === 0 ? "Inactive" : "Active";
        date = "Sep 28, 2023";
        trips = "01/05";
      } else {
        // Page 4 and 5 users
        name = i % 2 === 0 ? "Sophia Martinez" : "Jackson Reed";
        email = i % 2 === 0 ? "s.martinez@apexlab.com" : "j.reed@apexlab.com";
        membership = i % 2 === 0 ? "Basecamp" : "Trailhead";
        status = "Active";
        date = "Aug 15, 2023";
        trips = "03/05";
      }

      list.push({
        id: `USR-${1000 + i}`,
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

  // Filtered Users
  const filteredUsers = useMemo(() => {
    return mockUsers.filter((user) => {
      const matchesSearch = 
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.id.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesMembership = 
        membershipFilter === "All Tiers" || user.membership === membershipFilter;
      
      const matchesStatus = 
        statusFilter === "All Status" || user.status === statusFilter;

      return matchesSearch && matchesMembership && matchesStatus;
    });
  }, [mockUsers, searchTerm, membershipFilter, statusFilter]);

  // Total pages
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage) || 1;

  // Paginated Users
  const paginatedUsers = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredUsers.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredUsers, currentPage]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Status Badge Styling Helper
  const getStatusStyle = (status: string) => {
    switch (status) {
      case "Active":
        return "text-[#38d792] bg-[#38d792]/10 border-[#38d792]/20";
      case "Suspended":
        return "text-[#ff6467] bg-[#ff6467]/10 border-[#ff6467]/20";
      default:
        return "text-zinc-400 bg-zinc-800/50 border-zinc-700/30";
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
          User Management
        </h1>
        <p className="text-zinc-400 text-sm md:text-base max-w-2xl font-light">
          Manage all registered members and their subscription tiers.
        </p>
      </div>

      {/* Filter and Search Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        
        {/* Search Input */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-zinc-500" />
          <input
            type="text"
            placeholder="Name, email or ID ..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1); // Reset to page 1 on search
            }}
            className="w-full pl-11 pr-4 py-2.5 bg-[#181818] border border-[#262626] rounded-xl text-zinc-200 text-sm placeholder-zinc-500 focus:outline-none focus:border-[#FFD23F] focus:ring-1 focus:ring-[#FFD23F] transition-all"
          />
        </div>

        {/* Dropdowns Filters */}
        <div className="flex items-center gap-4 self-start md:self-auto">
          
          {/* Membership Select */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-zinc-400 font-medium">Membership</span>
            <div className="relative">
              <select
                value={membershipFilter}
                onChange={(e) => {
                  setMembershipFilter(e.target.value);
                  setCurrentPage(1);
                }}
                className="appearance-none bg-[#181818] border border-[#262626] rounded-xl px-4 py-2.5 pr-10 text-xs font-semibold text-zinc-200 focus:outline-none focus:border-[#FFD23F] cursor-pointer"
              >
                <option value="All Tiers">All Tiers</option>
                <option value="Apex Elite">Apex Elite</option>
                <option value="Summit">Summit</option>
                <option value="Basecamp">Basecamp</option>
                <option value="Trailhead">Trailhead</option>
              </select>
              <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-zinc-400 pointer-events-none" />
            </div>
          </div>

          {/* Status Select */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-zinc-400 font-medium">Status</span>
            <div className="relative">
              <select
                value={statusFilter}
                onChange={(e) => {
                  setStatusFilter(e.target.value);
                  setCurrentPage(1);
                }}
                className="appearance-none bg-[#181818] border border-[#262626] rounded-xl px-4 py-2.5 pr-10 text-xs font-semibold text-zinc-200 focus:outline-none focus:border-[#FFD23F] cursor-pointer"
              >
                <option value="All Status">All Status</option>
                <option value="Active">Active</option>
                <option value="Suspended">Suspended</option>
                <option value="Inactive">Inactive</option>
              </select>
              <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-zinc-400 pointer-events-none" />
            </div>
          </div>

        </div>

      </div>

      {/* Users Table */}
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
                {paginatedUsers.length > 0 ? (
                  paginatedUsers.map((user) => {
                    const [currentTrips, totalTrips] = user.trips.split("/");
                    return (
                      <tr key={user.id} className="hover:bg-[#202020]/30 transition-colors">
                        {/* Name Column with Avatar */}
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3.5">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={user.avatarUrl}
                              alt={user.name}
                              className="w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700/50"
                            />
                            <div className="flex flex-col">
                              <span className="font-semibold text-zinc-200 text-sm">{user.name}</span>
                              <span className="text-zinc-500 text-xs mt-0.5">{user.email}</span>
                            </div>
                          </div>
                        </td>

                        {/* Membership Badge */}
                        <td className="px-6 py-4">
                          <span className={`px-2.5 py-1 text-xs font-semibold rounded-md border ${getMembershipStyle(user.membership)}`}>
                            {user.membership}
                          </span>
                        </td>

                        {/* Status */}
                        <td className="px-6 py-4">
                          <span className="text-zinc-300 text-sm font-medium">
                            {user.status}
                          </span>
                        </td>

                        {/* Date */}
                        <td className="px-6 py-4 text-zinc-400 text-sm">
                          {user.date}
                        </td>

                        {/* Trips */}
                        <td className="px-6 py-4 text-sm font-medium">
                          <span className="text-white">{currentTrips}</span>
                          <span className="text-zinc-500">/{totalTrips}</span>
                        </td>

                        {/* Action Icons */}
                        <td className="px-6 py-4 text-right">
                          <div className="flex items-center justify-end gap-1.5">
                            <button className="p-2 hover:bg-zinc-800 hover:text-white rounded-lg text-zinc-400 transition cursor-pointer" title="View User">
                              <Eye className="w-4.5 h-4.5" />
                            </button>
                            <button className="p-2 hover:bg-zinc-800 hover:text-red-400 rounded-lg text-zinc-400 transition cursor-pointer" title="Delete User">
                              <Trash2 className="w-4.5 h-4.5" />
                            </button>
                            <button className="p-2 hover:bg-zinc-800 hover:text-orange-400 rounded-lg text-zinc-400 transition cursor-pointer" title="Suspend User">
                              <Ban className="w-4.5 h-4.5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan={6} className="px-6 py-12 text-center text-zinc-500">
                      No users found matching the filter criteria.
                    </td>
                  </tr>
                )}
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
