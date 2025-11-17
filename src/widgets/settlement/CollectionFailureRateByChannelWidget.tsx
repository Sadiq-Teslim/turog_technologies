import React from "react";
import { TitledPanel, StackedColumn } from "@adiba-banking-cloud/backoffice";
import { Box, Text, Alert, Stack } from "@mantine/core";
import { useFetchCollectionFailureRateByChannel } from "../../shared/hooks/settlement/useFetchCollectionFailureRateByChannel";

export const CollectionFailureRateByChannelWidget = () => {
  const { title, subtitle, chart, insight } = useFetchCollectionFailureRateByChannel();
  return (
    <TitledPanel title={title}>
      <Stack gap="md" px="md" pb="md">
        <Text size="sm" c="adiba.4" mb={8}>{subtitle}</Text>
        <Box>
          <StackedColumn
            colors={chart.colors}
            series={chart.series}
            xAxisLabel={chart.xAxisLabel}
            yAxisLabel={["Success", "Failure"]}
            equalizer={false}
            withLegend={false}
          />
        </Box>
        <Alert color="yellow" radius="md" icon={null} mt="md">
          <Text fw={500} c="orange.7">
            {insight}
          </Text>
        </Alert>
      </Stack>
    </TitledPanel>
  );
};
