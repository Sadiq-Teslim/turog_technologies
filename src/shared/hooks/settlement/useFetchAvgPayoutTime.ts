import React from "react";
import { StatCardProps } from "../../types/StatCard.types";
import { Clock } from "iconsax-react";

export const useFetchAvgPayoutTime = (): StatCardProps => {
  return {
    title: "Avg. Payout Time",
    icon: { name: "Clock", color: "#F43F5E" },
    value: "15 Min",
    subValue: "Target: < 10 Min",
  };
}
