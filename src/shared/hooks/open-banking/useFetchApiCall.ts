import { SimpleChartProps } from "@adiba-banking-cloud/backoffice/build/typings/components/charts/column/Column.types";
import { TitleWithIndexProps } from "@adiba-banking-cloud/backoffice/build/typings/components/general/title/Title.types";
import { TitledPanelProps } from "@adiba-banking-cloud/backoffice/build/typings/components/panels/simple/Simple.types";
import { useState } from "react";
import { ApiCallPanelProps } from "../../types/open-banking/ApiCallPanelProps.types";

export const useFetchApiCall = (): ApiCallPanelProps => {
  const props = fakeProps;
  const data = fakeData;
  const title = fakeTitle;
  const interval = useState<string>("Monthly"); //TODO: Translate
  const buttons = ["Daily", "Weekly", "Monthly"]; //TODO: Translate
  return { props, data, title, interval, buttons };
};

const fakeProps: TitledPanelProps = {
  title: {
    label: "API Call Volume", //TODO: Translate
    icon: { name: "TrendUp" },
  },
  children: undefined,
};

const fakeData: SimpleChartProps = {
  yAxisLabel: "API Calls",
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
  series: [7800, 7200, 8200, 7500, 8000, 6800, 7600, 7800, 8400, 8200, 8600, 8800], 
  color: "#F97316",
  withLegend: false,
};

const fakeTitle: TitleWithIndexProps = {
  title: "84,102",
  growth: {
    direction: "up",
    text: "+1.3% vs Last Month",
  },
  subtitle: "",
  hasError: false,
  errorLabel: "Error! Click to try again.",
  errorFn: () => alert("Error Clicked!"),
};
