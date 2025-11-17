
import React from "react";
import { Box, Group, Text } from "@mantine/core";
import { OverviewPanel } from "../../shared/components/OverviewPanel";
import { useFetchPayoutErrorsPanel } from "../../shared/hooks/settlement/useFetchPayoutErrorsPanel";

export const PayoutErrorsPanelWidget = () => {
  const props = useFetchPayoutErrorsPanel();
  return <OverviewPanel {...payoutErrorsPanelData(props)} />;
};

const payoutErrorsPanelData = (props) => {
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
        <Text fz={13} fw={600} c="red.6" ff="Inter, sans-serif">
          {subValue}
        </Text>
      </Group>
    ),
  };
  return { title, children, footer };
};
