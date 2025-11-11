import { SideMenuItemProps } from "@adiba-banking-cloud/backoffice/build/typings/components/menus/side/Side.types";

export const CommonMenu = ({
  index,
}: {
  index: string;
}): SideMenuItemProps[] => [
  {
    id: "documents",
    icon: {
      name: "DocumentText",
    },
    label: "Documents",
    active: index === "documents",
    href: "/documents",
  },
  {
    id: "messages",
    icon: {
      name: "Sms",
    },
    label: "Messages",
    active: index === "messages",
    href: "/messages",
  },
  {
    id: "settings",
    icon: { name: "Setting5" },
    label: "Settings",
    href: "/settings/preferences",
    active: index === "settings",
  },
];
