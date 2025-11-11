import { SimpleForm } from "@adiba-banking-cloud/backoffice";
import { SimpleFormProps } from "@adiba-banking-cloud/backoffice/build/typings/components/forms/simple/Simple.types";
import React from "react";

export const ChangePasswordForm = () => {
  const ChangePasswordForm: SimpleFormProps = {
    hasReset: true,
    hasSubmit: true,
    isEditable: true,
    onSubmit: (values) => {
      console.log(values);
    },
    fields: [
      {
        component: "PasswordInput",
        field: { name: "New Password" },
      },
      {
        component: "PasswordInput",
        field: { name: "Confirm Password" },
      },
    ],
  };
  return <SimpleForm {...ChangePasswordForm} />;
};