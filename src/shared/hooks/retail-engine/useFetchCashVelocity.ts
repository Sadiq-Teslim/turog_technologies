import { SimpleChartProps } from "@adiba-banking-cloud/backoffice/build/typings/components/charts/column/Column.types";
import { TitleWithIndexProps } from "@adiba-banking-cloud/backoffice/build/typings/components/general/title/Title.types";
import { TitledPanelProps } from "@adiba-banking-cloud/backoffice/build/typings/components/panels/simple/Simple.types";
import { useState } from "react";
import { CashVelocityPanelProps } from "../../types/retail-engine/CashVelocityPanelProps.types";
import { IconsProps } from "@adiba-banking-cloud/backoffice/build/typings/components/general/icons/Icons.types";
import { SimpleAreaChartProps } from "@adiba-banking-cloud/backoffice/build/typings/components/charts/area/Area.types";

export const useFetchCashVelocity = (
  colors: string[]
): CashVelocityPanelProps => {
  const interval = useState<string>("Weekly"); //TODO: Translate
  const direction = useState<string>("Inflow"); //TODO: Translate
  const buttons = ["Daily", "Weekly", "Monthly"]; //TODO: Translate
  const directionButtons = ["Inflow", "Outflow"]; //TODO: Translate
  const title = fakeTitle(direction[0]);
  const data = fakeData(direction[0], colors);
  const props = fakeProps(direction[0]);

  return { direction, interval, buttons, directionButtons, title, data, props };
};

const fakeProps = (direction: string): TitledPanelProps => ({
  title: {
    label:
      direction.toLowerCase() == "inflow" ? "Inbound Transactions" : "Outbound Transaction", //TODO: Translate
    icon: { name: (direction.toLowerCase() == "inflow") ? "MoneyRecive" : "MoneySend" },
  },
  children: undefined,
});

const fakeTitle = (direction: string): TitleWithIndexProps => ({
  title: "₦0.00",
  growth: {
    direction: "up",
    text: "0.00%",
  },
  subtitle: "vs. Last Week",
  hasError: false,
  errorLabel: "Error! Click to try again.",
  errorFn: () => alert("Error Clicked!"),
});

const fakeData = (direction: string, colors: string[]) => {
  const data = {
    inflow: {
      yAxisLabel: "Inflows",
      xAxisLabel: [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUN",
        "JULY",
        "AUG",
        "SEP",
        "OCT",
        "NOV",
        "DEC",
      ],
      // series: [77, 122, 65, 77, 148, 280, 77, 122, 65, 77, 148, 280],
      series: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      color: colors[0],
      withLegend: false,
      withCrossHair: true,
    },
    outflow: {
      yAxisLabel: "Outflows",
      xAxisLabel: [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUN",
        "JULY",
        "AUG",
        "SEP",
        "OCT",
        "NOV",
        "DEC",
      ],
      // series: [77, 122, 65, 77, 148, 280, 77, 122, 65, 77, 148, 280],
      series: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      color: colors[1],
      withLegend: false,
      withCrossHair: true,
    },
  };

  return data[direction.toLowerCase()];
};
