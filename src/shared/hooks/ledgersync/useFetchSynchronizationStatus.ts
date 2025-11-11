import { IconsProps } from "@adiba-banking-cloud/backoffice/build/typings/components/general/icons/Icons.types";
import { SynchronizationStatusProps } from "../../types/ledgersync/SynchronizationStatusProps";

export const useFetchSynchronizationStatus = () : SynchronizationStatusProps => {
  const title = {
    label: "Sync Status", //TODO: translate
    icon: { name: "ArrangeHorizontalCircle", variant: "Bulk" } as IconsProps,
  };

  const syncStatus = "success"; //TODO: translate

  const lastSyncedAgo = "23s";

  const nextSync = "12:00:00AM"; //TODO: translate

  return { title, syncStatus, nextSync, lastSyncedAgo };
};
