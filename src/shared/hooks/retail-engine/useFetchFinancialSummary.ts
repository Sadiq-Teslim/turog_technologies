import { TitledPanelProps } from "@adiba-banking-cloud/backoffice/build/typings/components/panels/simple/Simple.types";
import { SummaryCardsProps } from "../../types/SummaryCardsProps.types";

export const useFetchFinancialSummary = (): SummaryCardsProps => {
  const props: TitledPanelProps = {
    title: { label: "Financial Indicators ('mn)", icon: { name: "Coin1" } },
    children: undefined,
  }; //TODO: translation
  const data = [{
    label: "YTD Earned Revenue", //TODO: translation
    value: "0"
  },{
    label: "YTD Loans Disbursed",
    value: "0"
  },{
    label: "YTD Customer Deposits",
    value: "0"
  },{
    label: "YTD Customer Withdrawals",
    value: "0"
  }];
  const report = {
    id: "1232342",
    label: "View CFO Dashboard" //TODO: Translation
   }
  return { props, data, report };
};
