import { ConnectionPanelProps } from "@adiba-banking-cloud/backoffice/build/typings/components/panels/connection/Connection.types";
import { ConnectionsPageProps } from "../types/ConnectionsPageProps.types";
import { useModal } from "@adiba-banking-cloud/backoffice";
import { useSetConnectionStatus } from "./useSetConnectionStatus";
import { EditConnectionForm } from "../../pages/connections/EditConnectionForm";
import { useApplicationDrawerState } from "./useApplicationDrawerState";
import { ConfirmationModalProps } from "@adiba-banking-cloud/backoffice/build/typings/shared/hooks/modals/useModal.types";

export const useFetchConnections = (): ConnectionsPageProps => {
  const { ConfirmationModal, SuccessModal, ErrorModal, TwoFactorVerificationModal } = useModal();
  const { toggle: togglePauseConnection } = useSetConnectionStatus();
  const [drawer, setDrawer] = useApplicationDrawerState();

  const pauseConnection = (e: React.MouseEvent<HTMLButtonElement>) => {
    const connectionId = e.currentTarget.dataset.index;
    const success = () => SuccessModal({
      message: "Connection is suspended successfully.",
      button: {
        label: "Okay! Thanks.",
        onClick: () => {},
      },
    });
    const error = () => ErrorModal({
      message: "Problems occurred while suspending connection.",
      button: {
        label: "Ouch! Retry Later.",
        onClick: () => {},
      },
    });

    const verify = () => TwoFactorVerificationModal({
      title: "Two-Factor Verification",
      children: "Please enter your two-factor authentication code.",
      pinLength: 6,
      onConfirm: error,
    });

    return ConfirmationModal({
      children: "Are you sure you want to suspend this connection?",
      labels: {
        cancel: "Cancel",
        confirm: "Suspend",
      },
      onConfirm: togglePauseConnection(connectionId) ? success : verify
    } as ConfirmationModalProps);
  };

  const editConnection = (e: React.MouseEvent<HTMLButtonElement>) => {
    const connectionId = e.currentTarget.dataset.index;
    setDrawer({ ...drawer, opened: true, page: EditConnectionForm(), title: "Edit Connection" });
  };


  const testConnection = (e: React.MouseEvent<HTMLButtonElement>) => {
    const connectionId = e.currentTarget.dataset.index;
    alert("Test Function Triggered");
  };


  return {
    isLoading: false,
    hasError: false,
    connections: [
      IdentityServer(pauseConnection, editConnection, testConnection),
      CorebankingAdapter(pauseConnection, editConnection, testConnection),
      BusinessProcessManagerAdapter(pauseConnection, editConnection, testConnection),
      EnterpriseResoucePlanningAdapter(pauseConnection, editConnection, testConnection),
    ],
  };
};

const IdentityServer = (
  pauseConnection: (e: React.MouseEvent<HTMLButtonElement>) => void,
  editConnection: (e: React.MouseEvent<HTMLButtonElement>) => void, 
  testConnection: (e: React.MouseEvent<HTMLButtonElement>) => void
): ConnectionPanelProps => ({
  id: "identity-server",
  altColor: "altiba",
  name: "Identity Server Adapter",
  status: "Active",
  statusColor: "lime",
  edit: {
    label: "Edit Connection",
    onClick: editConnection,
  },
  test: {
    label: "Test Connection",
    onClick: testConnection,
  },
  pause: {
    label: "Pause Connection",
    onClick: pauseConnection,
  },
  details: [
    {
      label: "Connection:",
      value: "WSO2 Idenity Server 7.1",
    },
    {
      label: "Host:",
      value: "https://localhost:9443",
    },
    {
      label: "Tenant ID:",
      value: "s9di-iuiwe-12ho-2012",
    },
    {
      label: "Username:",
      value: "wso2-is-admin",
    },
  ],
});

const CorebankingAdapter = (
  pauseConnection: (e: React.MouseEvent<HTMLButtonElement>) => void,
  editConnection: (e: React.MouseEvent<HTMLButtonElement>) => void, 
  testConnection: (e: React.MouseEvent<HTMLButtonElement>) => void
): ConnectionPanelProps => ({
  id: "core-banking",
  altColor: "altiba",
  name: "Core Banking Adapter",
  status: "Active",
  statusColor: "lime",
  edit: {
    label: "Edit Connection",
    onClick: editConnection,
  },
  test: {
    label: "Test Connection",
    onClick: testConnection,
  },
  pause: {
    label: "Pause Connection",
    onClick: pauseConnection,
  },
  details: [
    {
      label: "Connection:",
      value: "Apache Fineract 1.12",
    },
    {
      label: "Host:",
      value: "https://localhost:8443/fineract-provider/v1",
    },
    {
      label: "Tenant ID:",
      value: "s9di-iuiwe-12ho-2012",
    },
    {
      label: "Username:",
      value: "wso2-is-admin",
    },
  ],
});

const BusinessProcessManagerAdapter = (
  pauseConnection: (e: React.MouseEvent<HTMLButtonElement>) => void,
  editConnection: (e: React.MouseEvent<HTMLButtonElement>) => void, 
  testConnection: (e: React.MouseEvent<HTMLButtonElement>) => void
): ConnectionPanelProps => ({
  id: "business-process-manager",
  altColor: "altiba",
  name: "Automation Engine Adapter",
  status: "Active",
  statusColor: "lime",
  edit: {
    label: "Edit Connection",
    onClick: editConnection,
  },
  test: {
    label: "Test Connection",
    onClick: testConnection,
  },
  pause: {
    label: "Pause Connection",
    onClick: pauseConnection,
  },
  details: [
    {
      label: "Connection:",
      value: "Camunda Run 7.0",
    },
    {
      label: "Host:",
      value: "https://localhost:9091",
    },
    {
      label: "Tenant ID:",
      value: "s9di-iuiwe-12ho-2012",
    },
    {
      label: "Username:",
      value: "wso2-is-admin",
    },
  ],
});

const EnterpriseResoucePlanningAdapter = (
  pauseConnection: (e: React.MouseEvent<HTMLButtonElement>) => void,
  editConnection: (e: React.MouseEvent<HTMLButtonElement>) => void, 
  testConnection: (e: React.MouseEvent<HTMLButtonElement>) => void
): ConnectionPanelProps => ({
  id: "enterprise-resource-planning",
  altColor: "altiba",
  name: "ERP Server Adapter",
  status: "Active",
  statusColor: "lime",
  edit: {
    label: "Edit Connection",
    onClick: editConnection,
  },
  test: {
    label: "Test Connection",
    onClick: testConnection,
  },
  pause: {
    label: "Pause Connection",
    onClick: pauseConnection,
  },
  details: [
    {
      label: "Connection:",
      value: "Odoo Community 17",
    },
    {
      label: "Host:",
      value: "https://localhost:8069",
    },
    {
      label: "Tenant ID:",
      value: "s9di-iuiwe-12ho-2012",
    },
    {
      label: "Username:",
      value: "wso2-is-admin",
    },
  ],
});
