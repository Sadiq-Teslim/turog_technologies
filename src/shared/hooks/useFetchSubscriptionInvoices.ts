import {
  BaseTableColumnProps,
  BaseTableRowProps,
  SimpleTableBodyProps,
} from "@adiba-banking-cloud/backoffice/build/typings/components/tables/simple/Simple.types";
import {
  SubscriptionInvoiceItemProps,
  SubscriptionInvoicesSectionProps,
} from "../types/SubscriptionPageProps.types";

export const useFetchSubscriptionInvoices =
  (): SubscriptionInvoicesSectionProps => {
    const isLoading = false;
    const hasError = false;
    const columns = ["date", "details", "amount", "status"].map(
      (value, item): BaseTableColumnProps => ({
        id: value.toLowerCase(),
        order: item + 1,
        label: value,
      })
    );
    const rows = fetchSubscriptionInvoices();
    const sectionTitle = "Billing History"; //TODO: Translation

    return { isLoading, hasError, sectionTitle, columns, rows };
  };

const fetchSubscriptionInvoices = (): SubscriptionInvoiceItemProps[] => [
  {
    id: "ref",
    date: "01/01/2024",
    details: "Standard Plan (Monthly)",
    amount: "$2,500",
    status: "paid",
  },
  {
    id: "ref",
    date: "01/01/2024",
    details: "Standard Plan (Monthly)",
    amount: "$2,500",
    status: "paid",
  },
  {
    id: "ref",
    date: "01/01/2024",
    details: "Standard Plan (Monthly)",
    amount: "$2,500",
    status: "paid",
  },
  {
    id: "ref",
    date: "01/01/2024",
    details: "Standard Plan (Monthly)",
    amount: "$2,500",
    status: "paid",
  },
  {
    id: "ref",
    date: "01/01/2024",
    details: "Standard Plan (Monthly)",
    amount: "$2,500",
    status: "paid",
  },
  {
    id: "ref",
    date: "01/01/2024",
    details: "Standard Plan (Monthly)",
    amount: "$2,500",
    status: "paid",
  },
  {
    id: "ref",
    date: "01/01/2024",
    details: "Standard Plan (Monthly)",
    amount: "$2,500",
    status: "paid",
  },
  {
    id: "ref",
    date: "01/01/2024",
    details: "Standard Plan (Monthly)",
    amount: "$2,500",
    status: "paid",
  },
  {
    id: "ref",
    date: "01/01/2024",
    details: "Standard Plan (Monthly)",
    amount: "$2,500",
    status: "paid",
  },
];
