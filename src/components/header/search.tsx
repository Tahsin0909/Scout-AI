"use client";

import { Search as SearchIcon } from "lucide-react";

import { Input } from "@/components/ui/input";

function Search() {
  return (
    <div className="relative w-full">
      <div className="relative mx-auto flex w-xs items-center">
        <SearchIcon
          size={16}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
        />

        <Input
          type="text"
          placeholder="Search..."
          className="rounded-lg pl-10"
        />
      </div>
    </div>
  );
}

export default Search;