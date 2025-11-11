import React from "react";

import {
  SimpleArea,
  TitledPanel,
  TitleWithIndex,
} from "@adiba-banking-cloud/backoffice";
import {
  Box,
  Center,
  SegmentedControl,
  SegmentedControlItem,
  Stack,
} from "@mantine/core";
import { useField } from "@mantine/form";
import { CashVelocityPanelProps } from "../../shared/types/retail-engine/CashVelocityPanelProps.types";
import { useFetchCashVelocity } from "../../shared/hooks/retail-engine/useFetchCashVelocity";

export const CashVelocityWidget = () => {
  const ChartColors = ["#C8700B", "#E54040"];
  const CashVelocityPanel: CashVelocityPanelProps =
    useFetchCashVelocity(ChartColors);
  const [timeInterval, setTimeInterval] = [...CashVelocityPanel.interval];
  const [direction, setDirection] = [...CashVelocityPanel.direction];
  const IntervalControlField = useField({
    initialValue: timeInterval,
    onValueChange: (value) => setTimeInterval(value),
  });
  const DirectionControlField = useField({
    initialValue: direction,
    onValueChange: (value) => setDirection(value),
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
      {...CashVelocityPanel.props}
      middlesection={
        <SegmentedControl
          {...DirectionControlField.getInputProps()}
          color="adiba"
          data={CashVelocityPanel.directionButtons.map((item, index) =>
            label({ color: ChartColors[index], label: item })
          )}
        />
      }
      rightsection={
        <SegmentedControl
          {...IntervalControlField.getInputProps()}
          color="adiba"
          data={CashVelocityPanel.buttons}
        />
      }
    >
      <Stack>
        <TitleWithIndex {...CashVelocityPanel.title} />
        <SimpleArea {...CashVelocityPanel.data} />
      </Stack>
    </TitledPanel>
  );
};
