export interface IAdmindashboard {
  id: string;
}

export interface ITripPackage {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  membership: "Apex Elite" | "Summit" | "Basecamp" | "Trailhead";
  status: "Urgent" | "Pending" | "Approve";
  date: string;
  usedTrips: number;
  totalTrips: number;
  avatarUrl?: string;
}