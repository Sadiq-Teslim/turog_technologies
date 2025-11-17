import { StatCardProps } from "../../types/StatCard.types";

export const useFetchPayoutErrors = (): StatCardProps => {
  return {
    title: "Payout Errors",
    icon: { name: "Warning2", color: "#F43F5E" },
    value: 125,
    subValue: "Risk Value: ₦250M",
  };
};
