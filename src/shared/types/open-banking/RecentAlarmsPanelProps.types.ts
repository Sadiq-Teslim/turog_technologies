import { TitledPanelProps } from "@adiba-banking-cloud/backoffice/build/typings/components/panels/simple/Simple.types";

export interface AlarmItem {
  id: string;
  message: string;
  timestamp: string;
  severity: "critical" | "warning" | "info";
}

export interface RecentAlarmsPanelProps {
  props: TitledPanelProps;
  alarms: AlarmItem[];
}
