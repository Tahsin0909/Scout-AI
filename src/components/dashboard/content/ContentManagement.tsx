"use client";

import React, { useState, useMemo } from "react";
import { 
  Search, 
  ExternalLink, 
  Trash2, 
  Edit3, 
  ChevronLeft, 
  ChevronRight 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// Interface for Content Record
interface ContentRecord {
  id: string;
  title: string;
  publishedDate: string;
  sourceLink: string;
}

export default function ContentManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Mock content database (25 items to show pagination)
  const mockContents: ContentRecord[] = useMemo(() => {
    const titles = [
      "AI Face Morphing in Entertainment",
      "Deepfake Generation Techniques",
      "Generative AI in Travel Planning",
      "The Future of Outdoor Adventures",
      "Scout AI: Adventure Planner Launch",
      "Exploring the Wilderness with Machine Learning",
      "Advanced Navigation Systems for Hikers",
      "Top 10 Safe Travel Destinations in 2024",
      "How We Built Our Dynamic Routing Engine",
      "AI-Powered Tour Guides: A New Era",
      "Sustainability in Adventure Travel",
      "Gear Guide: Essential Gear for Overlanding",
      "Virtual Reality in Tourism Marketing",
      "Smart Packing: Travel Light and Efficient",
      "Understanding Hiker Demographics with Analytics",
      "Emergency Communications in the Backcountry",
      "The Role of Weather Forecasting in Expedition Planning",
      "Integrating Payment Gateways with Next.js",
      "Redefining Membership Tiers for Adventure Clubs",
      "Creating Interactive Map Experiences for Tourists"
    ];

    return titles.map((title, index) => ({
      id: `CNT-${2000 + index}`,
      title,
      publishedDate: "Oct 12, 2023",
      sourceLink: "https://example.com/content/" + (index + 1),
    }));
  }, []);

  // Filtered Content
  const filteredContents = useMemo(() => {
    return mockContents.filter((content) =>
      content.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [mockContents, searchTerm]);

  // Total pages calculation (using a fixed simulated total of 1248 to match screenshot, but listing dynamically)
  // Let's show actual pages for our mock list, but we can display the total results dynamically or hardcode it.
  // Actually, showing dynamic count is much better, but to keep the layout close:
  // "Showing 1 to 5 of 20 results" (for our real list). Let's make it dynamic!
  const totalItems = filteredContents.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;

  // Paginated Content
  const paginatedContents = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredContents.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredContents, currentPage]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage + 1;
  const endIndex = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <div className="w-full bg-[#111111] text-zinc-100 min-h-screen p-6 md:p-8 space-y-8 font-sans">
      
      {/* Page Header */}
      <div className="space-y-2">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
          Content Management
        </h1>
        <p className="text-zinc-400 text-sm md:text-base max-w-2xl font-light">
          Upload, organize, and track your partnership content with ease.
        </p>
      </div>

      {/* Content Management Action Bar */}
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-lg font-semibold text-white">Content Management</h3>
        <button className="bg-[#FFD23F] text-black font-semibold text-xs px-4 py-2.5 rounded-lg hover:bg-[#ffe066] transition cursor-pointer">
          Create New Content
        </button>
      </div>

      {/* Search Input Bar */}
      <div className="relative w-full">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-zinc-500" />
        <input
          type="text"
          placeholder="Search Content"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
          className="w-full pl-11 pr-4 py-2.5 bg-[#181818] border border-[#262626] rounded-xl text-zinc-200 text-sm placeholder-zinc-500 focus:outline-none focus:border-[#FFD23F] focus:ring-1 focus:ring-[#FFD23F] transition-all"
        />
      </div>

      {/* Content Table */}
      <Card className="bg-[#181818] border-[#262626] rounded-xl shadow-md overflow-hidden">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-[#262626] text-zinc-500 font-medium text-xs tracking-wider uppercase bg-[#141313]/40">
                  <th className="px-6 py-4">Title</th>
                  <th className="px-6 py-4">Published Date</th>
                  <th className="px-6 py-4">Source Link</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#262626]/50">
                {paginatedContents.length > 0 ? (
                  paginatedContents.map((record) => (
                    <tr key={record.id} className="hover:bg-[#202020]/30 transition-colors">
                      
                      {/* Title */}
                      <td className="px-6 py-4 text-zinc-200 font-medium text-sm max-w-xs md:max-w-md truncate">
                        {record.title}
                      </td>

                      {/* Published Date */}
                      <td className="px-6 py-4 text-zinc-400 text-sm">
                        {record.publishedDate}
                      </td>

                      {/* Source Link */}
                      <td className="px-6 py-4">
                        <a 
                          href={record.sourceLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-[#3b82f6] hover:text-blue-400 transition"
                        >
                          <ExternalLink className="w-4.5 h-4.5" />
                        </a>
                      </td>

                      {/* Action Icons */}
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          <button className="p-2 hover:bg-zinc-800 hover:text-white rounded-lg text-zinc-400 transition cursor-pointer" title="Delete Content">
                            <Trash2 className="w-4.5 h-4.5" />
                          </button>
                          <button className="p-2 hover:bg-zinc-800 hover:text-white rounded-lg text-zinc-400 transition cursor-pointer" title="Edit Content">
                            <Edit3 className="w-4.5 h-4.5" />
                          </button>
                        </div>
                      </td>

                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="px-6 py-12 text-center text-zinc-500">
                      No content items found matching the search criteria.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Pagination Footer */}
      {totalItems > 0 && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
          
          {/* Item Count Info */}
          <div className="text-zinc-500 text-xs">
            Showing {startIndex} to {endIndex} of {totalItems} results
          </div>

          {/* Pagination Buttons */}
          {totalPages > 1 && (
            <div className="flex items-center gap-2 select-none">
              {/* Previous Arrow */}
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-2 bg-[#181818] border border-[#262626] hover:bg-zinc-800 rounded-lg text-zinc-400 disabled:opacity-40 disabled:hover:bg-[#181818] cursor-pointer disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft className="w-4.5 h-4.5" />
              </button>

              {/* Page Numbers (Simple Layout) */}
              <button
                onClick={() => handlePageChange(1)}
                className={`w-9.5 h-9.5 rounded-lg text-sm font-semibold transition-all border ${
                  currentPage === 1
                    ? "bg-[#FFD23F] text-black border-[#FFD23F] font-bold shadow-md"
                    : "bg-transparent text-zinc-400 border-transparent hover:bg-zinc-800 hover:text-white"
                } cursor-pointer`}
              >
                1
              </button>

              {totalPages > 1 && (
                <button
                  onClick={() => handlePageChange(2)}
                  className={`w-9.5 h-9.5 rounded-lg text-sm font-semibold transition-all border ${
                    currentPage === 2
                      ? "bg-[#FFD23F] text-black border-[#FFD23F] font-bold shadow-md"
                      : "bg-transparent text-zinc-400 border-transparent hover:bg-zinc-800 hover:text-white"
                  } cursor-pointer`}
                >
                  2
                </button>
              )}

              {totalPages > 2 && (
                <button
                  onClick={() => handlePageChange(3)}
                  className={`w-9.5 h-9.5 rounded-lg text-sm font-semibold transition-all border ${
                    currentPage === 3
                      ? "bg-[#FFD23F] text-black border-[#FFD23F] font-bold shadow-md"
                      : "bg-transparent text-zinc-400 border-transparent hover:bg-zinc-800 hover:text-white"
                  } cursor-pointer`}
                >
                  3
                </button>
              )}

              {totalPages > 4 && (
                <span className="text-zinc-500 text-sm px-1">..</span>
              )}

              {totalPages > 3 && (
                <button
                  onClick={() => handlePageChange(totalPages)}
                  className={`w-9.5 h-9.5 rounded-lg text-sm font-semibold transition-all border ${
                    currentPage === totalPages
                      ? "bg-[#FFD23F] text-black border-[#FFD23F] font-bold shadow-md"
                      : "bg-transparent text-zinc-400 border-transparent hover:bg-zinc-800 hover:text-white"
                  } cursor-pointer`}
                >
                  {totalPages}
                </button>
              )}

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
      )}

    </div>
  );
}
