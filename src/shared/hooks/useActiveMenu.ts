import { SideMenuProps } from "@adiba-banking-cloud/backoffice/build/typings/components/menus/side/Side.types";
import {
  CommonMenu,
  retailEngineMenu,
  ledgerSyncMenu,
  settlementMenu,
} from "../libs/SideMenus";
import { useLocation } from "react-router";
import { ApplicationMenuListProps } from "../types/ApplicationMenuListProps.types";
import { processEngineMenu } from "../libs/SideMenus/ProcessEngine";
import { useEffect, useRef, useState } from "react";
import { useFetchActiveMenuItem } from "./useFetchActiveMenuItem";

export const useActiveMenu = ({
  app,
}: {
  app?: ApplicationMenuListProps;
}): SideMenuProps => {
  const location = useLocation();
  const pathname = location.pathname;
  const menuItems = {
    "retail-engine": retailEngineMenu,
    "ledgersync": ledgerSyncMenu,
    "settlement": settlementMenu,
    "process-engine": processEngineMenu,
    "open-banking": processEngineMenu,
    "card-manager": processEngineMenu,
  };

  const previousPathRef = useRef(pathname);
  const [activePath, setActivePath] = useState("dashboard");

  // Simple path change detection
  useEffect(() => {
    setActivePath(useFetchActiveMenuItem(pathname));
    if (previousPathRef.current !== pathname) {
      previousPathRef.current = pathname;
    }
  }, [location.pathname]);

  return {
    color: "adiba",
    variant: "filled",
    sidemenu: [
      ...menuItems[app]({ index: activePath }),
      ...CommonMenu({ index: activePath }),
    ],
  };
};
