import { CriticalPayoutFailurePanelProps } from "../../types/settlement/CriticalPayoutFailurePanel.types";

export const useFetchCriticalPayoutFailure = (): CriticalPayoutFailurePanelProps => {
  return {
    icon: { name: "InfoCircle", color: "#F43F5E" },
    title: "CRITICAL PAYOUT FAILURE",
    subtitle: "125 Errors are blocking ₦250M in Merchant Payouts.",
    errorCount: 125,
    blockedValue: "₦250M",
    reason: "Invalid Account Details",
    reasonPercent: "60% of failures",
    actions: {
      errorLog: () => alert("Go to Error Log"),
      dataQualityReport: () => alert("View Data Quality Report"),
    },
  };
};
