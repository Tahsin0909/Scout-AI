export interface ITriptrax {
  id: string;
}

export type TripStatusVariant = "in-progress" | "ready" | "completed";

export interface IUserRecentTrip {
  id: string;
  title: string;
  status: string;
  statusVariant: TripStatusVariant;
  meta: string;
  actionText: string;
  actionDisabled: boolean;
  image: string;
}