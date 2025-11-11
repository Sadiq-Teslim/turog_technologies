import { PanelTitleProps } from "@adiba-banking-cloud/backoffice/build/typings/components/panels/simple/Simple.types";

export interface ConnectionStatusProps{
    title: PanelTitleProps;
    status: "healthy" | "unhealthy" | "connecting";
    lastSyncedAgo: string;
    leftSynced: PanelTitleProps;
    rightSynced: PanelTitleProps;
    leftSyncedStatus: "up" | "down";
    rightSyncedStatus: "up" | "down";
}