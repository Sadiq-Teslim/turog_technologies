import React from "react";

import { OverviewPanel } from "../../shared/components/OverviewPanel";
import { useFetchSynchronizationStatus } from "../../shared/hooks/ledgersync/useFetchSynchronizationStatus";
import { OverviewPanelProps } from "../../shared/types/OverviewPanelProps.types";
import { SynchronizationStatusProps } from "../../shared/types/ledgersync/SynchronizationStatusProps";
import { Box, Group, Text, Title } from "@mantine/core";
import { Icons } from "@adiba-banking-cloud/backoffice";

export const SynchronizationStatusWidget = () => {
  const syncStatusProps = useFetchSynchronizationStatus();
  return <OverviewPanel {...syncStatusPanelData(syncStatusProps)} />;
};

const syncStatusPanelData = ({
  ...props
}: SynchronizationStatusProps): OverviewPanelProps => {
  const statusObj = {
    success: {
      color: "green",
      label: "Pass", //TODO: translate
    },
    failed: {
      color: "red",
      label: "Fail", //TODO: translate
    },
  };
  const title = props.title;
  const children = (
    <>
      <Title order={3} c={statusObj[props.syncStatus].color}>
        <Box
          w={16}
          h={16}
          bg={statusObj[props.syncStatus].color}
          display="inline-block"
          style={{ borderRadius: "50%" }}
          mr={5}
        />
        {statusObj[props.syncStatus].label}
      </Title>
      <Group gap={5}>
        <Icons name="Clock" size={12} color={"#494949"} />
        <Text fz={"xs"} c={"dimmed"} fw={300}>
          {props.lastSyncedAgo}
        </Text>
      </Group>
    </>
  );
  const footer = {
    leftsection: (
      <Text fz={"xs"} c={"dimmed"} fw={300}>
        Next Sync:{" "}
        <Text component="span" fz={"xs"} c={"adiba"} fw={300}>
          {props.nextSync}
        </Text>
      </Text>
    ),
  };
  return { title, children, footer };
};
