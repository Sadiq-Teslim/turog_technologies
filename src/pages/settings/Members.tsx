import React from "react";
import { SettingsLayout } from "../layouts/SettingsLayout";
import { useFetchMembers } from "../../shared/hooks/useFetchMembers";
import {
  ActionIcon,
  Avatar,
  Box,
  Group,
  Space,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import {
  Icons,
  SimplePanel,
  SimpleTable,
} from "@adiba-banking-cloud/backoffice";
import { BaseTableRowProps } from "@adiba-banking-cloud/backoffice/build/typings/components/tables/simple/Simple.types";
import { MemberListItemProps } from "../../shared/types/MembersPageProps.types";

export const MembersListPage = () => {
  const { isLoading, hasError, members, pageTitle, pageDescription } =
    useFetchMembers();
  const { columns, rows } = members;

  const tableRows = setMemberTableRows(rows);
  const { withIndex, withAction, actionFn } = setMemberActions();
  return (
    <SettingsLayout>
      <Stack>
        <Title fz={"sm"} fw={500} c={"dimmed"}>
          {pageTitle}
        </Title>
        <Text maw={1024} fw={300} size="sm" c={"adiba.4"}>
          {pageDescription}
        </Text>
        <SimpleTable
          {...{ columns, rows: tableRows, withAction, withIndex, actionFn }}
        />
      </Stack>
    </SettingsLayout>
  );
};

const setMemberActions = (): {
  withIndex: boolean;
  withAction: boolean;
  actionFn: (id: string) => React.ReactNode;
} => {
  const withAction = true;
  const withIndex = true;
  const actionFn = (id: string) => (
    <>
      <Group gap={"md"}>
        <ActionIcon variant="subtle" onClick={(e) => alert("Message Clicked")}>
          <Icons name="Message" stroke={1} size={20} />
        </ActionIcon>
        <ActionIcon variant="subtle" onClick={(e) => alert("Message Clicked")}>
          <Icons name="More" stroke={1} size={20} />
        </ActionIcon>
      </Group>
    </>
  );
  return { withIndex, withAction, actionFn };
};

const setMemberTableRows = (rows: MemberListItemProps[]): BaseTableRowProps[] =>
  rows.map((item, value) => {
    const {
      id,
      firstname,
      lastname,
      position,
      avatar,
      email,
      lang,
      timezone,
      lastLoginDays,
    } = item;
    const name = `${firstname} ${lastname}`;
    const DAYS_PREFIX = "Last Login"; //TODO: Translation
    const DAYS_SUFFIX = "days ago"; //TODO: Translation

    const member = (str): React.ReactNode => (
      <>
        <Group gap="sm">
          <Avatar
            size={40}
            src={avatar}
            radius={"md"}
            key={name}
            name={name}
            color="initials"
            bd={"0.5px solid adiba.2"}
          />
          <Box>
            <Text fz="sm" fw={400}>
              {name}
            </Text>
            <Text fw={300} fz="xs" c="dimmed">
              {position}
            </Text>
          </Box>
          <Space w={1} h={60} />
        </Group>
      </>
    );
    const username = (str) => (
      <>
        <Group gap="sm">
          <Box>
            <Text fz="sm" fw={400}>
              {email}
            </Text>
            <Text fw={300} fz="xs" c="dimmed">
              {`${DAYS_PREFIX}: ${lastLoginDays} ${DAYS_SUFFIX}`}
            </Text>
          </Box>
        </Group>
      </>
    );
    const localization = (str) => (
      <>
        <Group gap="sm">
          <Box>
            <Text fz="sm" fw={400}>
              {`Language: ${lang}`}
            </Text>
            <Text fw={300} fz="xs" c="dimmed">
              {`Timezone: ${timezone}`}
            </Text>
          </Box>
        </Group>
      </>
    );

    return { member, username, localization };
  });
