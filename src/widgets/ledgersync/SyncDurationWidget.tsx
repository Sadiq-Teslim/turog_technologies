import React from "react";
import { OverviewPanel } from "../../shared/components/OverviewPanel";
import { useFetchSyncDuration } from "../../shared/hooks/ledgersync/useFetchSyncDuration";
import { Text, Title } from "@mantine/core";
import { SyncDurationProps } from "../../shared/types/ledgersync/SyncDurationprops";
import { OverviewPanelProps } from "../../shared/types/OverviewPanelProps.types";

export const SyncDurationWidget = () => {
    const SyncDurationWidgetProps = useFetchSyncDuration();
    return <OverviewPanel {...SyncDurationWidgetData(SyncDurationWidgetProps)} />;
};

const SyncDurationWidgetData = (props: SyncDurationProps) : OverviewPanelProps => {
    return {
        title: props.title,
        children: <Title order={3}>{props.duration}</Title>,
        footer: {
            leftsection: <Text c={'dimmed'} fz={'xs'} fw={300}>Last 24 Hours</Text>
        }
    };
};