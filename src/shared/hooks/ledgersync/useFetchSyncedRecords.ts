import { IconsProps } from "@adiba-banking-cloud/backoffice/build/typings/components/general/icons/Icons.types";
import { SyncedRecordProps } from "../../types/ledgersync/SyncedRecordProps";

export const useFetchSyncedRecords = () : SyncedRecordProps => {
    const title = {
        label: "Synced Records",
        icon: { name: "ChartSuccess", variant: "Bulk" } as IconsProps,
    }
    const records = 120;
    const errors = 18;
    const retries = 15;
    const unresolved = 3;

    return { title, records, errors, retries, unresolved };
}