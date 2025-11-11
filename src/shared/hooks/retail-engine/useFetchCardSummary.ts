import { TitledPanelProps } from "@adiba-banking-cloud/backoffice/build/typings/components/panels/simple/Simple.types";
import { SummaryCardsProps } from "../../types/SummaryCardsProps.types";

export const useFetchCardSummary = (): SummaryCardsProps => {
  const props: TitledPanelProps = {
    title: { label: "Cards Overview", icon: { name: "CardPos" } },
    children: undefined,
  }; //TODO: translation
  const data = [
    {
      label: "Total Cards Issued", //TODO: translation
      value: "0",
    },
    {
      label: "Active Cards",
      value: "0",
    },
    {
      label: "Deactivated Cards",
      value: "0",
    },
    {
      label: "Cards In Processing",
      value: "0",
    },
  ];
  const report = {
    id: "39823",
    label: "View Cards Report" //TODO: Translation
  }
  return { props, data, report };
};
