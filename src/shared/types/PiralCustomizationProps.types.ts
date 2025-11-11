import { PiralStateConfiguration } from "piral-core";
import { PageTitleProps } from "@adiba-banking-cloud/backoffice/build/typings/components/general/title/Title.types";
import {
  UserActionProps,
  ModalActionProps,
  ToastActionProps,
  NotificationActionProps,
  DrawerActionProps,
} from "@adiba-banking-cloud/backoffice/build/typings/shared/types/ActionProps.types";
import { UserStateProps } from "./UserStateProps.types";
import { DrawerProps } from "@adiba-banking-cloud/backoffice/build/typings/components/general/drawer/Drawer.types";

declare module "piral-core/lib/types/custom" {
  interface PiletApi extends PiletCustomApi {}

  interface PiletCustomApi {
    setUser: (user: UserActionProps) => void;
    setModal: (modal: ModalActionProps) => void;
    updateModal: (modal: ModalActionProps) => void;
    closeModal: (modal: ModalActionProps) => void;
    setDrawer: (drawer: DrawerActionProps) => void;
    setPageTitle: (pageTitle: PageTitleProps) => void;
    setNotification: (notification: NotificationActionProps) => void;
    setToast: (toast: ToastActionProps) => void;
  }

  interface PiralCustomState extends PiralStateConfiguration {
    user: UserStateProps;
    ui: {
      modals: {
        isOpen: boolean;
        type: string | null;
        data: any;
      };
      notifications: Array<{
        id: string;
        type: "success" | "error" | "warning" | "info";
        message: string;
        timestamp: Date;
      }>;
      sidebar: {
        collapsed: boolean;
        activeItem: string;
      };
      drawer: DrawerProps;
      pageTitle?: PageTitleProps;
    };
  }

  interface PiralCustomComponentState {
    // TODO: Add custom components state here
  }
}
