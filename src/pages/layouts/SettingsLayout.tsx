import React from "react";

import { Box, Tabs } from "@mantine/core";
import { SettingsTabProps } from "../../shared/types/LayoutProps.types";
import { useLocation, useNavigate } from "react-router-dom";
import { SimplePanel } from "@adiba-banking-cloud/backoffice";

export const SettingsLayout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <SimplePanel>
      <Tabs value={location.pathname.split("/").join("-")}>
        <Tabs.List>
          {SettingsTabs.map((tab, index) => {
            return (
              <Tabs.Tab
                p={"md"}
                fw={300}
                value={tab.href.split("/").join("-")}
                key={`tab-${index}`}
                onClick={() => navigate(tab.href)}
              >
                {tab.name}
              </Tabs.Tab>
            );
          })}
        </Tabs.List>
        <Box pt={"md"}>{children}</Box>
      </Tabs>
    </SimplePanel>
  );
};

const SettingsTabs: SettingsTabProps[] = [
  {
    name: "Preferences",
    href: "/settings/preferences",
  },
  {
    name: "Subscriptions",
    href: "/settings/subscriptions",
  },
  {
    name: "Connections",
    href: "/settings/connections",
  },
  {
    name: "Members",
    href: "/settings/members",
  },
  {
    name: "Applications",
    href: "/settings/applications",
  },
];
