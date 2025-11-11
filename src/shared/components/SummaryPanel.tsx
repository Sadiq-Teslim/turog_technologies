import { TitledPanel } from "@adiba-banking-cloud/backoffice";
import { Button, Group, Space, Stack, Text } from "@mantine/core";
import React from "react";
import { useNavigate } from "react-router";
import { SummaryCardsProps } from "../types/SummaryCardsProps.types";

export const SummaryPanel = ({ props, data, report }: SummaryCardsProps) => {
  const navigate = useNavigate();
  const onClick = () => {
    //first lookup id to check if the module required for that report exists.
    navigate(`/reports/${report.id}`);
  };

  return (
    <TitledPanel {...props}>
      <Stack px={"lg"} pb={"lg"} gap={"lg"}>
        {data.map((item, index) => {
          return (
            <Group key={`summary-${index}`} justify="space-between">
              <Text fz={"sm"} c={"adiba.4"} fw={300}>
                {item.label}
              </Text>
              <Text fw={500}>{item.value}</Text>
            </Group>
          );
        })}
        <Space flex={1} />
        <Button
          color={"adiba"} //TODO: Dynamic Theme
          component="a"
          variant="light"
          radius={"lg"}
          fw={400}
          onClick={onClick}
        >
          {report.label}
        </Button>
      </Stack>
    </TitledPanel>
  );
};
