import React from "react";
import { useGlobalState, useGlobalStateContext } from "piral-core";
import { DrawerProps } from "@adiba-banking-cloud/backoffice/build/typings/components/general/drawer/Drawer.types";

export const useApplicationDrawerState = (): [
  DrawerProps,
  (drawer: DrawerProps) => void
] => {
  const drawer = useGlobalState((m) => m.ui?.drawer);
  const ctx = useGlobalStateContext();
  const setDrawer = (drawer: DrawerProps) =>
    ctx.dispatch((state) => ({
      ...state,
      ui: {
        ...state.ui,
        drawer,
      },
    }));

  return [{ ...drawer }, setDrawer];
};
