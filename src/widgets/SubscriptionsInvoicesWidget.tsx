import { Badge, Stack, Text, Title, UnstyledButton } from "@mantine/core";
import React from "react";
import {
  SubscriptionInvoiceItemProps,
  SubscriptionInvoicesSectionProps,
} from "../shared/types/SubscriptionPageProps.types";
import { useFetchSubscriptionInvoices } from "../shared/hooks/useFetchSubscriptionInvoices";
import { File, SimpleTable } from "@adiba-banking-cloud/backoffice";
import { BaseTableRowProps } from "@adiba-banking-cloud/backoffice/build/typings/components/tables/simple/Simple.types";
import { useDownloadInvoice } from "../shared/hooks/useDownloadInvoice";

export const SubscriptionsInvoicesWidget = () => {
  const SubscriptionInvoicesSectionData: SubscriptionInvoicesSectionProps =
    useFetchSubscriptionInvoices();

  const columns = SubscriptionInvoicesSectionData.columns;
  const rows = setSubscriptionInvoiceTableRows(SubscriptionInvoicesSectionData.rows);
  const { withIndex, withAction, actionFn } = setSubscriptionInvoiceAction();

  return (
    <Stack>
      <Title fz={"sm"} fw={500} c={"dimmed"}>
        {SubscriptionInvoicesSectionData.sectionTitle}
      </Title>
      <SimpleTable {...{ columns, rows, withIndex, withAction, actionFn }} />
    </Stack>
  );
};

const setSubscriptionInvoiceTableRows = (
  data: SubscriptionInvoiceItemProps[]
): BaseTableRowProps[] => {
  return data.map((value) => {
    const status = (): React.ReactNode => (
      <Badge color={value.status === "paid" ? "green" : "red"}>
        {value.status}
      </Badge>
    );

    return { ...value, status };
  });
};

const setSubscriptionInvoiceAction = (): {
  withIndex: boolean;
  withAction: boolean;
  actionFn: (id: string) => React.ReactNode;
} => {
  const { name, downloadFn } = useDownloadInvoice();
  const withAction = true;
  const withIndex = true;

  const actionFn = (e) => (
    <File
      bd={"none"}
      bg={"gray.1"}
      p={"xs"}
      rightsection={{
        onClick: downloadFn,
        icon: { name: "DocumentDownload" },
      }}
    >
      <UnstyledButton
        fw={300}
        fz={"xs"}
        w={150}
        onClick={(e) => downloadFn("id")}
      >
        {name}
      </UnstyledButton>
    </File>
  );

  return { withIndex, withAction, actionFn };
};
