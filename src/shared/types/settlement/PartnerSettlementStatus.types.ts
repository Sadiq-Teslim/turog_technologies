import { PanelTitleProps } from "@adiba-banking-cloud/backoffice/build/typings/components/panels/simple/Simple.types";

export interface PartnerSettlementStatus {
  id: string;
  name: string;
  amount: string;
  status: "paid" | "held" | "failed" | "pending";
  statusLabel: string;
  statusColor: string;
  statusTextColor: string;
}

export interface PartnerSettlementStatusPanelProps {
  title: PanelTitleProps;
  partners: PartnerSettlementStatus[];
  footerLabel: string;
}
