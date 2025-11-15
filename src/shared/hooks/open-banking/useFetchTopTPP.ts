import { TitledPanelProps } from "@adiba-banking-cloud/backoffice/build/typings/components/panels/simple/Simple.types";
import { SummaryCardsProps } from "../../types/SummaryCardsProps.types";

export const useFetchTopTPP = (): SummaryCardsProps => {
  const props: TitledPanelProps = {
    title: { label: "Top TPPs", icon: { name: "People" } },
    children: undefined,
  };
  const data = [{
    label: "PiggyVest", 
    value: "28,500"
  },{
    label: "Okra",
    value: "24,800"
  },{
    label: "Flutterwave",
    value: "18,200"
  },{
    label: "Paystack",
    value: "15,600"
  },{
    label: "Mono",
    value: "12,400"
  }];
  const report = {
    id: "*****",
    label: "View TPP Report" //TODO: Translation
   }
  return { props, data, report };
};
