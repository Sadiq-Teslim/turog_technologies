import React from "react";
import { Grid, Stack } from "@mantine/core";
import { TotalCollectionsPanelWidget } from "../../widgets/settlement/TotalCollectionsPanelWidget";
import { TotalValuePaidOutPanelWidget } from "../../widgets/settlement/TotalValuePaidOutPanelWidget";
import { PayoutErrorsPanelWidget } from "../../widgets/settlement/PayoutErrorsPanelWidget";
import { AvgPayoutTimePanelWidget } from "../../widgets/settlement/AvgPayoutTimePanelWidget";
import { CriticalPayoutFailureWidget } from "../../widgets/settlement/CriticalPayoutFailureWidget";
import { PayoutErrorBreakdownWidget } from "../../widgets/settlement/PayoutErrorBreakdownWidget";
import { HighPriorityPayoutErrorsWidget } from "../../widgets/settlement/HighPriorityPayoutErrorsWidget";
import { PartnerSettlementStatusWidget } from "../../widgets/settlement/PartnerSettlementStatusWidget";
import { CollectionFailureRateByChannelWidget } from "../../widgets/settlement/CollectionFailureRateByChannelWidget";

export const Settlement = () => {
  return (
    <Grid gutter={32}>
      <Grid.Col span={12}>
        <Stack gap="lg">
          <Grid gutter={24}>
            <Grid.Col span={{ base: 12, md: 3 }}>
              <TotalCollectionsPanelWidget />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 3 }}>
              <TotalValuePaidOutPanelWidget />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 3 }}>
              <PayoutErrorsPanelWidget />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 3 }}>
              <AvgPayoutTimePanelWidget />
            </Grid.Col>
          </Grid>
          <CriticalPayoutFailureWidget />
        </Stack>
      </Grid.Col>
      <Grid.Col span={{ base: 12, md: 6 }}>
        <PayoutErrorBreakdownWidget />
      </Grid.Col>
      <Grid.Col span={{ base: 12, md: 6 }}>
        <CollectionFailureRateByChannelWidget />
      </Grid.Col>
      <Grid.Col span={{ base: 12, md: 6 }}>
        <HighPriorityPayoutErrorsWidget />
      </Grid.Col>
      <Grid.Col span={{ base: 12, md: 6 }}>
        <div style={{ minHeight: 380 }}>
          <PartnerSettlementStatusWidget />
        </div>
      </Grid.Col>
    </Grid>
  );
};
