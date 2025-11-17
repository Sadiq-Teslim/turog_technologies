
import React from "react";
import { Box, Group, Text } from "@mantine/core";
import { TrendUp } from "iconsax-react";
import { OverviewPanel } from "../../shared/components/OverviewPanel";
import { useFetchTotalCollectionsPanel } from "../../shared/hooks/settlement/useFetchTotalCollectionsPanel";

export const TotalCollectionsPanelWidget = () => {
  const props = useFetchTotalCollectionsPanel();
  return <OverviewPanel {...totalCollectionsPanelData(props)} />;
};

const totalCollectionsPanelData = (props) => {
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
        <TrendUp size={20} color="#22C55E" />
        <Text fz={13} fw={600} c="green.6" ff="Inter, sans-serif">
          {subValue}
        </Text>
      </Group>
    ),
  };
  return { title, children, footer };
};
