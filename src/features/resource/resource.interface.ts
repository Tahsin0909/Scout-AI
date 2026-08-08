export interface IResource {
  id: string;
}

export type ResourceCategory = "Assets" | "Templates" | "Training";

export interface IPartnerResource {
  id: number;
  title: string;
  description: string;
  category: ResourceCategory;
  actionLabel: string;
  icon: React.ReactNode;
}