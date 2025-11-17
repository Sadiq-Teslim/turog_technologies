import { TitledPanel } from "@adiba-banking-cloud/backoffice";
import { Group, Stack, Text } from "@mantine/core";
import React from "react";
import { StatCardProps } from "../types/StatCard.types";
import { TrendUp, MoneySend, Warning2, Clock } from "iconsax-react";

export const StatCard = ({ title, icon, value, subValue }: StatCardProps) => {
  let IconComponent: React.ElementType | null = null;
  if (icon) {
    switch (icon.name) {
      case "TrendUp":
        IconComponent = TrendUp;
        break;
      case "MoneySend":
        IconComponent = MoneySend;
        break;
      case "Warning2":
        IconComponent = Warning2;
        break;
      case "Clock":
        IconComponent = Clock;
        break;
      default:
        IconComponent = null;
    }
  }
  return (
    <TitledPanel title={title as any}>
      <Stack gap={4} py={16}>
        <Group justify="space-between" align="flex-start" w="100%">
          <Text fz={"md"} fw={500}>
            {title}
          </Text>
          {IconComponent && (
            <Group bg="#E9FAF1" p={6} style={{ borderRadius: 8 }}>
              <IconComponent size={20} color={icon?.color || "#22C55E"} />
            </Group>
          )}
        </Group>
        <Text fz={32} fw={700}>
          {value}
        </Text>
        <Text fz={14} c="adiba.4" fw={400}>
          {subValue}
        </Text>
      </Stack>
    </TitledPanel>
  );
};
