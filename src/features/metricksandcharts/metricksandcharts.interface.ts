export interface IMetricksandcharts {
  id: string;
}

export type TimeRange = "7d" | "30d" | "12m";

export interface BarChartData {
  label: string;
  value: number;
  isCurrent?: boolean;
  tooltip?: string;
}

export interface DistributionData {
  label: string;
  value: number;
  percentage: number;
  color: string;
}