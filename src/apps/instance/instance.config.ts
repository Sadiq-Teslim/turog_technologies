import * as React from "react";
import { createStandardApi } from "piral";
import { createInstance } from "piral-core";
import {
  DashboardContainer,
  DashboardTile,
  ErrorInfo,
  Layout,
  MenuContainer,
  MenuItem,
  NotificationsHost,
  NotificationsToast,
} from "../../pages/layouts";
import { Root } from "react-dom/client";
import { MantineWrapper } from "../../pages/layouts/MantineWrapper";
import { createPageLayoutsApi } from "piral-page-layouts";
import { createBackofficeApi } from "./api.config";
import { UserActionProps } from "@adiba-banking-cloud/backoffice/build/typings/shared/types/ActionProps.types";

export const instance = createInstance({
  state: {
    components: {
      DashboardContainer,
      DashboardTile,
      ErrorInfo,
      Layout,
      MenuContainer,
      MenuItem,
      NotificationsHost,
      NotificationsToast,
    },
    user: {},
  },
  plugins: [
    ...createStandardApi(),
    createPageLayoutsApi(),
    createBackofficeApi(),
  ],
});

export const appRender = (root: Root, component: React.ReactNode) => {
  root.render(MantineWrapper({ children: component }));
};
