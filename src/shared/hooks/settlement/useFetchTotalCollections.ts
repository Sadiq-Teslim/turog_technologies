import { StatCardProps } from "../../types/StatCard.types";

export const useFetchTotalCollections = (): StatCardProps => {
  return {
    title: "Total Collections",
    icon: { name: "TrendUp", color: "#22C55E" },
    value: "₦98.2B",
    subValue: "↑ 8% YoY",
  };
};
