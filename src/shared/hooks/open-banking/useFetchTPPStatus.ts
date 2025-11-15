import { TitledPanelProps } from "@adiba-banking-cloud/backoffice/build/typings/components/panels/simple/Simple.types";
import { SummaryCardsProps } from "../../types/SummaryCardsProps.types";

export const useFetchTPPStatus = (): SummaryCardsProps => {
  const props: TitledPanelProps = {
    title: { label: "TPP Status", icon: { name: "Coin1" } },
    children: undefined,
  }; //TODO: translation
  const data = [{
    label: "Active TPPs", 
    value: "14"
  },{
    label: "Pending Approval",
    value: "2"
  },{
    label: "Suspended",
    value: "0"
  },{
    label: "Total Registered",
    value: "16"
  }];
  const report = {
    id: "*****",
    label: "View All TPPs" //TODO: Translation
   }
  return { props, data, report };
};
