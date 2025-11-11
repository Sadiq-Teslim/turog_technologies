import { SubscriptionPlans } from "@adiba-banking-cloud/backoffice";
import { Stack, Title, ScrollArea, SimpleGrid, Switch } from "@mantine/core";
import React from "react";
import { useFetchSubscriptionPlans } from "../shared/hooks/useFetchSubscriptionPlans";
import { useSetSubscriptionAutoRenew } from "../shared/hooks/useSetSubscriptionAutoRenew";
import {
  SubscriptionPlanSectionProps,
  SubscriptionAutoRenewProps,
} from "../shared/types/SubscriptionPageProps.types";

export const SubscriptionsPlansWidget = () => {
  const subscriptionPlanSectionData: SubscriptionPlanSectionProps =
    useFetchSubscriptionPlans();
  const {
    withAutoRenew,
    setWithAutoRenew,
    labels,
  }: SubscriptionAutoRenewProps = useSetSubscriptionAutoRenew();

  return (
    <Stack gap={2}>
      <Title fz={"sm"} fw={500} c={"dimmed"}>
        {subscriptionPlanSectionData.sectionTitle}
      </Title>
      <ScrollArea scrollbars="x" offsetScrollbars="x">
        <SimpleGrid cols={3} w={1024} pt={"sm"} spacing={"md"}>
          {subscriptionPlanSectionData.subscriptionPlans.map((items, index) => (
            <SubscriptionPlans key={`subscription-plan-${index}`} {...items} />
          ))}
        </SimpleGrid>
      </ScrollArea>
      <Switch
        checked={withAutoRenew}
        onClick={(e) => setWithAutoRenew(e.currentTarget.checked)}
        fw={300}
        maw={1024}
        labelPosition="left"
        w={"100%"}
        {...labels}
        className="backoffice-justify-switch"
      />
    </Stack>
  );
};
