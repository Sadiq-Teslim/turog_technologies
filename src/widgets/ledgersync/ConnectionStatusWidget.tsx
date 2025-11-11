import React from "react";

import { Icons } from "@adiba-banking-cloud/backoffice";
import { Group, Title, Text, UnstyledButton, Button, Box } from "@mantine/core";
import { ConnectionStatusProps } from "../../shared/types/ledgersync/ConnectionStatusProps";
import { OverviewPanelProps } from "../../shared/types/OverviewPanelProps.types";
import { useFetchConnectionStatus } from "../../shared/hooks/ledgersync/useFetchConnectionStatus";
import { OverviewPanel } from "../../shared/components/OverviewPanel";
import { IconsProps } from "@adiba-banking-cloud/backoffice/build/typings/components/general/icons/Icons.types";

export const ConnectionStatusWidget = () => {
  const connectionProps = useFetchConnectionStatus();
  return <OverviewPanel {...connectionStatusPanelData(connectionProps)} />;
};

const connectionStatusPanelData = ({
  ...props
}: ConnectionStatusProps): OverviewPanelProps => {
  const {
    title,
    status,
    lastSyncedAgo,
    leftSynced,
    rightSynced,
    leftSyncedStatus,
    rightSyncedStatus,
  } = props;
  const statusObj = {
    healthy: {
      icon: "TickCircle",
      color: "green",
      label: "Healthy", //TODO: translate
    },
    unhealthy: {
      icon: "CloseCircle",
      color: "red",
      label: "Unhealthy", //TODO: translate
    },
    connecting: {
      icon: "Clock",
      color: "#494949",
      label: "Connecting", //TODO: translate
    },
  };
  const leftStatusColor = leftSyncedStatus === "up" ? "green" : "red";
  const rightStatusColor = rightSyncedStatus === "up" ? "green" : "red";
  const children = (
    <>
      <Group gap={5}>
        <Box
          visibleFrom="lg"
          w={16}
          h={16}
          bg={statusObj[status].color}
          display="inline-block"
          style={{ borderRadius: "50%" }}
          mr={5}
        />
        <Title order={3} c={statusObj[status].color}>
          {statusObj[status].label}
        </Title>
      </Group>
      <Group gap={5}>
        <Icons name="Clock" size={12} color={"#494949"} />
        <Text fz={"xs"} fw={300} c={"dimmed"}>
          {lastSyncedAgo}
        </Text>
      </Group>
    </>
  );
  const footer = {
    leftsection: (
      <>
        <Box visibleFrom="lg">
          <Icons name="Driver2" />
        </Box>
        <Text fz={"xs"} c={"dimmed"} fw={400}>
          {leftSynced.label}
        </Text>
        <Icons {...leftSynced.icon} variant="Bold" color={leftStatusColor} />
      </>
    ),
    rightsection: (
      <>
        <Box visibleFrom="lg">
          <Icons name="Driver2" />
        </Box>
        <Text fz={"xs"} c={"dimmed"} fw={400}>
          {rightSynced.label}
        </Text>
        <Icons {...rightSynced.icon} variant="Bold" color={rightStatusColor} />
      </>
    ),
    withDivider: true,
  };

  return { title, children, footer };
};
