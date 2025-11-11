import React, { useEffect } from "react";
import { LayoutProps, useGlobalStateContext } from "piral-core";
import { useDisclosure } from "@mantine/hooks";
import {
  MantineProvider,
  AppShell,
  Group,
  Stack,
  Center,
  Divider,
  Space,
} from "@mantine/core";
import {
  ApplicationMenu,
  DynamicLogo,
  Icons,
  PageTitle,
  SideMenu,
  theme,
  useManagedModals,
  UserMenu,
} from "@adiba-banking-cloud/backoffice";
import { useActiveMenu } from "../../shared/hooks/useActiveMenu";
import { useUserMenu } from "../../shared/hooks/useUserMenu";
import { useApplicationMenu } from "../../shared/hooks/useApplicationMenu";
import { useActiveApplication } from "../../shared/hooks/useActiveApplication";
import { RouteTransition } from "../../shared/components/RouteTransition";
import { ModalsProvider } from "@mantine/modals";
import { ApplicationDrawer } from "../../shared/components/ApplicationDrawer";
import { setPageTitle } from "../../shared/libs/DynamicPage/setPageTitle";
import { useLocation } from "react-router";

export const Layout: React.ComponentType<LayoutProps> = ({ children }) => {
  const [opened, { toggle }] = useDisclosure(false);
  const activeApplication = useActiveApplication();
  const userMenu = useUserMenu();
  const activeMenu = useActiveMenu({
    app: activeApplication.application,
  });

  const ctx = useGlobalStateContext();
  const applicationMenu = useApplicationMenu();
  const pageTitle = setPageTitle();
  const location = useLocation();
  const pathname = location.pathname;

  // Set page title and drawer state
  useEffect(() => {
    ctx.dispatch((state) => ({
      ...state,
      ui: {
        ...state.ui,
        pageTitle: {
          ...state.ui?.pageTitle,
          ...pageTitle,
        },
        drawer: {
          ...state.ui?.drawer,
          opened: false,
        },
      },
    }));
  }, [pathname]);

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 280,
        breakpoint: "md",
        collapsed: { mobile: !opened },
      }}
      padding="md"
      layout="alt"
    >
      <AppShell.Header>
        <Group gap={"xs"} pr={"md"} h={60}>
          <ApplicationMenu {...applicationMenu} />
          <Divider orientation="vertical" />
          <Space flex={1} />
          <Divider orientation="vertical" />
          <UserMenu {...userMenu} />
        </Group>
      </AppShell.Header>
      <AppShell.Navbar>
        <Stack gap={0} px={"md"}>
          <Center w={100} h={60} mb={"md"}>
            <DynamicLogo />
          </Center>
          <SideMenu {...activeMenu} />
        </Stack>
      </AppShell.Navbar>
      <AppShell.Main
        bg="gray.1"
        mih={"100dvh"}
        display="flex"
        style={{ flexDirection: "column" }}
      >
        <RouteTransition>
          <PageTitle {...activeApplication.pageTitle} />
          {children}
        </RouteTransition>
      </AppShell.Main>
      <ApplicationDrawer />
    </AppShell>
  );
};
