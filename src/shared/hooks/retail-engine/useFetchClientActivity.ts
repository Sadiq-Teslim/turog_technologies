import { SimpleChartProps } from "@adiba-banking-cloud/backoffice/build/typings/components/charts/column/Column.types";
import { TitleWithIndexProps } from "@adiba-banking-cloud/backoffice/build/typings/components/general/title/Title.types";
import { TitledPanelProps } from "@adiba-banking-cloud/backoffice/build/typings/components/panels/simple/Simple.types";
import { useState } from "react";
import { ClientActivityPanelProps } from "../../types/retail-engine/ClientActivityPanelProps.types";

export const useFetchClientActivity = (): ClientActivityPanelProps => {
  const props = fakeProps;
  const data = fakeData;
  const title = fakeTitle;
  const interval = useState<string>("Monthly"); //TODO: Translate
  const buttons = ["Monthly", "Annually", "Quarterly"]; //TODO: Translate
  return { props, data, title, interval, buttons };
};

const fakeProps: TitledPanelProps = {
  title: {
    label: "Client Activity", //TODO: Translate
    icon: { name: "People" },
  },
  children: undefined,
};

const fakeData: SimpleChartProps = {
  yAxisLabel: "Users",
  xAxisLabel: [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ], //TODO Translate
  // series: [77, 122, 65, 77, 148, 280, 77, 122, 65, 77, 148, 280],
  series: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  color: "#C8700B",
  withLegend: false,
};

const fakeTitle: TitleWithIndexProps = {
  title: "Active Platform Users",
  growth: {
    direction: "up",
    // text: "33.00%",
    text: "0.00%",
  },
  subtitle: "vs. Last Month",
  hasError: false,
  errorLabel: "Error! Click to try again.",
  errorFn: () => alert("Error Clicked!"),
};
