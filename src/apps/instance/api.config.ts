import { PiralPlugin } from "piral-core";
import { PiletCustomApi } from "piral-core/lib/types/custom";
import {
  DrawerActionProps,
  ModalActionProps,
  ToastActionProps,
  NotificationActionProps,
  PageTitleActionProps,
  UserActionProps,
} from "@adiba-banking-cloud/backoffice/build/typings/shared/types/ActionProps.types";
import { GlobalApp } from "../../shared/libs/GlobalApp";

export const createBackofficeApi = (): PiralPlugin<Partial<PiletCustomApi>> => {
  const backoffice = GlobalApp();
  return (context) => (api, target) => ({
    setDrawer(drawer: DrawerActionProps) {
      context.dispatch((state) => ({
        ...state,
        ui: {
          ...state.ui,
          drawer: {
            ...state.ui.drawer,
            ...drawer,
            opened: true,
          },
        },
      }));
    },
    setModal(modal: ModalActionProps) {
      backoffice.showModal(modal);
    },
    updateModal(modal: ModalActionProps) {
      backoffice.updateModal(modal);
    },
    closeModal(modal: ModalActionProps) {
      backoffice.closeModal(modal);
    },
    setPageTitle(pageTitle: PageTitleActionProps) {
      console.log(pageTitle);
    },
    setNotification(notification: NotificationActionProps) {
      console.log(notification);
    },
    setToast(toast: ToastActionProps) {
      console.log(toast);
    },
    setUser(user: UserActionProps) {
      console.log(user);
    },
  });
};
