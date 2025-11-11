import { TitledPanelProps } from "@adiba-banking-cloud/backoffice/build/typings/components/panels/simple/Simple.types";
import { SynchronizationHistoryProps } from "../../types/ledgersync/SynchronizationHistoryProps";
import { BaseTableColumnProps, BaseTableRowProps } from "@adiba-banking-cloud/backoffice/build/typings/components/tables/simple/Simple.types";

export const useFetchSynchronizationHistory =
  (): SynchronizationHistoryProps => {
    const props : TitledPanelProps = {
      title: {
        label: "Sync History", // TODO: Add translation
        icon: { name: "TableDocument" },
      },
      children: undefined,
    };
    const data = {
      columns: ["timestamp", "status", "source", "target", "records", "duration"].map((value, item): BaseTableColumnProps => {
        return {
          id: value.toLowerCase(),
          order: item + 1,
          label: value,
        };
      }),
      rows: fetchSyncHistory(),
    };
    return { props, data };
  };

  const fetchSyncHistory = (): BaseTableRowProps[] => {
    return [
      {
        timestamp: "2021-01-01",
        status: "Success",
        source: "FINERACT",
        target: "ODOO",
        records: "100",
        duration: "1m 12s",
      },
      {
        timestamp: "2021-01-01",
        status: "Success",
        source: "FINERACT",
        target: "ODOO",
        records: "100",
        duration: "1m 1s",
      },
      {
        timestamp: "2021-01-01",
        status: "Success",
        source: "FINERACT",
        target: "ODOO",
        records: "100",
        duration: "1m 1s",
      },
      {
        timestamp: "2021-01-01",
        status: "Success",
        source: "FINERACT",
        target: "ODOO",
        records: "100",
        duration: "1m 1s",
      },
      {
        timestamp: "2021-01-01",
        status: "Success",
        source: "FINERACT",
        target: "ODOO",
        records: "100",
        duration: "1m 1s",
      },
    ];
  };