import { SimpleAreaChartProps } from "@adiba-banking-cloud/backoffice/build/typings/components/charts/area/Area.types";
import { TitleWithIndexProps } from "@adiba-banking-cloud/backoffice/build/typings/components/general/title/Title.types";
import { TitledPanelProps } from "@adiba-banking-cloud/backoffice/build/typings/components/panels/simple/Simple.types";
import { useState } from "react";
import { ActiveConsentPanelProps } from "../../types/open-banking/ActiveConsentPanelProps.types";

export const useFetchActiveConsent = (): ActiveConsentPanelProps => {
  const props = fakeProps;
  const data = fakeData;
  const title = fakeTitle;
  const interval = useState<string>("Inflow"); //TODO: Translate
  const buttons = ["Inflow", "Outflow"]; //TODO: Translate
  return { props, data, title, interval, buttons };
};

const fakeProps: TitledPanelProps = {
  title: {
    label: "Active Consents", //TODO: Translate
    icon: { name: "Shield" },
  },
  children: undefined,
};

const fakeData: SimpleAreaChartProps = {
  yAxisLabel: "Active Consents",
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
  series: [
    3000, 3500, 3800, 3600, 3400, 3200, 3900, 4100, 4300, 4400, 4450, 4520,
  ],
  color: "#E54696",
  withLegend: false,
  withCrossHair: true,
};

const fakeTitle: TitleWithIndexProps = {
  title: "4,520",
  growth: {
    direction: "up",
    text: "+1.3% vs Last Month",
  },
  subtitle: "",
  hasError: false,
  errorLabel: "Error! Click to try again.",
  errorFn: () => alert("Error Clicked!"),
};
