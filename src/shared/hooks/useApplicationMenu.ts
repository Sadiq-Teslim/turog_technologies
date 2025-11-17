import {
  ApplicationMenuItemProps,
  ApplicationMenuProps,
} from "@adiba-banking-cloud/backoffice/build/typings/components/menus/application/Application.types";
import { useNavigate } from "react-router";
import { useGlobalState, useGlobalStateContext } from "piral-core";
import { ApplicationMenuListProps } from "../types/ApplicationMenuListProps.types";

export const useApplicationMenu = (): ApplicationMenuProps => {
  const APPLICATION_MENU_SIZE = 4;
  const ctx = useGlobalStateContext();
  const app = useGlobalState((state) => state.user?.app);
  const navigate = useNavigate();

  const onApplicationItem = (e: React.MouseEvent<HTMLAnchorElement>) => {
    ctx.dispatch((state) => ({
      ...state,
      user: {
        ...state.user,
        app: e.currentTarget.dataset.index as ApplicationMenuListProps,
      },
    }));
    navigate("/");
  };

  const items = (
    size: number,
    app: ApplicationMenuListProps
  ): ApplicationMenuItemProps[] =>
    [
      {
        seq: 10,
        title: "Retail / Loan Engine",
        id: "retail-engine",
        icon: { name: "ArrangeHorizontal" },
        active: false,
        onClick: onApplicationItem,
        description: "Retail Engine solutions",
      },
      {
        seq: 20,
        title: "Settlement",
        id: "settlement",
        icon: { name: "BatteryFull" },
        active: false,
        onClick: onApplicationItem,
        description: "Settlement",
      },
      {
        seq: 40,
        title: "Open Banking",
        id: "open-banking",
        icon: { name: "ArrangeHorizontal" },
        active: false,
        onClick: onApplicationItem,
        description: "Process Engine solutions",
      },
      {
        seq: 50,
        title: "Cards Manager",
        id: "card-manager",
        icon: { name: "ArrangeHorizontal" },
        active: false,
        onClick: onApplicationItem,
        description: "Process Engine solutions",
      },
      {
        seq: 60,
        title: "Process Engine",
        id: "process-engine",
        icon: { name: "ArrangeHorizontal" },
        active: false,
        onClick: onApplicationItem,
        description: "Process Engine solutions",
      },
    ]
      .map((item, index) => ({
        ...(item as ApplicationMenuItemProps),
        active: item.id === app,
        seq: item.id === app ? 1 : index + 2,
      }))
      .sort((a, b) => a.seq - b.seq);

  const menuItems = items(
    APPLICATION_MENU_SIZE,
    app as ApplicationMenuListProps
  );

  return {
    moreLink: "/settings/applications",
    length: APPLICATION_MENU_SIZE,
    moreText: "See all applications", // TODO: Translate
    transition: "pop",
    label: menuItems.find((item) => item.id === app)?.title || "",
    items: menuItems,
  };
};