import { SideMenuItemProps } from "@adiba-banking-cloud/backoffice/build/typings/components/menus/side/Side.types";

/**
 * Ledger Sync Menu
 */
export const ledgerSyncMenu = ({
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
    id: "runner",
    icon: { name: "Flashy" },
    label: "Runner",
    active: ["synchronize", "connections", "ledgers"].includes(index),
    children: [
      {
        id: "synchronize",
        label: "Synchronize",
        active: index === "synchronize",
      },
      {
        id: "connections",
        label: "Connections",
        active: index === "connections",
      },
      {
        id: "ledgers",
        label: "Ledgers",
        active: index === "ledgers",
      },
    ],
  },
  {
    id: "operations",
    icon: { name: "ChartSuccess" },
    label: "Operations",
    active: ["queue-monitor", "scheduled-tasks", "batch-operations"].includes(
      index
    ),
    children: [
      {
        id: "queue-monitor",
        label: "Queue Monitor",
        active: index === "queue-monitor",
      },
      {
        id: "scheduled-tasks",
        label: "Scheduled Tasks",
        active: index === "scheduled-tasks",
      },
      {
        id: "batch-operations",
        label: "Batch Operations",
        active: index === "batch-operations",
      },
    ],
  },
  {
    id: "reports",
    icon: { name: "PresentionChart" },
    label: "Reports",
    active: ["summary-diffs", "detailed-diffs", "exception-report"].includes(
      index
    ),
    children: [
      {
        id: "summary-diffs",
        label: "Summary Diffs",
        active: index === "summary-diffs",
      },
      {
        id: "detailed-diffs",
        label: "Detailed Diffs",
        active: index === "detailed-diffs",
      },
      {
        id: "exception-report",
        label: "Exception Report",
        active: index === "exception-report",
      },
    ],
  },
];
