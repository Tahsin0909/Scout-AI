export const Notification = [
    {
        id: 1,
        title: "Trip Request Submitted",
        status: "Trip request received",
        description:
            "Your Colorado Rockies trip request has been successfully submitted and is waiting for review.",
        createdAt: "2026-08-11T10:30:00",
        type: "trip" as const,
        isRead: false,
    },
    {
        id: 2,
        title: "Trip Package Ready",
        status: "Your trip package is ready",
        description:
            "Scout has completed your trip analysis. Your full route package is now available.",
        createdAt: "2026-08-11T08:15:00",
        type: "success" as const,
        isRead: false,
    },
    {
        id: 3,
        title: "Weather Warning",
        status: "Severe weather detected",
        description:
            "A potential storm has been detected along your planned route.",
        createdAt: "2026-08-10T19:20:00",
        type: "warning" as const,
        isRead: true,
    },
    {
        id: 4,
        title: "Membership Updated",
        status: "Payment successful",
        description:
            "Your membership has been successfully renewed and your monthly trip credits are available.",
        createdAt: "2026-08-06T12:30:00",
        type: "payment" as const,
        isRead: true,
    },
];