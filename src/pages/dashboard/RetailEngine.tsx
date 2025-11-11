import React from "react";

import { Grid, Stack } from "@mantine/core";
import { ClientActivityWidget } from "../../widgets/retail-engine/ClientActivityWidget";
import { SummaryPanel } from "../../shared/components/SummaryPanel";
import { SummaryCardsProps } from "../../shared/types/SummaryCardsProps.types";
import { useFetchDemographicSummary } from "../../shared/hooks/retail-engine/useFetchDemographicSummary";
import { useFetchFinancialSummary } from "../../shared/hooks/retail-engine/useFetchFinancialSummary";
import { useFetchCardSummary } from "../../shared/hooks/retail-engine/useFetchCardSummary";
import { CashVelocityWidget } from "../../widgets/retail-engine/CashVelocityWidget";

export const RetailEnginePage = () => {
  const DemographicSummaryData: SummaryCardsProps =
    useFetchDemographicSummary();
  const FinancialSummaryData: SummaryCardsProps = useFetchFinancialSummary();
  const CardSummaryData: SummaryCardsProps = useFetchCardSummary();

  return (
    <>
      <Grid>
        <Grid.Col span={{ base: 12, lg: 8 }}>
          <Stack gap={"lg"}>
            <ClientActivityWidget />
            <CashVelocityWidget />
          </Stack>
        </Grid.Col>
        <Grid.Col span={{ base: 12, lg: 4 }}>
          <Stack>
            <SummaryPanel {...FinancialSummaryData} />
            <SummaryPanel {...CardSummaryData} />
            <SummaryPanel {...DemographicSummaryData} />
          </Stack>
        </Grid.Col>
      </Grid>
    </>
  );
};
