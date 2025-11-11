import React from "react";
import { EqualizerColumn, TitledPanel } from "@adiba-banking-cloud/backoffice";
import { useFetchSyncVolumeSeries } from "../../shared/hooks/ledgersync/useFetchSyncVolumeSeries";
import { SyncVolumeSeriesProps } from "../../shared/types/ledgersync/SyncVolumeSeriesProps";
import { SimpleChartProps } from "@adiba-banking-cloud/backoffice/build/typings/components/charts/column/Column.types";
import { SegmentedControl } from "@mantine/core";
import { TitledPanelProps } from "@adiba-banking-cloud/backoffice/build/typings/components/panels/simple/Simple.types";

export const SyncVolumeSeriesWidget = () => {
  const syncVolumeSeriesProps: SyncVolumeSeriesProps =
    useFetchSyncVolumeSeries();
  return (
    <TitledPanel {...SyncVolumeSeriesPanel(syncVolumeSeriesProps)}>
      <EqualizerColumn {...SyncVolumeSeriesData(syncVolumeSeriesProps)} />
    </TitledPanel>
  );
};

const SyncVolumeSeriesData = (
  props: SyncVolumeSeriesProps
): SimpleChartProps => {
  return {
    yAxisLabel: props.data.yAxisLabel,
    xAxisLabel: props.data.xAxisLabel,
    series: props.data.series,
    color: props.data.color,
    withLegend: props.data.withLegend,
  };
};

const SyncVolumeSeriesPanel = (
  props: SyncVolumeSeriesProps
): TitledPanelProps => {
  return {
    title: props.props.title,
    children: props.props.children,
    rightsection: (
      <SegmentedControl
        color="adiba"
        value={props.interval[0]}
        onChange={props.interval[1]}
        data={props.buttons}
      />
    ),
  };
};
