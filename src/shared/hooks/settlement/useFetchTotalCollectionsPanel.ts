import { StatPanelProps } from "../../types/settlement/StatPanel.types";

export const useFetchTotalCollectionsPanel = (): StatPanelProps => {
  return {
    title: {
      label: "Total Collections",
      icon: { name: "TrendUp", color: "#22C55E" },
    },
    value: "₦98.2B",
    subValue: "↑ 8% YoY",
    children: null,
  };
};
