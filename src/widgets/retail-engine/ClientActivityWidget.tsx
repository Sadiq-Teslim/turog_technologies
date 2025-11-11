import React from "react";

import {
  EqualizerColumn,
  TitledPanel,
  TitleWithIndex,
} from "@adiba-banking-cloud/backoffice";
import { SegmentedControl, Stack } from "@mantine/core";
import { useField } from "@mantine/form";
import { useFetchClientActivity } from "../../shared/hooks/retail-engine/useFetchClientActivity";
import { ClientActivityPanelProps } from "../../shared/types/retail-engine/ClientActivityPanelProps.types";

export const ClientActivityWidget = () => {
  const ClientActivityPanel: ClientActivityPanelProps =
    useFetchClientActivity();
  const [timeInterval, setTimeInterval] = [...ClientActivityPanel.interval];
  const SegmentedControlField = useField({
    initialValue: timeInterval,
    onValueChange: (value) => setTimeInterval(value),
  });

  return (
    <TitledPanel
      {...ClientActivityPanel.props}
      rightsection={
        <SegmentedControl
          {...SegmentedControlField.getInputProps()}
          color="adiba"
          data={ClientActivityPanel.buttons}
        />
      }
    >
      <Stack>
        <TitleWithIndex {...ClientActivityPanel.title} />
        <EqualizerColumn {...ClientActivityPanel.data} />
      </Stack>
    </TitledPanel>
  );
};
