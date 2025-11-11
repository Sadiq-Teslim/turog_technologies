import { SideMenuItemProps } from "@adiba-banking-cloud/backoffice/build/typings/components/menus/side/Side.types";

export const processEngineMenu = ({
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
    id: "processes",
    icon: { name: "ProgrammingArrow" },
    label: "Processes",
    active: index === "processes",
  },
  {
    id: "tasks",
    icon: { name: "Task" },
    label: "Tasklist",
    active: index === "tasks",
  },
  {
    id: "decisions",
    icon: { name: "MessageQuestion" },
    label: "Decisions",
    active: index === "decisions",
  },
];
