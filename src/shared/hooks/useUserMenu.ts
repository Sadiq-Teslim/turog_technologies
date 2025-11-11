import { ConfirmationModalProps } from "@adiba-banking-cloud/backoffice/build/typings/shared/hooks/modals/useModal.types";
import { UsermenuProps } from "@adiba-banking-cloud/backoffice/build/typings/components/menus/user/User.types";
import { useApplicationDrawerState } from "./useApplicationDrawerState";
import { ViewProfilePage } from "../../pages/profile/ViewProfilePage";
import { ChangePasswordForm } from "../../pages/profile/ChangePasswordForm";
import { useNavigate } from "react-router";
import { useModal } from "@adiba-banking-cloud/backoffice";
import { useGlobalState } from "piral-core";

export const useUserMenu = (): UsermenuProps => {
  const navigate = useNavigate();
  const { ConfirmationModal } = useModal();
  const [drawer, setDrawer] = useApplicationDrawerState();
  const user = useGlobalState((m) => m.user);
  return {
    name: user?.name,
    username: user?.email,
    sections: [
      {
        items: [
          {
            label: "View Profile",
            icon: { name: "ProfileCircle" },
            disclosure: true,
            callbackFn: () =>
              setDrawer({
                ...drawer,
                opened: true,
                title: "View Profile",
                page: ViewProfilePage(),
              }),
          },
          {
            label: "Change Password",
            icon: { name: "Key" },
            disclosure: true,
            callbackFn: () =>
              setDrawer({
                ...drawer,
                opened: true,
                title: "Change Password",
                page: ChangePasswordForm(),
              }),
          },
        ],
      },
      {
        title: "Subscriptions",
        items: [
          {
            label: "Current Plan",
            badge: {
              text: "BASIC",
              color: "adiba.3",
            },
            icon: { name: "SliderHorizontal" },
            callbackFn: () => navigate("/settings/subscriptions"),
          },
          {
            label: "Due Invoices",
            badge: {
              text: "4",
              color: "red",
            },
            icon: { name: "Barcode" },
            callbackFn: () => navigate("/settings/subscriptions"),
          },
        ],
      },
      {
        title: "Bookmarks",
        items: [
          {
            label: "Starred Clients",
            icon: { name: "Star1" },
          },
          {
            label: "Flagged Accounts",
            icon: { name: "Flag" },
          },
        ],
      },
      {
        color: "red",
        items: [
          {
            label: "Logout",
            icon: { name: "LogoutCurve" },
            callbackFn: () =>
              ConfirmationModal({
                children: "Are you sure you want to logout?", // TODO: translate
                labels: {
                  cancel: "Cancel",
                  confirm: "Logout",
                },
                onConfirm: () => navigate("/logout"),
              } as ConfirmationModalProps),
          },
        ],
      },
    ],
  };
};
