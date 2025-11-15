import { SimpleAreaChartProps } from "@adiba-banking-cloud/backoffice/build/typings/components/charts/area/Area.types";
import { TitleWithIndexProps } from "@adiba-banking-cloud/backoffice/build/typings/components/general/title/Title.types";
import { TitledPanelProps } from "@adiba-banking-cloud/backoffice/build/typings/components/panels/simple/Simple.types";

export interface ActiveConsentPanelProps{
    props: TitledPanelProps;
    title: TitleWithIndexProps;
    data: SimpleAreaChartProps
    interval : [string, ((value: string) => void)]
    buttons: string[]
}
