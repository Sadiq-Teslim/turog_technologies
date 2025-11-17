import React from "react";
import { TitledPanel } from "@adiba-banking-cloud/backoffice";
import { Group, Text, Button, Stack, Box, Badge } from "@mantine/core";
import { useFetchPartnerSettlementStatus } from "../../shared/hooks/settlement/useFetchPartnerSettlementStatus";

export const PartnerSettlementStatusWidget = () => {
  const { title, partners, footerLabel } = useFetchPartnerSettlementStatus();
  return (
    <TitledPanel title={title}>
      <Stack gap="md" px="md" pb="md">
        {partners.map((partner) => (
          <Group key={partner.id} justify="space-between" align="center">
            <Group gap={6}>
              <Badge color={partner.statusColor} radius="xl" size="sm" />
              <Text fw={700}>{partner.name}</Text>
              <Text c={partner.statusTextColor} fz="sm">
                {partner.statusLabel}
              </Text>
            </Group>
            <Text fw={700} c={partner.statusTextColor}>{partner.amount}</Text>
          </Group>
        ))}
        <Button variant="subtle" color="gray" fullWidth mt="md" fw={500} size="sm">
          {footerLabel}
        </Button>
      </Stack>
    </TitledPanel>
  );
};
