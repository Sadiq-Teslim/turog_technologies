import { BaseTableColumnProps } from "@adiba-banking-cloud/backoffice/build/typings/components/tables/simple/Simple.types";

export interface MembersPageProps {
    isLoading: boolean;
    hasError: boolean;
    pageTitle: string;
    pageDescription: string;
    members: MemberTableProps
}

export interface MemberTableProps{
    columns: BaseTableColumnProps[];
    rows: MemberListItemProps[];
}

export interface MemberListItemProps{ 
    id: string;
    avatar?: string;
    firstname: string;
    lastname: string;
    position: string;
    email: string;
    lastLoginDays: number;
    lang: string;
    timezone: string;
}