import { SimpleForm } from "@adiba-banking-cloud/backoffice";
import { SimpleFormProps } from "@adiba-banking-cloud/backoffice/build/typings/components/forms/simple/Simple.types";
import { NumberInput, Select } from "@mantine/core";
import React from "react";

export const EditMemberForm = () => {
  const EditMemberForm: SimpleFormProps = {
    hasReset: true,
    hasSubmit: true,
    isEditable: true,
    onSubmit: (data) => {
      console.log(data);
    },
    fields: [
      "First Name",
      "Last Name",
      "Designation",
      {
        component: "TextInput",
        field: {
          name: "Username",
          label: "Username (must end in tenant domain)",
          placeholder: "example: joe.contoso@adiba.app",
        },
      },
      () => (
        <NumberInput
          leftSectionWidth={100}
          hideControls={true}
          leftSection={
            <Select
              ml={-1}
              mr={'xs'}
              name="prefix"
              data={["+234", "+1", "+44"]}
              fz={"sm"}
              fw={300}
              bd={0}
            />
          }
          label="Phone Number"
          labelProps={{
            fw: 300,
            fz: "sm",
            pb: 5,
            c: "adiba.5",
          }}
          name="phone"
        />
      ),
      {
        component: "TextInput",
        field: {
          label: "Alt. Email Address",
          placeholder: "Please enter alternative email",
          required: false,
        },
      },
      "City",
      "Country",
      "Timezone",
      "Language",
      {
        component: "Textarea",
        field: {
          label: "Notes",
          placeholder: "Please enter notes",
          rows: 5,
          required: false,
        },
      },
    ],
    layout: [6, 6, 12, 12,12, 12, 6, 6, 6, 6],
  };

  return <SimpleForm {...EditMemberForm} />;
};
