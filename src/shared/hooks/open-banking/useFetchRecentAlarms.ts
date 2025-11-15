import { TitledPanelProps } from "@adiba-banking-cloud/backoffice/build/typings/components/panels/simple/Simple.types";
import { AlarmItem, RecentAlarmsPanelProps } from "../../types/open-banking/RecentAlarmsPanelProps.types";

export const useFetchRecentAlarms = (): RecentAlarmsPanelProps => {
  const props = fakeProps;
  const alarms = fakeAlarms;
  return { props, alarms };
};

const fakeProps: TitledPanelProps = {
  title: {
    label: "Recent Alarms", //TODO: Translate
    icon: { name: "Danger" },
  },
  children: undefined,
};

const fakeAlarms: AlarmItem[] = [
  {
    id: "1",
    message: "API Latency > 2s detected on /accounts endpoint",
    timestamp: "2 min ago",
    severity: "critical",
  },
  {
    id: "2",
    message: "TPP [Fintech X] exceeded rate limit (500 req/min)",
    timestamp: "15 min ago",
    severity: "warning",
  },
  {
    id: "3",
    message: "502 Gateway Error - 12 occurrences in last hour",
    timestamp: "45 min ago",
    severity: "critical",
  },
  {
    id: "4",
    message: 'New TPP registration: "BudgetMaster"',
    timestamp: "1 hour ago",
    severity: "info",
  },
];
