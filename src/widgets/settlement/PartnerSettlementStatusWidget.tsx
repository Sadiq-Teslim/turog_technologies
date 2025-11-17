import React from "react";
import { TitledPanel } from "@adiba-banking-cloud/backoffice";
import { Group, Text, Button, Stack, Box, Badge } from "@mantine/core";
import { useFetchPartnerSettlementStatus } from "../../shared/hooks/settlement/useFetchPartnerSettlementStatus";

export const PartnerSettlementStatusWidget = () => {
  const { title, partners, footerLabel } = useFetchPartnerSettlementStatus();
  return (
    <TitledPanel title={title}>
      <Stack gap={24} px="md" pb="md">
        {partners.map((partner) => (
          <Group key={partner.id} justify="space-between" align="center" mt={4}>
            <Group gap={10}>
              <Badge color={partner.statusColor} radius="xl" size="md" />
              <Text fw={700} fz={18}>{partner.name}</Text>
              <Text c={partner.statusTextColor} fz={16} fw={700}>
                {partner.statusLabel}
              </Text>
            </Group>
            <Text fw={700} fz={18} c={partner.statusTextColor}>{partner.amount}</Text>
          </Group>
        ))}
        <Button variant="subtle" color="gray" fullWidth mt="md" fw={700} size="md">
          {footerLabel}
        </Button>
      </Stack>
    </TitledPanel>
  );
};
