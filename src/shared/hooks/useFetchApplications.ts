import { ApplicationPanelProps } from "@adiba-banking-cloud/backoffice/build/typings/components/panels/application/Application.types";
import { BaseApplicationPageProps } from "../types/ApplicationsPageProps.types";

export const useFetchApplications = (): BaseApplicationPageProps => {
  const isLoading: boolean = false;
  const hasError: boolean = false;
  const applications: ApplicationPanelProps[] = [
    {
      name: "Retail Engine",
      discount: "17% OFF*",
      summary:
        "This is the best thing I've had since sliced bread. There is really no reason to have a retail engine app in your organization.",
      features: [
        {
          icon: { name: "HeartCircle" },
          label: "Manage client and merchants",
        },
        {
          icon: { name: "FlashCircle" },
          label: "Manage accounts and investments",
        },
      ],
      featureLabel: "Core Application Benefits",
      amount: "$2,500",
      frequency: "month",
      actionLabel: "Add to Plan",
      subscribed: true,
      onClick: () => alert("Suceffuly Added to the plan."),
    },
    {
      name: "Process Engine",
      discount: "17% OFF*",
      coverImage: "process-engine",
      summary:
        "This is the best thing I've had since sliced bread. There is really no reason to have a retail engine app in your organization.",
      features: [
        {
          icon: { name: "HeartCircle" },
          label: "Manage client and merchants",
        },
        {
          icon: { name: "FlashCircle" },
          label: "Manage accounts and investments",
        },
      ],
      featureLabel: "Core Application Benefits",
      amount: "$22/user",
      frequency: "month",
      actionLabel: "Add to Plan",
      subscribed: false,
      onClick: () => alert("Suceffuly Added to the plan."),
    },
    {
      name: "Agent Banking",
      coverImage: "agent-banking",
      summary:
        "This is the best thing I've had since sliced bread. There is really no reason to have a retail engine app in your organization.",
      features: [
        {
          icon: { name: "HeartCircle" },
          label: "Manage client and merchants",
        },
        {
          icon: { name: "FlashCircle" },
          label: "Manage accounts and investments",
        },
      ],
      featureLabel: "Core Application Benefits",
      amount: "$2,500",
      frequency: "month",
      actionLabel: "Add to Plan",
      subscribed: false,
      onClick: () => alert("Suceffuly Added to the plan."),
    },
    {
      name: "Ledger Sync",
      coverImage: "ledgersync",
      summary:
        "This is the best thing I've had since sliced bread. There is really no reason to have a retail engine app in your organization.",
      features: [
        {
          icon: { name: "HeartCircle" },
          label: "Manage client and merchants",
        },
        {
          icon: { name: "FlashCircle" },
          label: "Manage accounts and investments",
        },
      ],
      featureLabel: "Core Application Benefits",
      amount: "$2,500",
      frequency: "month",
      actionLabel: "Add to Plan",
      subscribed: false,
      onClick: () => alert("Suceffuly Added to the plan."),
    },
    {
      name: "Card Manager",
      coverImage: "card-manager",
      summary:
        "This is the best thing I've had since sliced bread. There is really no reason to have a retail engine app in your organization.",
      features: [
        {
          icon: { name: "HeartCircle" },
          label: "Manage client and merchants",
        },
        {
          icon: { name: "FlashCircle" },
          label: "Manage accounts and investments",
        },
      ],
      featureLabel: "Core Application Benefits",
      amount: "$2,500",
      frequency: "month",
      actionLabel: "Add to Plan",
      subscribed: false,
      onClick: () => alert("Suceffuly Added to the plan."),
    },
    {
      name: "CRM / Helpdesk Manager",
      coverImage: "crm-helpdesk",
      summary:
        "This is the best thing I've had since sliced bread. There is really no reason to have a retail engine app in your organization.",
      features: [
        {
          icon: { name: "HeartCircle" },
          label: "Manage client and merchants",
        },
        {
          icon: { name: "FlashCircle" },
          label: "Manage accounts and investments",
        },
      ],
      featureLabel: "Core Application Benefits",
      amount: "$2,500",
      frequency: "month",
      actionLabel: "Add to Plan",
      subscribed: false,
      onClick: () => alert("Suceffuly Added to the plan."),
    },
    {
      name: "Payments & Settlements",
      coverImage: "payment-engine",
      summary:
        "This is the best thing I've had since sliced bread. There is really no reason to have a retail engine app in your organization.",
      features: [
        {
          icon: { name: "HeartCircle" },
          label: "Manage client and merchants",
        },
        {
          icon: { name: "FlashCircle" },
          label: "Manage accounts and investments",
        },
      ],
      featureLabel: "Core Application Benefits",
      amount: "$2,500",
      frequency: "month",
      actionLabel: "Add to Plan",
      subscribed: false,
      onClick: () => alert("Suceffuly Added to the plan."),
    },
  ];

  return { isLoading, hasError, applications };
};
