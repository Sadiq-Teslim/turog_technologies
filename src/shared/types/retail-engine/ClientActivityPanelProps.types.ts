import { SimpleChartProps } from "@adiba-banking-cloud/backoffice/build/typings/components/charts/column/Column.types";
import { TitleWithIndexProps } from "@adiba-banking-cloud/backoffice/build/typings/components/general/title/Title.types";
import { TitledPanelProps } from "@adiba-banking-cloud/backoffice/build/typings/components/panels/simple/Simple.types";

export interface ClientActivityPanelProps{
    props: TitledPanelProps;
    title: TitleWithIndexProps;
    data: SimpleChartProps
    interval : [string, ((value: string) => void)]
    buttons: string[]
}
