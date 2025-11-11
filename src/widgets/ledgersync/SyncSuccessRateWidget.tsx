import React from "react";
import { useFetchSyncSuccessRate } from "../../shared/hooks/ledgersync/useFetchSyncSuccessRate";
import { DonutChart, TitledPanel } from "@adiba-banking-cloud/backoffice";

export const SyncSuccessRateWidget = () => {
  const {props, data} = useFetchSyncSuccessRate();
  return <TitledPanel {...props}>
    <DonutChart {...data} />
    </TitledPanel>;
};