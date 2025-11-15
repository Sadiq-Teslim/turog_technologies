import React from "react";
import { TitledPanel } from "@adiba-banking-cloud/backoffice";
import { Text } from "@mantine/core";
import { useFetchRecentAlarms } from "../../shared/hooks/open-banking/useFetchRecentAlarms";
import { RecentAlarmsPanelProps } from "../../shared/types/open-banking/RecentAlarmsPanelProps.types";
import { AlarmList } from "../../shared/components/AlarmList";

export const RecentAlarmsWidget = () => {
  const RecentAlarmsPanel: RecentAlarmsPanelProps = useFetchRecentAlarms();

  return (
    <TitledPanel
      {...RecentAlarmsPanel.props}
      rightsection={
        <Text size="sm" c="blue" style={{ cursor: "pointer" }}>
          View All
        </Text>
      }
    >
      <AlarmList alarms={RecentAlarmsPanel.alarms} />
    </TitledPanel>
  );
};
