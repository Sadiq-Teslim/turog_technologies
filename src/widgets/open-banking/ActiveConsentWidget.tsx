import React from "react";

import {
  SimpleArea,
  TitledPanel,
  TitleWithIndex,
} from "@adiba-banking-cloud/backoffice";
import { Box, Center, SegmentedControl, SegmentedControlItem, Stack } from "@mantine/core";
import { useField } from "@mantine/form";
import { useFetchActiveConsent } from "../../shared/hooks/open-banking/useFetchActiveConsent";
import { ActiveConsentPanelProps } from "../../shared/types/open-banking/ActiveConsentPanelProps.types";

export const ActiveConsentWidget = () => {
  const ChartColors = ["#4A90E2", "#E54696"];
  const ActiveConsentPanel: ActiveConsentPanelProps =
    useFetchActiveConsent();
  const [timeInterval, setTimeInterval] = [...ActiveConsentPanel.interval];
  const SegmentedControlField = useField({
    initialValue: timeInterval,
    onValueChange: (value) => setTimeInterval(value),
  });

  const label = ({
    color,
    label,
  }: {
    color: string;
    label: string;
  }): SegmentedControlItem => ({
    value: label,
    label: (
      <Center style={{ gap: 10 }}>
        <Box w={10} h={10} bg={color} style={{ borderRadius: "100%" }} />
        <span>{label}</span>
      </Center>
    ),
  });

  return (
    <TitledPanel
      {...ActiveConsentPanel.props} 
      rightsection={
        <SegmentedControl
          {...SegmentedControlField.getInputProps()}
          color="adiba"
          data={ActiveConsentPanel.buttons.map((item, index) =>
            label({ color: ChartColors[index], label: item })
          )}
        />
      }
    >
      <Stack>
        <TitleWithIndex {...ActiveConsentPanel.title} />
        <SimpleArea {...ActiveConsentPanel.data} />
      </Stack>
    </TitledPanel>
  );
};
