import { PayoutErrorBreakdownPanelProps } from "../../types/settlement/PayoutErrorBreakdownPanel.types";

export const useFetchPayoutErrorBreakdown = (): PayoutErrorBreakdownPanelProps => {
  return {
    props: {
      title: {
        label: "Breakdown of Payout Errors by Reason",
        icon: { name: "Warning2", color: "#F43F5E" },
      },
      children: null,
    },
    chart: {
      categories: ["Invalid Account", "System Error", "Liquidity Hold"],
      series: [75, 25, 25],
      colors: ["#F43F5E", "#6B7280", "#F59E0B"],
      withLegend: false,
      title: "Current failure analysis",
    },
    subtitle: "Current failure analysis",
    insight:
      "Data quality issue needs immediate attention. Invalid Account Details represents 60% of all failures.",
  };
};
