import React from "react";
import { useFetchSynchronizationHistory } from "../../shared/hooks/ledgersync/useFetchSynchronizationHistory";
import { SimpleTable, TitledPanel } from "@adiba-banking-cloud/backoffice";
import { Badge } from "@mantine/core";
import { BaseTableRowProps } from "@adiba-banking-cloud/backoffice/build/typings/components/tables/simple/Simple.types";

export const SynchronizationHistoryWidget = () => {
  const { props, data } = useFetchSynchronizationHistory();

  const rows = data.rows.map((row : BaseTableRowProps) => {
    return {
      ...row,
      status: (
        () => <Badge color={row.status === "Success" ? "green" : "red"}>
          {row.status as string}
        </Badge>
      ),
    };
  });
  return (
    <TitledPanel {...props} mih={200}>
      <SimpleTable {...data} rows={rows} />
    </TitledPanel>
  );
};
