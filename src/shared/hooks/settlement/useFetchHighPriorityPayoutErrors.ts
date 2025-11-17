import { HighPriorityPayoutErrorPanelProps, HighPriorityPayoutError } from "../../types/settlement/HighPriorityPayoutError.types";
import { PanelTitleProps } from "@adiba-banking-cloud/backoffice/build/typings/components/panels/simple/Simple.types";

export const useFetchHighPriorityPayoutErrors = (): HighPriorityPayoutErrorPanelProps => {
  const title: PanelTitleProps = {
    label: "High Priority Payout Errors",
    icon: { name: "Warning2", color: "#F43F5E" },
  };

  const errors: HighPriorityPayoutError[] = [
    {
      id: "1",
      code: "T-301",
      partner: "Partner X",
      description: "Invalid Account",
      amount: "₦200M",
      status: "repair",
      statusLabel: "Repair Now",
      statusColor: "red",
      bgColor: "red.0",
    },
    {
      id: "2",
      code: "T-305",
      partner: "Partner Y",
      description: "Retry Pending",
      amount: "₦50M",
      status: "retry",
      statusLabel: "Force Retry",
      statusColor: "orange",
      bgColor: "orange.0",
    },
    {
      id: "3",
      code: "T-310",
      partner: "Partner Z",
      description: "System Error",
      amount: "₦5M",
      status: "details",
      statusLabel: "View Details",
      statusColor: "gray",
      bgColor: "gray.0",
    },
  ];

  return {
    title,
    errors,
    footerLabel: "View All Errors →",
  };
};
