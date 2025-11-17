
import React from "react";
import { Box, Group, Text } from "@mantine/core";
import { OverviewPanel } from "../../shared/components/OverviewPanel";
import { useFetchAvgPayoutTimePanel } from "../../shared/hooks/settlement/useFetchAvgPayoutTimePanel";

export const AvgPayoutTimePanelWidget = () => {
  const props = useFetchAvgPayoutTimePanel();
  return <OverviewPanel {...avgPayoutTimePanelData(props)} />;
};

const avgPayoutTimePanelData = (props) => {
  const { title, value, subValue } = props;
  const children = (
    <Group gap={5}>
      <Text fz={28} fw={700} c="red.6" lh={1.1} ff="Inter, sans-serif">
        {value}
      </Text>
    </Group>
  );
  const footer = {
    leftsection: (
      <Group gap={5}>
        <Text fz={13} fw={600} c="gray.8" ff="Inter, sans-serif">
          {subValue}
        </Text>
      </Group>
    ),
  };
  return { title, children, footer };
};
