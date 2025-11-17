import { StatCardProps } from "../../types/StatCard.types";

export const useFetchTotalValuePaidOut = (): StatCardProps => {
  return {
    title: "Total Value Paid Out",
    icon: { name: "MoneySend", color: "#2563EB" },
    value: "₦95.0B",
    subValue: "Gap: ₦3.2B",
  };
};
