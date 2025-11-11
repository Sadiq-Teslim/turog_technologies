import { TitledPanelProps } from "@adiba-banking-cloud/backoffice/build/typings/components/panels/simple/Simple.types";
import { SummaryCardsProps } from "../../types/SummaryCardsProps.types";

export const useFetchDemographicSummary = (): SummaryCardsProps => {
  const props: TitledPanelProps = {
    title: { label: "Client Demographics", icon: { name: "Personalcard" } },
    children: undefined,
  }; //TODO: translation
  const data = [
    {
      label: "Individuals", //TODO: translation
      value: "0",
    },
    {
      label: "Small Businesses",
      value: "0",
    },
    {
      label: "Corporates",
      value: "0",
    },
    {
      label: "Communities",
      value: "0",
    },
  ];
  const report = {
    id: "34232",
    label: "View Opportunity Dashboard" //TODO: Translation
  }
  return { props, data , report};
};
