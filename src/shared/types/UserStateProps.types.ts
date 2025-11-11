import { ApplicationMenuListProps } from "./ApplicationMenuListProps.types";

export interface UserStateProps {
  id: string;
  app: ApplicationMenuListProps;
  name: string;
  given_name?: string;
  family_name?: string;
  email: string;
  role?: "admin" | "user" | "manager";
  permissions?: string[];
  preferences?: {
    theme: "light" | "dark";
    language: string;
    notifications: boolean | number;
  };
  portal?: PortalStateProps;
}

interface PortalStateProps {
  sidebarCollapsed: boolean;
  breadcrumbs: Array<{
    label: string;
    path: string;
  }>;
}
