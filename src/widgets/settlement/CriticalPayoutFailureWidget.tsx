import React from "react";
import { OverviewPanel } from "../../shared/components/OverviewPanel";
import { Button, Group, Stack, Text } from "@mantine/core";
import { useFetchCriticalPayoutFailure } from "../../shared/hooks/settlement/useFetchCriticalPayoutFailure";

export const CriticalPayoutFailureWidget = () => {
  const panel = useFetchCriticalPayoutFailure();
  return (
    <OverviewPanel
      title={{
        icon: panel.icon,
        label: panel.title,
      }}
      bg="#FFF1F2"
      style={{ border: "1px solid #F43F5E", borderRadius: 16 }}
      footer={{
        leftsection: (
          <Button color="red" radius="md" fw={500} onClick={panel.actions.errorLog}>
            Go to Error Log
          </Button>
        ),
        rightsection: (
          <Button color="gray" radius="md" fw={500} variant="outline" onClick={panel.actions.dataQualityReport}>
            View Data Quality Report
          </Button>
        ),
        withDivider: false,
        withSeparator: false,
      }}
    >
      <Stack gap={4}>
        <Text size="md" fw={500} c="#F43F5E">
          {panel.errorCount} Errors are blocking {panel.blockedValue} in Merchant Payouts.
        </Text>
        <Text size="md">
          <b>Top Reason:</b> {panel.reason} ({panel.reasonPercent}).
        </Text>
      </Stack>
    </OverviewPanel>
  );
}
