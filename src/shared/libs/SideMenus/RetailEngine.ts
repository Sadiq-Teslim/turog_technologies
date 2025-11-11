import { SideMenuItemProps } from "@adiba-banking-cloud/backoffice/build/typings/components/menus/side/Side.types";

/**
 * Retail Engine Menu
 */
export const retailEngineMenu = ({
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
    active: ["clients", "merchants", "communities"].includes(index),
    children: [
      {
        id: "clients",
        label: "Clients",
        active: index === "clients",
        href: "/clients",
      },
      {
        id: "merchants",
        label: "Merchants",
        active: index === "merchants",
        href: "/merchants",
      },
      {
        id: "communities",
        label: "Communities",
        active: index === "communities",
        href: "/communities",
      },
    ],
  },
  {
    id: "accounts",
    icon: { name: "WalletMoney" },
    label: "Accounts",
    active: ["savings", "credits", "investments"].includes(index),
    children: [
      {
        id: "savings",
        label: "Savings Account",
        active: index === "savings",
        href: "/savings",
      },
      {
        id: "credits",
        label: "Credit Accounts",
        active: index === "credits",
        href: "/credits",
      },
      {
        id: "investments",
        label: "Investment Accounts",
        active: index === "investments",
        href: "/investments",
      },
    ],
  },
];
