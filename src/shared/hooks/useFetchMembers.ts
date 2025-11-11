import React from "react";
import {
    MemberListItemProps,
  MembersPageProps,
  MemberTableProps,
} from "../types/MembersPageProps.types";
import {
  BaseTableColumnProps,
  BaseTableRowProps,
} from "@adiba-banking-cloud/backoffice/build/typings/components/tables/simple/Simple.types";

export const useFetchMembers = (): MembersPageProps => {
  const isLoading = false;
  const hasError = false;
  const pageTitle = "Members Management Area"; //TODO: translation
  const pageDescription = //TODO: Translation
    "This section of the platform is specifically designed for managing ADIBA Backoffice Users, who are integral members of your Tenant Organization. "
  const columns: BaseTableColumnProps[] = ["member", "username", "localization"].map(
    (value, item): BaseTableColumnProps => ({
      id: value.toLowerCase(),
      order: item + 1,
      label: value,
    })
  );
  const rows: MemberListItemProps[] = [{
    id: "john-doe",
    email: "john.doe@contoso.com",
    firstname: "John",
    lastname: "Doe",
    position: "Systems Administrator",
    lastLoginDays: 2,
    timezone: "Africa/Lagos",
    lang: "English"
  },{
    id: "seyi-akamo",
    email: "seyi.akamo@turog.ng",
    firstname: "Seyi",
    lastname: "Akamo",
    position: "Compliance Officer",
    lastLoginDays: 0,
    timezone: "Africa/Lagos",
    lang: "English"
  },{
    id: "wale-olanrewaju",
    email: "olawale.olanrewaju@turog.ng",
    firstname: "Olawale",
    lastname: "Olanrewaju",
    position: "Relationship Officer",
    lastLoginDays: 5,
    timezone: "Africa/Lagos",
    lang: "English"
  },];
  const members: MemberTableProps = { columns, rows };

  return { isLoading, hasError, pageTitle, pageDescription, members };
};
