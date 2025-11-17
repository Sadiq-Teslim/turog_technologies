import { StatPanelProps } from "../../types/settlement/StatPanel.types";

export const useFetchPayoutErrorsPanel = (): StatPanelProps => {
  return {
    title: {
      label: "Payout Errors",
      icon: { name: "Warning2", color: "#F43F5E" },
    },
    value: 125,
    subValue: "Risk Value: ₦250M",
    children: null,
  };
};
