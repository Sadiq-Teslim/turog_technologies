import * as React from "react";
import { MantineProvider } from "@mantine/core";
import {
  Icons,
  theme,
  useManagedModals,
} from "@adiba-banking-cloud/backoffice";
import { ModalsProvider } from "@mantine/modals";
import { DatesProvider } from "@mantine/dates";
import '@mantine/dates/styles.css';

export const MantineWrapper = ({ children }: { children: React.ReactNode }) => {
  const modals = useManagedModals();
  return (
    <MantineProvider theme={theme}>
      <DatesProvider settings={{
        locale: "en",
        timezone: "UTC",
      }}>
        <ModalsProvider
          modals={modals}
          modalProps={{
            centered: true,
            radius: "lg",
            padding: "lg",
            size: 340,
            closeButtonProps: {
              icon: <Icons name="CloseCircle" size={20} />,
            },
          }}
        >
          {children}
        </ModalsProvider>
      </DatesProvider>
    </MantineProvider>
  );
};
