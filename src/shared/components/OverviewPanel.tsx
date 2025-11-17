import React from "react";
import { OverviewPanelProps } from "../types/OverviewPanelProps.types";
import { SimplePanel } from "@adiba-banking-cloud/backoffice";
import { TrendUp, MoneySend, Warning2, Clock, InfoCircle } from "iconsax-react";
import { Box, Divider, Group, Space, Stack, Text, Title } from "@mantine/core";

const CONTAINER_GAP = 5;

export const OverviewPanel = ({ ...props }: OverviewPanelProps) => {
  return (
    <SimplePanel {...props}>
      <Stack align="stretch">
        <Group gap={CONTAINER_GAP} mih={24} wrap="nowrap">
          {props.title?.icon?.name === "TrendUp" && <TrendUp size={20} color={props.title?.icon?.color || "#22C55E"} />}
          {props.title?.icon?.name === "MoneySend" && <MoneySend size={20} color={props.title?.icon?.color || "#22C55E"} />}
          {props.title?.icon?.name === "Warning2" && <Warning2 size={20} color={props.title?.icon?.color || "#F59E0B"} />}
          {props.title?.icon?.name === "Clock" && <Clock size={20} color={props.title?.icon?.color || "#F59E0B"} />}
          {props.title?.icon?.name === "InfoCircle" && <InfoCircle size={20} color={props.title?.icon?.color || "#F43F5E"} />}
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
