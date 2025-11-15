import React from "react";
import { Stack } from "@mantine/core";
import { AlarmListProps } from "./AlarmList.types";
import { AlarmItem } from "./AlarmItem";

export const AlarmList: React.FC<AlarmListProps> = ({ alarms }) => {
  return (
    <Stack gap="sm">
      {alarms.map((alarm) => (
        <AlarmItem key={alarm.id} {...alarm} />
      ))}
    </Stack>
  );
};
