import React from "react";
import { StatCard } from "../../shared/components/StatCard";
import { useFetchPayoutErrors } from "../../shared/hooks/settlement/useFetchPayoutErrors";

export const PayoutErrorsWidget = () => {
  const cardProps = useFetchPayoutErrors();
  return <StatCard {...cardProps} />;
}
