import React from "react";

import { OverviewPanel } from "../../shared/components/OverviewPanel";
import { useFetchSyncedRecords } from "../../shared/hooks/ledgersync/useFetchSyncedRecords";
import { SyncedRecordProps } from "../../shared/types/ledgersync/SyncedRecordProps";
import { OverviewPanelProps } from "../../shared/types/OverviewPanelProps.types";
import { Box, Group, Text, Title } from "@mantine/core";

export const SyncedRecordsWidget = () => {
  const SyncedRecordsProps = useFetchSyncedRecords();

  return <OverviewPanel {...SyncedRecordsWidgetData(SyncedRecordsProps)} />;
};

const SyncedRecordsWidgetData = ({
  ...props
}: SyncedRecordProps): OverviewPanelProps => {
  return {
    title: props.title,
    children: (
      <Group>
        <Title order={3}>{props.records}</Title>
        <Text fz={"xs"} c={"dimmed"} fw={300}>
        {"("}<Text component="span" fz={"sm"} fw={400} c={"adiba"}>
            {props.errors}
          </Text>{" "}errors) {/*TODO: translate*/}
        </Text>
      </Group>
    ),
    footer: {
      leftsection: (
        <Text fz={"xs"} c={"dimmed"} fw={300}>
          <Text component="span" fz={"sm"} fw={400} c={"adiba"}>
            {props.retries}
          </Text>{" "}
          retries
        </Text>
      ),
      rightsection: (
        <Text fz={"xs"} c={"dimmed"} fw={300}>
          <Text component="span" fz={"sm"} fw={400} c={"red"}>
            {props.unresolved}
          </Text>{" "}
          unresolved
        </Text>
      ),
      withSeparator: true,
    },
  };
};
