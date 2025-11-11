import { SimpleForm } from "@adiba-banking-cloud/backoffice";
import { SimpleFormProps } from "@adiba-banking-cloud/backoffice/build/typings/components/forms/simple/Simple.types";
import React from "react";

export const EditCompanyForm = () => {
  const EditCompanyForm: SimpleFormProps = {
    hasReset: true,
    hasSubmit: true,
    isEditable: true,
    onSubmit: (values) => {
      console.log(values);
    },
    fields: [
      {
        component: "TextInput",
        field: {
          label: "Company Name",
          name: "company_name",
          value: "Contoso",
        },
      },
      {
        component: "TextInput",
        field: { label: "Tenant ID", name: "tenant_id", value: "1234567890" },
      },
      "Company Phone",
      "Company Email",
      "Company City",
      "Company Country",
    ],
    initialValues: {
      company_name: "Contoso",
      company_city: "New York",
      company_country: "United States",
      company_phone: "123-456-7890",
      company_email: "contoso@contoso.com",
    },
  };
  return <SimpleForm {...EditCompanyForm} />;
};
