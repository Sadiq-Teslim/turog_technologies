import React from "react";

import { Grid, Stack } from "@mantine/core";
import { ClientActivityWidget } from "../../widgets/retail-engine/ClientActivityWidget";
import { SummaryPanel } from "../../shared/components/SummaryPanel";
import { SummaryCardsProps } from "../../shared/types/SummaryCardsProps.types";
import { useFetchTPPStatus } from "../../shared/hooks/open-banking/useFetchTPPStatus";
import { useFetchApiHealth } from "../../shared/hooks/open-banking/useFetchApiHealth";
import { useFetchTopTPP } from "../../shared/hooks/open-banking/useFetchTopTPP";
import { ApiCallWidget } from "../../widgets/open-banking/ApiCallWidget";
import { ActiveConsentWidget } from "../../widgets/open-banking/ActiveConsentWidget";
import { RecentAlarmsWidget } from "../../widgets/open-banking/RecentAlarmsWidget";

export const OpenBanking = () => {
  const TPPStatusData: SummaryCardsProps =
    useFetchTPPStatus();
  const ApiHealthData: SummaryCardsProps = useFetchApiHealth();
  const TopTPPData: SummaryCardsProps = useFetchTopTPP();

  return (
    <>
      <Stack gap={"lg"}>
        <Grid>
          <Grid.Col span={{ base: 12, lg: 8 }}>
            <Stack gap={"lg"}>
              <ApiCallWidget />
              <ActiveConsentWidget/>
            </Stack>
          </Grid.Col>
          <Grid.Col span={{ base: 12, lg: 4 }}>
            <Stack gap={"lg"}>
              <SummaryPanel {...ApiHealthData} />
              <SummaryPanel {...TopTPPData} /> 
              <SummaryPanel {...TPPStatusData} /> 
            </Stack>
          </Grid.Col>
        </Grid>

        {/* Second Row - Recent Alarms */}
        <Grid>
          <Grid.Col span={12}>
            <RecentAlarmsWidget />
          </Grid.Col>
        </Grid>
      </Stack>
    </>
  );
};
