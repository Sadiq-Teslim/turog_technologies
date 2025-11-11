import {
  DrawerActionProps,
  ModalActionProps,
  ToastActionProps,
  NotificationActionProps,
  PageTitleActionProps,
  UserActionProps,
} from "@adiba-banking-cloud/backoffice/build/typings/shared/types/ActionProps.types";
import { useModal } from "@adiba-banking-cloud/backoffice";
import { modals } from "@mantine/modals";
import {
  ConfirmationModalProps,
  SimpleModalProps,
} from "@adiba-banking-cloud/backoffice/build/typings/shared/hooks/modals/useModal.types";
import { useApplicationDrawerState } from "../../hooks/useApplicationDrawerState";

export const GlobalApp = () => {
  const onModal = useModal();
  return {
    showModal: (modal: ModalActionProps) => onShowModal(modal, onModal),
    updateModal: (modal: ModalActionProps) => onUpdateModal(modal),
    closeModal: (modal: ModalActionProps) => onCloseModal(modal),
    showToast: (toast: ToastActionProps) => onShowToast(toast),
    showNotification: (notification: NotificationActionProps) =>
      onShowNotification(notification),
    showPageTitle: (pageTitle: PageTitleActionProps) =>
      onShowPageTitle(pageTitle),
    showUser: (user: UserActionProps) => onShowUser(user),
  };
};

const onShowModal = (
  modal: ModalActionProps,
  onModal: ReturnType<typeof useModal>
) => {
  const {
    ConfirmationModal,
    ErrorModal,
    SimpleModal,
    SuccessModal,
    TwoFactorVerificationModal,
  } = onModal;
  switch (modal.type) {
    case "confirmation":
      modals.closeAll();
      return ConfirmationModal({
        title: modal.title,
        children: modal.children,
        onConfirm: modal.confirm?.onClick,
        onCancel: modal.cancel?.onClick,
        closeOnConfirm: modal.confirm?.onClick ? false : true,
        labels: {
          cancel: modal.cancel?.label,
          confirm: modal.confirm?.label,
        },
        loading: modal.isLoading,
        modalProps: modal.modalProps,
      } as ConfirmationModalProps);
    case "error":
      modals.closeAll();
      return ErrorModal({
        title: modal.title,
        message: modal.children as string,
        button: {
          label: modal.confirm?.label || "Ouch! No worries.",
          onClick: modal.confirm?.onClick || (() => modals.closeAll()),
        },
      });
    case "simple":
      modals.closeAll();
      return SimpleModal({
        title: modal.title,
        message: modal.children,
      } as SimpleModalProps);
    case "success":
      modals.closeAll();
      return SuccessModal({
        title: modal.title,
        message: modal.children as string,
        button: {
          label: modal.confirm?.label || "OK! Thanks.",
          onClick: () => {
            modals.closeAll();
          },
        },
      });
    //     case "2fa":
    //       return TwoFactorVerificationModal({
    //         title: modal.title,
    //         message: modal.message,
    //         button: {
    //           label: modal.button.label,
    //           onClick: modal.button.onClick,
    //         },
    //       });
  }
};

const onUpdateModal = (modal: ModalActionProps) => {
  switch (modal.type) {
    case "confirmation":
      modals.updateModal({
        modalId: modal.modalId,
        title: modal.title,
        children: modal.children,
      });
  }
};

const onCloseModal = (modal: ModalActionProps) => {
  modals.closeAll();
};

const onShowToast = (toast: ToastActionProps) => {
  console.log(toast);
};

const onShowNotification = (notification: NotificationActionProps) => {
  console.log(notification);
};

const onShowPageTitle = (pageTitle: PageTitleActionProps) => {
  console.log(pageTitle);
};

const onShowUser = (user: UserActionProps) => {
  console.log(user);
};
