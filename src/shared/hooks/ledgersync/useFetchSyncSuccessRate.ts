import { SyncSuccessRateProps } from "../../types/ledgersync/SyncSuccessRateProps";

export const useFetchSyncSuccessRate = (): SyncSuccessRateProps => {
  return {
    props: {
      title: {
        label: "Sync Success Rate",
        icon: { name: "Link", size: 12, color: "#494949" },
      },
      children: undefined,
    },
    data: {
      categories: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN"],
      series: [77, 72, 80, 77, 72, 80],
      colors: [
        "#0F193D",
        "#F5E5D3",
        "#C8700B",
        "#E6BF91",
        "#D99E5A",
        "#C8700B",
      ],
      title: "Loans",
      withLegend: {
        enabled: true,
        layout: "vertical",
        verticalAlign: "middle",
        align: "right",
      },
      centerValue: "1.05",
      centerLabel: "Average range",
    },
  };
};
