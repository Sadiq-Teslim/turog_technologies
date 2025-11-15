import { TitledPanelProps } from "@adiba-banking-cloud/backoffice/build/typings/components/panels/simple/Simple.types";
import { SummaryCardsProps } from "../../types/SummaryCardsProps.types";

export const useFetchApiHealth = (): SummaryCardsProps => {
  const props: TitledPanelProps = {
    title: { label: "API Health (mn)", icon: { name: "TrendUp" } },
    children: undefined,
  }; //TODO: translation
  const data = [{
    label: "API Uptime", 
    value: "99.98%"
  },{
    label: "Average Response Time",
    value: "145mn"
  },{
    label: "Success Rate",
    value: "98.9%"
  },{
    label: "Error Rate",
    value: "1.1%"
  }];
  const report = {
    id: "*****",
    label: "View API Dashboard" //TODO: Translation
   }
  return { props, data, report };
};
