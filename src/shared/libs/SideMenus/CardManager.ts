import { SideMenuItemProps } from "@adiba-banking-cloud/backoffice/build/typings/components/menus/side/Side.types";

export const cardManagerMenu = ({
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
    id: "cards",
    icon: {
      name: "CardPos",
    },
    label: "Cards",
    active: index === "cards",
  },
  {
    id: "transactions",
    icon: {
      name: "Receipt21",
    },
    label: "Transactions",
    active: index === "transactions",
  },
  {
    id: "campaigns",
    icon: {
      name: "CloudFog",
    },
    label: "Campaigns",
    active: index === "campaigns",
  },
];