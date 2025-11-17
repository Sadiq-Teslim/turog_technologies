import { PartnerSettlementStatus, PartnerSettlementStatusPanelProps } from "../../types/settlement/PartnerSettlementStatus.types";
import { PanelTitleProps } from "@adiba-banking-cloud/backoffice/build/typings/components/panels/simple/Simple.types";

export const useFetchPartnerSettlementStatus = (): PartnerSettlementStatusPanelProps => {
  const title: PanelTitleProps = {
    label: "Top 5 Partners' Settlement Status",
    icon: { name: "UserEdit", color: "#2563EB" },
  };

  const partners: PartnerSettlementStatus [] = [
    {
      id: "1",
      name: "Partner A",
      amount: "₦1.2B",
      status: "paid",
      statusLabel: "Paid",
      statusColor: "green.6",
      statusTextColor: "green.6",
    },
    {
      id: "2",
      name: "Partner B",
      amount: "₦500M",
      status: "held",
      statusLabel: "Awaiting Payout",
      statusColor: "yellow.6",
      statusTextColor: "yellow.6",
    },
    {
      id: "3",
      name: "Partner C",
      amount: "₦10M",
      status: "failed",
      statusLabel: "Error T-305",
      statusColor: "red.6",
      statusTextColor: "red.6",
    },
    {
      id: "4",
      name: "Partner D",
      amount: "₦800M",
      status: "paid",
      statusLabel: "Paid",
      statusColor: "green.6",
      statusTextColor: "green.6",
    },
    {
      id: "5",
      name: "Partner E",
      amount: "₦350M",
      status: "pending",
      statusLabel: "Pending Review",
      statusColor: "yellow.6",
      statusTextColor: "yellow.6",
    },
  ];

  return {
    title,
    partners,
    footerLabel: "View Partner Queue →",
  };
};
