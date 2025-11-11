import { IconsProps } from "@adiba-banking-cloud/backoffice/build/typings/components/general/icons/Icons.types";
import { TitledPanelProps } from "@adiba-banking-cloud/backoffice/build/typings/components/panels/simple/Simple.types";
import { ButtonProps } from "@mantine/core";

export interface SummaryCardsProps{
    props: TitledPanelProps;
    data:  SummaryItemProps[];
    report: ReportItemProps
}

export interface SummaryItemProps{
    label: string;
    value: string;
}

export interface ReportItemProps{
    id: string;
    label: string;
    icon?: IconsProps
    meta?: ButtonProps
}