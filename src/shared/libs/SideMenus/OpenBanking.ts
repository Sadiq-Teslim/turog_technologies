import { SideMenuItemProps } from "@adiba-banking-cloud/backoffice/build/typings/components/menus/side/Side.types";

export const openBankingMenu = ({
  index,
}: {
  index: string;
}): SideMenuItemProps[] => [
  {
    id: "dashboard",
    icon: {
      name: "Home",
    },
    label: "Dashboard",
    active: index === "dashboard",
    href: "/",
  },
  {
    id: "stakeholders",
    icon: { name: "People" },
    label: "Stakeholders",
    active: ["customers", "providers", "merchants"].includes(index),
    children: [
      {
        id: "customers",
        label: "Customers",
        active: index === "customers",
      },
      {
        id: "providers",
        label: "Providers",
        active: index === "providers",
      },
      {
        id: "merchants",
        label: "Merchants",
        active: index === "merchants",
      },
    ],
  },
  {
    id: "consumer-apps",
    icon: { name: "WalletMoney" },
    label: "Consumer Apps",
    active: ["consents", "purposes", "clients"].includes(index),
    children: [
      {
        id: "consents",
        label: "Consent",
        active: index === "consents",
      },
      {
        id: "purposes",
        label: "Purposes",
        active: index === "purposes",
      },
      {
        id: "clients",
        label: "Applications",
        active: index === "clients",
      },
    ],
  },
];
