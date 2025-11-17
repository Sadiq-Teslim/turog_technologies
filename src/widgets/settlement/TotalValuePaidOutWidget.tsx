import React from "react";
import { StatCard } from "../../shared/components/StatCard";
import { useFetchTotalValuePaidOut } from "../../shared/hooks/settlement/useFetchTotalValuePaidOut";

export const TotalValuePaidOutWidget = () => {
  const cardProps = useFetchTotalValuePaidOut();
  return <StatCard {...cardProps} />;
}
