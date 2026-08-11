"use client";

import {
  Bell,
  CircleCheck,
  CreditCard,
  Info,
  MapPin,
  TriangleAlert,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";


import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { Notification } from "./data/notofication.data";



//todo: need to update type move to interface and its relevant file during integration

type NotificationType =
  | "trip"
  | "success"
  | "warning"
  | "payment"
  | "info"
  | "general";

interface NotificationItem {
  id: number;
  title: string;
  status: string;
  description: string;
  createdAt: string;
  type: NotificationType;
  isRead: boolean;
}

const getNotificationIcon = (type: NotificationType) => {
  switch (type) {
    case "trip":
      return MapPin;

    case "success":
      return CircleCheck;

    case "warning":
      return TriangleAlert;

    case "payment":
      return CreditCard;

    case "info":
      return Info;

    default:
      return Bell;
  }
};

const getStartOfDay = (date: Date) => {
  const result = new Date(date);

  result.setHours(0, 0, 0, 0);

  return result;
};

const formatNotificationTime = (createdAt: string) => {
  const notificationDate = new Date(createdAt);
  const today = getStartOfDay(new Date());

  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  const notificationDay = getStartOfDay(notificationDate);

  const time = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
  }).format(notificationDate);

  if (notificationDay.getTime() === today.getTime()) {
    return time;
  }

  if (notificationDay.getTime() === yesterday.getTime()) {
    return "Yesterday";
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
  }).format(notificationDate);
};

const Notifications = ({
  className,
}: {
  className?: string;
}) => {
  const [notifications, setNotifications] = useState<NotificationItem[]>(
    Notification,
  );

  const unreadCount = notifications.filter(
    (item) => !item.isRead,
  ).length;

  const handleMarkAsRead = (id: number) => {
    setNotifications((previousNotifications) =>
      previousNotifications.map((notification) =>
        notification.id === id
          ? {
            ...notification,
            isRead: true,
          }
          : notification,
      ),
    );
  };

  return (
    <div className={cn("", className)}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button type="button" aria-label="Open notifications" className="relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-foreground transition-colors hover:bg-primary/10 hover:text-primary">
            <Bell className="size-5" />

            {unreadCount > 0 && (
              <>
                <span className="absolute end-1.5 top-1.5 z-10 h-2.5 w-2.5 animate-ping rounded-full bg-primary" />
                <span className="absolute end-1.5 top-1.5 z-10 h-2.5 w-2.5 rounded-full border-2 border-background bg-primary" />
              </>
            )}
          </button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" className="w-[calc(100vw-24px)] overflow-hidden rounded-xl border-border bg-popover p-0 shadow-lg sm:w-[400px]">
          {/* Header */}
          <div className="flex items-center justify-between gap-4 border-b border-border px-5 py-4">
            <div>
              <h3 className="text-base font-semibold text-foreground">
                Notifications
              </h3>

              <p className="mt-0.5 text-xs text-muted-foreground">
                Your latest trip and account updates.
              </p>
            </div>

            {unreadCount > 0 && (
              <Badge className="shrink-0 border border-primary/20 bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary hover:bg-primary/10">
                {unreadCount} new
              </Badge>
            )}
          </div>

          {/* Notification List */}
          <SimpleBar className="max-h-[380px]">
            <div className="divide-y divide-border">
              {notifications.length > 0 ? (
                notifications.map((item) => {
                  const Icon = getNotificationIcon(item.type);

                  return (
                    <button key={item.id} type="button" onClick={() => handleMarkAsRead(item.id)} className={cn("flex w-full items-start gap-3 px-5 py-4 text-left transition-colors hover:bg-primary/5", !item.isRead && "bg-primary/[0.03]")}>
                      {/* Icon */}
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>

                      {/* Content */}
                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-3">
                          <h5 className={cn("truncate text-sm text-foreground", !item.isRead ? "font-semibold" : "font-medium")}>
                            {item.title}
                          </h5>

                          <span className="shrink-0 whitespace-nowrap text-[10px] text-muted-foreground">
                            {formatNotificationTime(item.createdAt)}
                          </span>
                        </div>

                        <p className="mt-1 text-xs font-medium text-foreground">
                          {item.status}
                        </p>

                        <p className="mt-0.5 line-clamp-2 text-xs leading-5 text-muted-foreground">
                          {item.description}
                        </p>
                      </div>

                      {/* Unread */}
                      {!item.isRead && (
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                      )}
                    </button>
                  );
                })
              ) : (
                <div className="flex flex-col items-center justify-center px-6 py-12 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Bell className="h-5 w-5" />
                  </div>

                  <p className="mt-3 text-sm font-semibold text-foreground">
                    No notifications
                  </p>

                  <p className="mt-1 text-xs text-muted-foreground">
                    You&apos;re all caught up.
                  </p>
                </div>
              )}
            </div>
          </SimpleBar>

          {/* Footer */}
          <div className="border-t border-border p-4">
            <Button variant="primary" className="w-full" asChild>
              <Link href="/user/notifications">
                See All Notifications
              </Link>
            </Button>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Notifications;