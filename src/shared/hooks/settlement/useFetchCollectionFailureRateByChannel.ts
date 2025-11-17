import { CollectionFailureRateByChannelPanelProps } from "../../types/settlement/CollectionFailureRateByChannel.types";
import { PanelTitleProps } from "@adiba-banking-cloud/backoffice/build/typings/components/panels/simple/Simple.types";

export const useFetchCollectionFailureRateByChannel = (): CollectionFailureRateByChannelPanelProps => {
  const title: PanelTitleProps = {
    label: "Collection Failure Rate by Channel",
    icon: { name: "TrendUp", color: "#22C55E" },
  };

  const subtitle = "Success vs. Failure comparison";

  const chart = {
    colors: ["#22C55E", "#F43F5E"],
    series: [
      [98, 95, 97, 96], // Success
      [2, 5, 3, 4],    // Failure
    ],
    xAxisLabel: ["POS", "Web", "Direct Debit", "Mobile"],
  };

  const insight = "Insight: POS channel showing 2% failure spike since 10 AM today.";

  return {
    title,
    subtitle,
    chart,
    insight,
  };
};
