import React, { useState } from "react";
import { SyncVolumeSeriesProps } from "../../types/ledgersync/SyncVolumeSeriesProps";
import { TitledPanelProps } from "@adiba-banking-cloud/backoffice/build/typings/components/panels/simple/Simple.types";
import { SimpleChartProps } from "@adiba-banking-cloud/backoffice/build/typings/components/charts/column/Column.types";

export const useFetchSyncVolumeSeries = (): SyncVolumeSeriesProps => {
  const props: TitledPanelProps = {
    title: {
      label: "Sync Volume",
      icon: {
        name: "TrendUp",
        variant: "Outline",
      },
    },
    children: undefined,
  };

  const interval = useState<string>("Month"); //TODO: Translate

  const buttons = ["Month", "Week"];

  const data: SimpleChartProps = {
    yAxisLabel: "Synced Records",
    xAxisLabel: [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ], //TODO Translate
    series: [77, 122, 65, 77, 148, 280, 77, 122, 65, 77, 148, 280],
    color: "#C8700B",
    withLegend: true,
  };

  return { props, interval, buttons, data };
};
