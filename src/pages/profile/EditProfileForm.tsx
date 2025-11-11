import { SimpleForm } from "@adiba-banking-cloud/backoffice";
import { SimpleFormProps } from "@adiba-banking-cloud/backoffice/build/typings/components/forms/simple/Simple.types";
import React from "react";

export const EditProfileForm = () => {
  const EditProfileForm: SimpleFormProps = {
    hasReset: true,
    hasSubmit: true,
    isEditable: true,
    onSubmit: (values) => {
      console.log(values);
    },
    fields: ["First Name", "Last Name", "Email", "Phone", "City", "Country"],
    initialValues: {
      "first_name": "John",
      "last_name": "Doe",
      "email": "john.doe@contoso.com",
      "phone": "123-456-7890",
      "city": "New York",
      "country": "United States",
    },
  };
  return <SimpleForm {...EditProfileForm} />;
};
