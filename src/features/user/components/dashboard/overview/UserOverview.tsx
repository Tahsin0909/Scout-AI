"use client";

import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useAuth } from "@/features/auth/hooks/useAuth";
import UserMetrics from "@/features/metricksandcharts/components/UserMetrics";
import UserRecentTrip from "@/features/triptrax/components/UserRecentTrip";

export default function UserOverview() {
  const { profile } = useAuth();

  const userName = profile
    ? `${profile.firstName ?? ""} ${profile.lastName ?? ""}`.trim()
    : "Marshall White";

  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Welcome Back, {userName} 👋
          </h1>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
            Ready for your next adventure? Scout AI is standing by to help you
            build your next journey.
          </p>
        </div>

        <Button variant="primary">
          <Plus className="mr-2 h-4 w-4" />
          Create new trip plan
        </Button>
      </div>

      {/* Stats */}
      <UserMetrics />

      {/* Recent Trips */}
      <UserRecentTrip />
    </div>
  );
}