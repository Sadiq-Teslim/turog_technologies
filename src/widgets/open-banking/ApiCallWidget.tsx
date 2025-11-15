import React from "react";

import {
  EqualizerColumn,
  TitledPanel,
  TitleWithIndex,
} from "@adiba-banking-cloud/backoffice";
import { SegmentedControl, Stack } from "@mantine/core";
import { useField } from "@mantine/form";
import { useFetchApiCall } from "../../shared/hooks/open-banking/useFetchApiCall";
import { ApiCallPanelProps } from "../../shared/types/open-banking/ApiCallPanelProps.types";

export const ApiCallWidget = () => {
  const ApiCallPanel: ApiCallPanelProps =
    useFetchApiCall();
  const [timeInterval, setTimeInterval] = [...ApiCallPanel.interval];
  const SegmentedControlField = useField({
    initialValue: timeInterval,
    onValueChange: (value) => setTimeInterval(value),
  });

  return (
    <TitledPanel
      {...ApiCallPanel.props} 
      rightsection={
        <SegmentedControl
          {...SegmentedControlField.getInputProps()}
          color="adiba"
          data={ApiCallPanel.buttons}
        />
      }
    >
      <Stack>
        <TitleWithIndex {...ApiCallPanel.title} />
        <EqualizerColumn {...ApiCallPanel.data} />
      </Stack>
    </TitledPanel>
  );
};
