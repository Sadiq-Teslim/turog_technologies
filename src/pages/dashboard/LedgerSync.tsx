import { Grid } from "@mantine/core";
import React from "react";
import { ConnectionStatusWidget } from "../../widgets/ledgersync/ConnectionStatusWidget";
import { SynchronizationStatusWidget } from "../../widgets/ledgersync/SynchronizationStatusWidget";
import { SyncedRecordsWidget } from "../../widgets/ledgersync/SyncedRecordsWidget";
import { SyncDurationWidget } from "../../widgets/ledgersync/SyncDurationWidget";
import { SyncVolumeSeriesWidget } from "../../widgets/ledgersync/SyncVolumeSeriesWidget";
import { SynchronizationHistoryWidget } from "../../widgets/ledgersync/SynchronizationHistoryWidget";
import { SyncSuccessRateWidget } from "../../widgets/ledgersync/SyncSuccessRateWidget";

export const LedgerSyncPage = () => {
  return (
    <>
      <Grid>
        <Grid.Col span={{ base: 6, md: 3 }}>
          <ConnectionStatusWidget />
        </Grid.Col>
        <Grid.Col span={{ base: 6, md: 3 }}>
          <SynchronizationStatusWidget />
        </Grid.Col>
        <Grid.Col span={{ base: 6, md: 3 }}>
          <SyncedRecordsWidget />
        </Grid.Col>
        <Grid.Col span={{ base: 6, md: 3 }}>
          <SyncDurationWidget />
        </Grid.Col>
        <Grid.Col span={{ base: 12, lg: 6 }}>
          <SyncVolumeSeriesWidget />
        </Grid.Col>
        <Grid.Col span={{ base: 12, lg: 6 }}>
          <SyncSuccessRateWidget />
        </Grid.Col>
        <Grid.Col span={{ base: 12 }}>
          <SynchronizationHistoryWidget />
        </Grid.Col>
      </Grid>
    </>
  );
};
