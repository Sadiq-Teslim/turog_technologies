import { ConnectionPanelProps } from "@adiba-banking-cloud/backoffice/build/typings/components/panels/connection/Connection.types";

export interface ConnectionsPageProps {
  isLoading: boolean;
  hasError: boolean;
  connections: ConnectionPanelProps[];
}
