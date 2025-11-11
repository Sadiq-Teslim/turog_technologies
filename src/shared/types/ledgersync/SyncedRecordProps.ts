import { PanelTitleProps } from "@adiba-banking-cloud/backoffice/build/typings/components/panels/simple/Simple.types";

export interface SyncedRecordProps {
  title: PanelTitleProps;
  records: number;
  errors: number;
  retries: number;
  unresolved: number;
}