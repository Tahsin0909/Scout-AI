"use client";

import React, { useState, useMemo } from "react";
import { 
  Search, 
  Eye, 
  Download, 
  ChevronLeft, 
  ChevronRight, 
  ChevronDown 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// Interface for Payment Record
interface PaymentRecord {
  id: string;
  transactionId: string;
  name: string;
  email: string;
  membership: "Apex Elite" | "Pathfinder Elite" | "Summit" | "Basecamp" | "Trailhead";
  date: string;
  amount: string;
  status: "Successful" | "Pending" | "Failed";
  avatarUrl?: string;
}

export default function PaymentManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [dateRangeFilter, setDateRangeFilter] = useState("Last 30 Days");
  const [membershipFilter, setMembershipFilter] = useState("All Tiers");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [currentPage, setCurrentPage] = useState(2); // Default to Page 2 as in screenshot
  const itemsPerPage = 10;

  // Generate mock payment database (50 records for 5 pages of pagination)
  const mockPayments: PaymentRecord[] = useMemo(() => {
    const list: PaymentRecord[] = [];
    
    for (let i = 1; i <= 50; i++) {
      let transactionId = "#TXN-98234-AD";
      let name = "Marcus Thorne";
      let email = "m.thorne@apexlab.com";
      let membership: "Apex Elite" | "Pathfinder Elite" | "Summit" | "Basecamp" | "Trailhead" = "Pathfinder Elite";
      let date = "Oct 12, 2023";
      let amount = "$499.00";
      let status: "Successful" | "Pending" | "Failed" = "Successful";

      if (i <= 10) {
        // Page 1 data
        transactionId = `#TXN-76342-BC`;
        name = i % 2 === 0 ? "Sarah Jenkins" : "David Chen";
        email = i % 2 === 0 ? "s.jenkins@apexlab.com" : "d.chen@apexlab.com";
        membership = i % 2 === 0 ? "Summit" : "Basecamp";
        date = "Oct 28, 2023";
        amount = i % 2 === 0 ? "$299.00" : "$199.00";
        status = i % 4 === 0 ? "Failed" : "Successful";
      } else if (i > 10 && i <= 20) {
        // Page 2 data - MATCHES SCREENSHOT EXACTLY
        transactionId = "#TXN-98234-AD";
        name = "Marcus Thorne";
        email = "m.thorne@apexlab.com";
        // First row on page 2 is Apex Elite, others are Pathfinder Elite
        membership = i === 11 ? "Apex Elite" : "Pathfinder Elite";
        date = "Oct 12, 2023";
        amount = "$499.00";
        status = "Successful";
      } else if (i > 20 && i <= 30) {
        // Page 3 data
        transactionId = `#TXN-54129-XY`;
        name = i % 2 === 0 ? "Elena Rodriguez" : "Liam Carter";
        email = i % 2 === 0 ? "e.rodriguez@apexlab.com" : "l.carter@apexlab.com";
        membership = i % 2 === 0 ? "Trailhead" : "Summit";
        date = "Sep 15, 2023";
        amount = "$149.00";
        status = i % 5 === 0 ? "Pending" : "Successful";
      } else {
        // Page 4 and 5 data
        transactionId = `#TXN-32984-ZT`;
        name = i % 2 === 0 ? "Sophia Martinez" : "Jackson Reed";
        email = i % 2 === 0 ? "s.martinez@apexlab.com" : "j.reed@apexlab.com";
        membership = i % 2 === 0 ? "Basecamp" : "Trailhead";
        date = "Aug 02, 2023";
        amount = "$199.00";
        status = "Successful";
      }

      list.push({
        id: `PAY-${1000 + i}`,
        transactionId,
        name,
        email,
        membership,
        date,
        amount,
        status,
        avatarUrl: `https://api.dicebear.com/7.x/avataaars/svg?seed=${name}-${i}`,
      });
    }
    return list;
  }, []);

  // Filtered Payments
  const filteredPayments = useMemo(() => {
    return mockPayments.filter((record) => {
      const matchesSearch = 
        record.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        record.transactionId.toLowerCase().includes(searchTerm.toLowerCase()) ||
        record.email.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesMembership = 
        membershipFilter === "All Tiers" || record.membership === membershipFilter;
      
      const matchesStatus = 
        statusFilter === "All Status" || record.status === statusFilter;

      return matchesSearch && matchesMembership && matchesStatus;
    });
  }, [mockPayments, searchTerm, membershipFilter, statusFilter]);

  // Total pages
  const totalPages = Math.ceil(filteredPayments.length / itemsPerPage) || 1;

  // Paginated Payments
  const paginatedPayments = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredPayments.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredPayments, currentPage]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Status Badge Styling Helper
  const getStatusBadgeStyle = (status: string) => {
    switch (status) {
      case "Successful":
        return "text-[#38d792] bg-[#009a57]/15 border-[#009a57]/20";
      case "Pending":
        return "text-amber-400 bg-amber-500/10 border-amber-500/20";
      case "Failed":
        return "text-[#ff6467] bg-[#ff6467]/10 border-[#ff6467]/20";
      default:
        return "text-zinc-400 bg-zinc-800/50 border-zinc-700/30";
    }
  };

  return (
    <div className="w-full bg-[#111111] text-zinc-100 min-h-screen p-6 md:p-8 space-y-8 font-sans">
      
      {/* Page Header */}
      <div className="space-y-2">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
          Payments Management
        </h1>
        <p className="text-zinc-400 text-sm md:text-base max-w-2xl font-light">
          Financial records and transaction history.
        </p>
      </div>

      {/* Filter and Search Section */}
      <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4">
        
        {/* Search Input */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-zinc-500" />
          <input
            type="text"
            placeholder="Name or ID ..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full pl-11 pr-4 py-2.5 bg-[#181818] border border-[#262626] rounded-xl text-zinc-200 text-sm placeholder-zinc-500 focus:outline-none focus:border-[#FFD23F] focus:ring-1 focus:ring-[#FFD23F] transition-all"
          />
        </div>

        {/* Dropdowns Filters */}
        <div className="flex flex-wrap items-center gap-4 self-start xl:self-auto">
          
          {/* Date Range Select */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-zinc-400 font-medium">Date Range</span>
            <div className="relative">
              <select
                value={dateRangeFilter}
                onChange={(e) => setDateRangeFilter(e.target.value)}
                className="appearance-none bg-[#181818] border border-[#262626] rounded-xl px-4 py-2.5 pr-10 text-xs font-semibold text-zinc-200 focus:outline-none focus:border-[#FFD23F] cursor-pointer"
              >
                <option value="Last 30 Days">Last 30 Days</option>
                <option value="Last 7 Days">Last 7 Days</option>
                <option value="Last 12 Months">Last 12 Months</option>
              </select>
              <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-zinc-400 pointer-events-none" />
            </div>
          </div>

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
                <option value="Pathfinder Elite">Pathfinder Elite</option>
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
                <option value="Successful">Successful</option>
                <option value="Pending">Pending</option>
                <option value="Failed">Failed</option>
              </select>
              <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-zinc-400 pointer-events-none" />
            </div>
          </div>

        </div>

      </div>

      {/* Payments Table */}
      <Card className="bg-[#181818] border-[#262626] rounded-xl shadow-md overflow-hidden">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-[#262626] text-zinc-500 font-medium text-xs tracking-wider uppercase bg-[#141313]/40">
                  <th className="px-6 py-4">Transaction ID</th>
                  <th className="px-6 py-4">Name</th>
                  <th className="px-6 py-4">Membership</th>
                  <th className="px-6 py-4">Dates</th>
                  <th className="px-6 py-4">Amount</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#262626]/50">
                {paginatedPayments.length > 0 ? (
                  paginatedPayments.map((record) => (
                    <tr key={record.id} className="hover:bg-[#202020]/30 transition-colors">
                      
                      {/* Transaction ID */}
                      <td className="px-6 py-4 text-zinc-400 font-mono text-sm">
                        {record.transactionId}
                      </td>

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

                      {/* Membership text */}
                      <td className="px-6 py-4 text-zinc-300 text-sm">
                        {record.membership}
                      </td>

                      {/* Date */}
                      <td className="px-6 py-4 text-zinc-400 text-sm">
                        {record.date}
                      </td>

                      {/* Amount */}
                      <td className="px-6 py-4 text-white text-sm font-medium">
                        {record.amount}
                      </td>

                      {/* Status Badge */}
                      <td className="px-6 py-4">
                        <span className={`px-2.5 py-1 text-xs font-semibold rounded-md border ${getStatusBadgeStyle(record.status)}`}>
                          {record.status}
                        </span>
                      </td>

                      {/* Action Icons */}
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          <button className="p-2 hover:bg-zinc-800 hover:text-white rounded-lg text-zinc-400 transition cursor-pointer" title="View Transaction">
                            <Eye className="w-4.5 h-4.5" />
                          </button>
                          <button className="p-2 hover:bg-zinc-800 hover:text-white rounded-lg text-zinc-400 transition cursor-pointer" title="Download Invoice">
                            <Download className="w-4.5 h-4.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={7} className="px-6 py-12 text-center text-zinc-500">
                      No records found matching the filter criteria.
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
