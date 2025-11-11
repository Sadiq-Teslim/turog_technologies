import { ConnectionStatusProps } from "../../types/ledgersync/ConnectionStatusProps";
import { PanelTitleProps } from "@adiba-banking-cloud/backoffice/build/typings/components/panels/simple/Simple.types";

export const useFetchConnectionStatus = (): ConnectionStatusProps => {
  const title: PanelTitleProps = {
    label: "Connection Status", //TODO: translate
    icon: { name: "Celo", variant: "Bulk" },
  };
  const status = "unhealthy";
  const lastSyncedAgo = "23s";
  const leftSynced: PanelTitleProps = {
    label: "FINERACT",
    icon: { name: "ArrowUp2", variant: "Bold" },
  };
  const rightSynced: PanelTitleProps = {
    label: "ODOO",
    icon: { name: "ArrowDown2", variant: "Bold" },
  };
  const leftSyncedStatus = "up";
  const rightSyncedStatus = "down";
  return {
    title,
    status,
    lastSyncedAgo,
    leftSynced,
    rightSynced,
    leftSyncedStatus,
    rightSyncedStatus,
  };
};
