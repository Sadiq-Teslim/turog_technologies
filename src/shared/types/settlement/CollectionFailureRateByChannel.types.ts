import { PanelTitleProps } from "@adiba-banking-cloud/backoffice/build/typings/components/panels/simple/Simple.types";

export interface CollectionFailureRateByChannelPanelProps {
  title: PanelTitleProps;
  subtitle: string;
  chart: {
    colors: string[];
    series: number[][];
    xAxisLabel: string[];
  };
  insight: string;
}
