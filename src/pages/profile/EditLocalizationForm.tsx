import { SimpleForm } from "@adiba-banking-cloud/backoffice";
import { SimpleFormProps } from "@adiba-banking-cloud/backoffice/build/typings/components/forms/simple/Simple.types";
import React from "react";

export const EditLocalizationForm = () => {
    const EditLocalizationForm: SimpleFormProps = {
        hasReset: true,
        hasSubmit: true,
        isEditable: true,
        onSubmit: (values) => {
            console.log(values);
        },
        fields: ["Language", "Timezone", "Currency", "Date Format", "Number Format"],
        initialValues: {
            language: "English",
            timezone: "UTC",
            currency: "USD",
            date_format: "MM/DD/YYYY",
            number_format: "1,234.56",
        },
    };
    return <SimpleForm {...EditLocalizationForm} />;
};