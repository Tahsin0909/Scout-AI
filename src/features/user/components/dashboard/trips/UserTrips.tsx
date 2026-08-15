"use client";


import {
  Compass
} from "lucide-react";

import { Button } from "@/components/ui/button";
import AllUserTrips from "@/features/triptrax/components/AllUserTrps";


export default function UserTrips() {

  return (
    <div className="w-full space-y-8">
      {/* Header */}
      <div
        className="
            relative flex flex-col gap-5
            md:flex-row md:items-center md:justify-between
          "
      >
        <div className="space-y-2">
          <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            My Trips
          </h1>

          <p className="max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
            View, manage, and track all of your adventure packages in one
            place.
          </p>
        </div>

        <Button
          variant="primary"
          className="
              h-11 self-start
              rounded-xl px-5
              shadow-sm
              transition-all
              hover:-translate-y-0.5
              hover:shadow-md
              md:self-auto
            "
        >
          <Compass className="mr-2 h-4 w-4" />
          Plan with Scout AI
        </Button>
      </div>
      {/* Trips */}
      <AllUserTrips />
    </div>
  );
}