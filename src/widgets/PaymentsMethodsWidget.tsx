import {
  PaymentMethod,
  PaymentMethodAdd,
} from "@adiba-banking-cloud/backoffice";
import { Stack, Title, ScrollArea, Flex, Box } from "@mantine/core";
import React from "react";
import { PaymentMethodSectionProps } from "../shared/types/SubscriptionPageProps.types";
import { useFetchPaymentMethods } from "../shared/hooks/useFetchPaymentMethods";

export const PaymentsMethodsWidget = () => {
  const paymentMethodSectionData: PaymentMethodSectionProps =
    useFetchPaymentMethods();

  return (
    <Stack>
      <Title fz={"sm"} fw={500} c={"dimmed"}>
        {paymentMethodSectionData.sectionTitle}
      </Title>
      <ScrollArea scrollbars="x" offsetScrollbars="x">
        <Flex pt={"sm"} gap={"md"} miw={1024}>
          {paymentMethodSectionData.paymentMethods.map((items, index) => (
            <Box key={`payment-method-${index}`} w={330}>
              <PaymentMethod {...items} />
            </Box>
          ))}
          <PaymentMethodAdd />
        </Flex>
      </ScrollArea>
    </Stack>
  );
};
