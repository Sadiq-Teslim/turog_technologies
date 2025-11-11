import { TitledPanelProps } from "@adiba-banking-cloud/backoffice/build/typings/components/panels/simple/Simple.types";

export interface OverviewPanelProps extends TitledPanelProps {
    footer?: OverviewPanelFooterProps;
}

interface OverviewPanelFooterProps {
  leftsection: React.ReactNode;
  rightsection?: React.ReactNode;
  withDivider?: boolean;
  withSeparator?: boolean;
}
