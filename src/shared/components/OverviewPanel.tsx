import React from "react";
import { OverviewPanelProps } from "../types/OverviewPanelProps.types";
import { Icons, SimplePanel } from "@adiba-banking-cloud/backoffice";
import { Box, Divider, Group, Space, Stack, Text, Title } from "@mantine/core";

const CONTAINER_GAP = 5;

export const OverviewPanel = ({ ...props }: OverviewPanelProps) => {
  return (
    <SimplePanel {...props}>
      <Stack align="stretch">
        <Group gap={CONTAINER_GAP} mih={24} wrap="nowrap">
          <Icons {...props.title?.icon} variant="Outline" />
          <Text fz={"sm"} fw={300}>
            {props.title?.label}
          </Text>
          <Space flex={1} />
        </Group>
        <Group justify="space-between" gap={CONTAINER_GAP} mih={35} wrap="nowrap">
          <>{props.children}</>
        </Group>
        <Group justify="space-between" mih={24}>
          <Group gap={CONTAINER_GAP} align="flex-start">
            <>{props.footer?.leftsection}</>
          </Group>
          <Divider visibleFrom="lg" orientation="horizontal" flex={1} variant="dashed" hidden={!props.footer?.withDivider}/>
          <Divider visibleFrom="lg" hidden={!props.footer?.withSeparator} orientation="vertical"/>
          <Group gap={CONTAINER_GAP} align="flex-start"  wrap="nowrap">
            <>{props.footer?.rightsection}</>
          </Group>
        </Group>
      </Stack>
    </SimplePanel>
  );
};
