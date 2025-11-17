import { OverviewPanelProps } from "../../types/OverviewPanelProps.types";

export interface StatPanelProps extends OverviewPanelProps {
  value: string | number;
  subValue?: string | number;
}
