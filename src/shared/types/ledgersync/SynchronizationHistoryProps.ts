import { TitledPanelProps } from "@adiba-banking-cloud/backoffice/build/typings/components/panels/simple/Simple.types";
import { SimpleTableProps } from "@adiba-banking-cloud/backoffice/build/typings/components/tables/simple/Simple.types";

export interface SynchronizationHistoryProps {
  props: TitledPanelProps;
  data: SimpleTableProps;
}

export interface SynchronizationHistoryItems {
  timestamp: string;
  status: string;
  source: string;
  target: string;
  records: number;
  duration: number;
}
