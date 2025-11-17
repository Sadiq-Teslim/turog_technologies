import React from "react";
import { StatCard } from "../../shared/components/StatCard";
import { useFetchAvgPayoutTime } from "../../shared/hooks/settlement/useFetchAvgPayoutTime";

export const AvgPayoutTimeWidget = () => {
  const cardProps = useFetchAvgPayoutTime();
  return <StatCard {...cardProps} />;
}
