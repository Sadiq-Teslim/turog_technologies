import { ApplicationPanelProps } from "@adiba-banking-cloud/backoffice/build/typings/components/panels/application/Application.types";

export interface BaseApplicationPageProps {
    isLoading: boolean;
    hasError: boolean;
    applications: ApplicationPanelProps[]
}