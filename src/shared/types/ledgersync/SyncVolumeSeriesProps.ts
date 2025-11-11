import { SimpleChartProps } from "@adiba-banking-cloud/backoffice/build/typings/components/charts/column/Column.types";
import { TitledPanelProps } from "@adiba-banking-cloud/backoffice/build/typings/components/panels/simple/Simple.types";

export interface SyncVolumeSeriesProps {
  props: TitledPanelProps;
  data: SimpleChartProps;
  interval: [string, (value: string) => void];
  buttons: string[];
}
