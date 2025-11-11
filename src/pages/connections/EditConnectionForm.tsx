import { SimpleForm } from "@adiba-banking-cloud/backoffice";
import { SimpleFormProps } from "@adiba-banking-cloud/backoffice/build/typings/components/forms/simple/Simple.types";
import React from "react";

export const EditConnectionForm = () => {
  const EditConnectionsForm: SimpleFormProps = {
    hasReset: true,
    hasSubmit: true,
    isEditable: true,
    fields: [
      "Connection Type",
      "Connection Name",
      "Database/ Tenant ID",
      "Connection URL",
      "Connection Username"
    ],
  };
  return <SimpleForm {...EditConnectionsForm} />;
};
