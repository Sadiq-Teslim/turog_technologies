import React from "react";
import { StatCard } from "../../shared/components/StatCard";
import { useFetchTotalCollections } from "../../shared/hooks/settlement/useFetchTotalCollections";

export const TotalCollectionsWidget = () => {
  const cardProps = useFetchTotalCollections();
  return <StatCard {...cardProps} />;
}
