import { Category } from "../types/explore";

export const CATEGORIES: Category[] = [
  {
    id: "national-park",
    label: "National Parks",
    color: "forest",
    description: "Federally protected parks managed by the NPS.",
  },
  {
    id: "national-forest",
    label: "National Forests",
    color: "summit",
    description: "Multi-use forest land managed by the USFS.",
  },
  {
    id: "state-park",
    label: "State Parks",
    color: "trail",
    description: "Parks managed by individual state agencies.",
  },
  {
    id: "attraction",
    label: "Sightseeing",
    color: "clay",
    description: "Landmarks, viewpoints, and other points of interest.",
  },
];
