import React from "react";
import { TitledPanel } from "@adiba-banking-cloud/backoffice";
import { Group, Text, Button, Stack, Box } from "@mantine/core";
import { useFetchHighPriorityPayoutErrors } from "../../shared/hooks/settlement/useFetchHighPriorityPayoutErrors";

export const HighPriorityPayoutErrorsWidget = () => {
  const { title, errors, footerLabel } = useFetchHighPriorityPayoutErrors();
  return (
    <TitledPanel title={title}>
      <Stack gap="md" px="md" pb="md">
        {errors.map((err) => (
          <Box key={err.id} bg={err.bgColor} p="md" style={{ borderRadius: 8 }}>
            <Group justify="space-between" align="center">
              <Group gap={6}>
                {/* <Box w={8} h={8} bg={err.statusColor} style={{ borderRadius: 999 }} /> */}
                <Text fw={700}>{err.code}</Text>
                <Text c="gray.6" fz="sm">
                  {err.partner} - {err.description}
                </Text>
              </Group>
              <Text fw={700}>{err.amount}</Text>
            </Group>
            <Group mt={8}>
              <Button color={err.statusColor} radius="md" size="xs" fw={500} variant={err.status === "details" ? "outline" : "filled"}>
                {err.statusLabel}
              </Button>
            </Group>
          </Box>
        ))}
        <Button variant="subtle" color="gray" fullWidth mt="md" fw={500} size="sm">
          {footerLabel}
        </Button>
      </Stack>
    </TitledPanel>
  );
};
