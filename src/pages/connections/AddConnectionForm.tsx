import { SimpleForm } from "@adiba-banking-cloud/backoffice";
import { SimpleFormProps } from "@adiba-banking-cloud/backoffice/build/typings/components/forms/simple/Simple.types";
import React from "react";

export const AddConnectionForm = () => {
  const AddConnectionsForm: SimpleFormProps = {
    hasReset: true,
    hasSubmit: true,
    isEditable: true,
    fields: [
      "Connection Type",
      "Connection Name",
      "Database/ Tenant ID",
      "Connection URL",
      "Connection Username",
      {
        component: "PasswordInput",
        field: {
          label: "Connection Password",
          name: "connection_password",
          placeholder: "Enter Connection Password",
        },
      },
      {
        component: "PasswordInput",
        field: {
          label: "Confirm Connection Password",
          name: "confirm_connection_password",
          placeholder: "Confirm Connection Password",
        },
      },
    ],
  };
  return <SimpleForm {...AddConnectionsForm} />;
};
