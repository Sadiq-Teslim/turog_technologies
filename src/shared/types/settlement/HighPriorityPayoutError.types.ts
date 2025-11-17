import { PanelTitleProps } from "@adiba-banking-cloud/backoffice/build/typings/components/panels/simple/Simple.types";

export interface HighPriorityPayoutError {
  id: string;
  code: string;
  partner: string;
  description: string;
  amount: string;
  status: "repair" | "retry" | "details";
  statusLabel: string;
  statusColor: string;
  bgColor: string;
}

export interface HighPriorityPayoutErrorPanelProps {
  title: PanelTitleProps;
  errors: HighPriorityPayoutError[];
  footerLabel: string;
}
