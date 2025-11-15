export interface AlarmItemProps {
  id: string;
  message: string;
  timestamp: string;
  severity: "critical" | "warning" | "info";
  onInvestigate?: () => void;
}

export interface AlarmListProps {
  alarms: AlarmItemProps[];
}
