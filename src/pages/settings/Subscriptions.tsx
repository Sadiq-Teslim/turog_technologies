import React from "react";
import { SettingsLayout } from "../layouts/SettingsLayout";
import { Stack } from "@mantine/core";
import { PaymentsMethodsWidget } from "../../widgets/PaymentsMethodsWidget";
import { SubscriptionsPlansWidget } from "../../widgets/SubscriptionsPlansWidget";
import { SubscriptionsInvoicesWidget } from "../../widgets/SubscriptionsInvoicesWidget";

export const SubscriptionsOverviewPage = () => {
  return (
    <SettingsLayout>
      <Stack gap={50}>
        <SubscriptionsPlansWidget />
        <PaymentsMethodsWidget />
        <SubscriptionsInvoicesWidget />
      </Stack>
    </SettingsLayout>
  );
};
