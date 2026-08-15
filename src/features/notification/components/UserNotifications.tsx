import {
    Bell,
    CircleCheck,
    CreditCard,
    Info,
    MapPin,
    TriangleAlert,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

type NotificationType =
    | "trip"
    | "success"
    | "warning"
    | "payment"
    | "info"
    | "general";

type NotificationGroup = "Today" | "Yesterday" | "Old";

interface NotificationItem {
    id: number;
    title: string;
    status: string;
    description: string;
    createdAt: string;
    type: NotificationType;
}

const notifications: NotificationItem[] = [
    {
        id: 1,
        title: "Trip Request Submitted",
        status: "Trip request received",
        description:
            "Your Colorado Rockies trip request has been successfully submitted and is waiting for review.",
        createdAt: "2026-08-11T10:30:00",
        type: "trip",
    },
    {
        id: 2,
        title: "Trip Package Ready",
        status: "Your trip package is ready",
        description:
            "Scout has completed your trip analysis. Your full route package is now available.",
        createdAt: "2026-08-11T08:15:00",
        type: "success",
    },
    {
        id: 3,
        title: "Weather Warning",
        status: "Severe weather detected",
        description:
            "A potential storm has been detected along your planned route. Review your trip safety information.",
        createdAt: "2026-08-10T19:20:00",
        type: "warning",
    },
    {
        id: 4,
        title: "Membership Updated",
        status: "Payment successful",
        description:
            "Your membership has been successfully renewed and your monthly trip credits are available.",
        createdAt: "2026-08-10T12:30:00",
        type: "payment",
    },
    {
        id: 5,
        title: "Trip Review Started",
        status: "Your trip is being reviewed",
        description:
            "Our expedition team has started reviewing your submitted trip requirements.",
        createdAt: "2026-08-06T16:12:00",
        type: "info",
    },
    {
        id: 6,
        title: "Scout AI Update",
        status: "New planning information available",
        description:
            "Scout has updated your trip recommendations based on your selected preferences.",
        createdAt: "2026-08-01T13:30:00",
        type: "general",
    },
];

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

const getNotificationGroup = (createdAt: string): NotificationGroup => {
    const today = getStartOfDay(new Date());

    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    const notificationDate = getStartOfDay(new Date(createdAt));

    if (notificationDate.getTime() === today.getTime()) {
        return "Today";
    }

    if (notificationDate.getTime() === yesterday.getTime()) {
        return "Yesterday";
    }

    return "Old";
};

const formatNotificationDate = (createdAt: string) => {
    return new Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
    }).format(new Date(createdAt));
};

const getGroupedNotifications = (items: NotificationItem[]) => {
    const groups: Record<NotificationGroup, NotificationItem[]> = {
        Today: [],
        Yesterday: [],
        Old: [],
    };

    const sortedNotifications = [...items].sort(
        (a, b) =>
            new Date(b.createdAt).getTime() -
            new Date(a.createdAt).getTime(),
    );

    sortedNotifications.forEach((notification) => {
        const group = getNotificationGroup(notification.createdAt);

        groups[group].push(notification);
    });

    return groups;
};

interface NotificationGroupProps {
    title: NotificationGroup;
    notifications: NotificationItem[];
}

const NotificationGroupSection = ({
    title,
    notifications,
}: NotificationGroupProps) => {
    if (notifications.length === 0) {
        return null;
    }

    return (
        <section>
            <h2 className="mb-4 text-sm font-semibold text-foreground">
                {title}
            </h2>

            <div className="relative">
                {/* Timeline */}
                <div className="absolute bottom-8 left-[5px] top-6 w-px bg-primary/30 sm:left-[9px]" />

                <div className="space-y-7">
                    {notifications.map((notification) => {
                        const Icon = getNotificationIcon(notification.type);

                        return (
                            <div key={notification.id} className="relative flex gap-4 sm:gap-6">
                                {/* Timeline Dot */}
                                <div className="relative z-10 mt-5 flex w-3 shrink-0 justify-center sm:w-5">
                                    <span className="h-2.5 w-2.5 rounded-full border-2 border-primary/20 bg-primary shadow-sm" />
                                </div>

                                {/* Notification */}
                                <div className="flex min-w-0 flex-1 flex-col gap-3 sm:flex-row sm:items-center">
                                    {/* Icon */}
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary">
                                        <Icon className="h-6 w-6" />
                                    </div>

                                    {/* Information */}
                                    <div className="min-w-0 flex-1">
                                        <h3 className="text-sm font-semibold text-foreground">
                                            {notification.title}
                                        </h3>

                                        <p className="mt-1 text-xs font-medium text-foreground">
                                            {notification.status}
                                        </p>

                                        <p className="mt-0.5 max-w-2xl text-[11px] leading-4 text-muted-foreground">
                                            {notification.description}
                                        </p>
                                    </div>

                                    {/* Date */}
                                    <div className="shrink-0 sm:ml-auto sm:pl-6">
                                        <p className="text-[11px] text-muted-foreground">
                                            {formatNotificationDate(notification.createdAt)}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

const UserNotifications = () => {
    const groupedNotifications = getGroupedNotifications(notifications);
    //todo: need to update type move to interface and its relevant file during integration

    return (
        <div>
            {/* Header */}
            <div className="relative space-y-2">
                <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                    Notifications
                </h1>

                <p className="max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                    Stay updated on your trips, Scout AI recommendations, safety alerts,
                    membership activity, and important account updates.
                </p>
            </div>

            {/* Notifications */}
            <Card className="mt-6 rounded-2xl border-border bg-card shadow-sm">
                <CardContent className="space-y-8 p-5 sm:p-6">
                    <NotificationGroupSection title="Today" notifications={groupedNotifications.Today} />

                    <NotificationGroupSection title="Yesterday" notifications={groupedNotifications.Yesterday} />

                    <NotificationGroupSection title="Old" notifications={groupedNotifications.Old} />
                </CardContent>
            </Card>
        </div>
    );
};

export default UserNotifications;