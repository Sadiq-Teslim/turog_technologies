import React from "react";
import { Group, Stack, Text, Badge, Button, ActionIcon } from "@mantine/core";
import { AlarmItemProps } from "./AlarmList.types";

export const AlarmItem: React.FC<AlarmItemProps> = ({
  id,
  message,
  timestamp,
  severity,
  onInvestigate,
}) => {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "critical":
        return "red";
      case "warning":
        return "orange";
      case "info":
        return "blue";
      default:
        return "gray";
    }
  };

  const getBackgroundColor = (severity: string) => {
    switch (severity) {
      case "critical":
        return "#FEE2E2";
      case "warning":
        return "#FEF3C7";
      case "info":
        return "#DBEAFE";
      default:
        return "#F3F4F6";
    }
  };

  return (
    <Group
      justify="space-between"
      p="md"
      style={{
        backgroundColor: getBackgroundColor(severity),
        borderRadius: "8px",
      }}
    >
      <Group gap="sm" style={{ flex: 1 }}>
        <Badge size="sm" variant="dot" color={getSeverityColor(severity)} />
        <Stack gap={4} style={{ flex: 1 }}>
          <Text size="sm" fw={500}>
            {message}
          </Text>
          <Group gap="xs">
            <ActionIcon variant="transparent" size="xs" c="dimmed">
              <Text size="xs">⏱</Text>
            </ActionIcon>
            <Text size="xs" c="dimmed">
              {timestamp}
            </Text>
          </Group>
        </Stack>
      </Group>
      <Button
        variant="subtle"
        size="xs"
        color="gray"
        onClick={onInvestigate}
      >
        Investigate
      </Button>
    </Group>
  );
};
