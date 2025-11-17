import { StatPanelProps } from "../../types/settlement/StatPanel.types";

export const useFetchAvgPayoutTimePanel = (): StatPanelProps => {
  return {
    title: {
      label: "Avg. Payout Time",
      icon: { name: "Clock", color: "#F43F5E" },
    },
    value: "15 Min",
    subValue: "Target: < 10 Min",
    children: null,
  };
};
