import { PageTitleProps } from "@adiba-banking-cloud/backoffice/build/typings/components/general/title/Title.types";
import { useGlobalState, useGlobalStateContext } from "piral-core";
import { ApplicationMenuListProps } from "../types/ApplicationMenuListProps.types";
import { useEffect } from "react";

interface ActiveApplicationProps {
  application: ApplicationMenuListProps;
  pageTitle: PageTitleProps;
}

export const useActiveApplication = (): ActiveApplicationProps => {
  const application = useGlobalState((state) => ({
    application: state.user?.app,
    pageTitle: state.ui?.pageTitle,
  }));
  return application;
};

