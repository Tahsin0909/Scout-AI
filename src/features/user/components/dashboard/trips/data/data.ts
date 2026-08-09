
interface TripRecord {
    id: string;
    name: string;
    email: string;
    membership: "Apex Elite" | "Summit" | "Basecamp" | "Trailhead";
    status: "Urgent" | "Pending" | "Approve";
    date: string;
    trips: string;
    avatarUrl?: string;
}

export const mockTrips: TripRecord[] = [
    {
        id: "TRP-1001",
        name: "Marcus Thorne",
        email: "m.thorne@apexlab.com",
        membership: "Apex Elite",
        status: "Approve",
        date: "Oct 12, 2023",
        trips: "02/05",
        avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=MarcusThorne"
    },
    {
        id: "TRP-1002",
        name: "Sarah Jenkins",
        email: "s.jenkins@apexlab.com",
        membership: "Summit",
        status: "Pending",
        date: "Oct 28, 2023",
        trips: "03/05",
        avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=SarahJenkins"
    },
    {
        id: "TRP-1003",
        name: "David Chen",
        email: "d.chen@apexlab.com",
        membership: "Basecamp",
        status: "Urgent",
        date: "Oct 28, 2023",
        trips: "03/05",
        avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=DavidChen"
    },
    {
        id: "TRP-1004",
        name: "Elena Rodriguez",
        email: "e.rodriguez@apexlab.com",
        membership: "Trailhead",
        status: "Approve",
        date: "Sep 15, 2023",
        trips: "01/05",
        avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=ElenaRodriguez"
    },
    {
        id: "TRP-1005",
        name: "Liam Carter",
        email: "l.carter@apexlab.com",
        membership: "Summit",
        status: "Pending",
        date: "Sep 15, 2023",
        trips: "01/05",
        avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=LiamCarter"
    },
    {
        id: "TRP-1006",
        name: "Sophia Martinez",
        email: "s.martinez@apexlab.com",
        membership: "Basecamp",
        status: "Approve",
        date: "Aug 02, 2023",
        trips: "04/05",
        avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=SophiaMartinez"
    },
    {
        id: "TRP-1007",
        name: "Jackson Reed",
        email: "j.reed@apexlab.com",
        membership: "Trailhead",
        status: "Approve",
        date: "Aug 02, 2023",
        trips: "04/05",
        avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=JacksonReed"
    },
    {
        id: "TRP-1008",
        name: "Olivia Park",
        email: "o.park@apexlab.com",
        membership: "Apex Elite",
        status: "Urgent",
        date: "Nov 05, 2023",
        trips: "05/05",
        avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=OliviaPark"
    },
    {
        id: "TRP-1009",
        name: "Noah Williams",
        email: "n.williams@apexlab.com",
        membership: "Summit",
        status: "Pending",
        date: "Nov 12, 2023",
        trips: "02/05",
        avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=NoahWilliams"
    },
    {
        id: "TRP-1010",
        name: "Ava Thompson",
        email: "a.thompson@apexlab.com",
        membership: "Basecamp",
        status: "Approve",
        date: "Nov 20, 2023",
        trips: "03/05",
        avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=AvaThompson"
    }
]