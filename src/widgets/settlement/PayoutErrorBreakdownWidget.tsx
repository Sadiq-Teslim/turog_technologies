import React from "react";
import { TitledPanel } from "@adiba-banking-cloud/backoffice";
import { DonutChart } from "@adiba-banking-cloud/backoffice";
import { CloudLightning } from "iconsax-react";
import { Box, Stack, Text, Alert, Group } from "@mantine/core";
import { useFetchPayoutErrorBreakdown } from "../../shared/hooks/settlement/useFetchPayoutErrorBreakdown";


export const PayoutErrorBreakdownWidget = () => {
  const panel = useFetchPayoutErrorBreakdown();
  return (
    <TitledPanel {...panel.props}>
      <Stack gap={0}>
        <Text size="sm" c="adiba.4" mb={8}>
          {panel.subtitle}
        </Text>
        <DonutChart {...panel.chart} />
        <Box mt={24}>
          <Alert
            color="yellow"
            radius="md"
            icon={<CloudLightning size={18} color="#F59E0B" />}
            styles={{
              root: { background: "#FFFBEB", border: "none" },
              icon: { marginTop: 2 },
            }}
          >
            <Group gap={4}>
              <Text size="sm" fw={500} c="#F59E0B">
                Insight:
              </Text>
              <Text size="sm" fw={400}>
                {panel.insight}
              </Text>
            </Group>
          </Alert>
        </Box>
      </Stack>
    </TitledPanel>
  );
}
