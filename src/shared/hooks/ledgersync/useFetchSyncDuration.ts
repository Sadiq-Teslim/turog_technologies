import { IconsProps } from "@adiba-banking-cloud/backoffice/build/typings/components/general/icons/Icons.types";
import { SyncDurationProps } from "../../types/ledgersync/SyncDurationprops";

export const useFetchSyncDuration = () : SyncDurationProps => {
  const title = {
    label: "Average Sync", //TODO: translate
    icon: {
      name: "Clock",
    } as IconsProps,
  };
  const duration = "0m 10s";
  return { title, duration };
};
