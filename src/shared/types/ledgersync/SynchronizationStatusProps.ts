import { PanelTitleProps } from "@adiba-banking-cloud/backoffice/build/typings/components/panels/simple/Simple.types";

export interface SynchronizationStatusProps {
  title: PanelTitleProps;
  lastSyncedAgo: string;
  syncStatus: string;
  nextSync: string;
}