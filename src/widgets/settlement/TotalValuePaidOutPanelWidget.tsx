
import React from "react";
import { Box, Group, Text } from "@mantine/core";
import { OverviewPanel } from "../../shared/components/OverviewPanel";
import { useFetchTotalValuePaidOutPanel } from "../../shared/hooks/settlement/useFetchTotalValuePaidOutPanel";

export const TotalValuePaidOutPanelWidget = () => {
  const props = useFetchTotalValuePaidOutPanel();
  return <OverviewPanel {...totalValuePaidOutPanelData(props)} />;
};

const totalValuePaidOutPanelData = (props) => {
  const { title, value, subValue } = props;
  const children = (
    <Group gap={5}>
      <Text fz={28} fw={700} c="dark" lh={1.1} ff="Inter, sans-serif">
        {value}
      </Text>
    </Group>
  );
  const footer = {
    leftsection: (
      <Group gap={5}>
        <Text fz={13} fw={600} c="orange.5" ff="Inter, sans-serif">
          {subValue}
        </Text>
      </Group>
    ),
  };
  return { title, children, footer };
};
