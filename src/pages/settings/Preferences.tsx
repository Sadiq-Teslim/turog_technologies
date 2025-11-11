import React from "react";
import { SettingsLayout } from "../layouts/SettingsLayout";
import { useFetchPreference } from "../../shared/hooks/useFetchPreference";
import { AvatarLabelPanel, LabelPanel } from "@adiba-banking-cloud/backoffice";
import { PreferencePageProps } from "../../shared/types/PreferencePageProps.types";
import { Stack } from "@mantine/core";

export const PreferencesOverviewPage = () => {
  const {
    avatarInfo,
    userInfo,
    companyInfo,
    localizationInfo,
  }: PreferencePageProps = useFetchPreference();

  return (
    <SettingsLayout>
      <Stack>
        <AvatarLabelPanel {...avatarInfo} />
        <LabelPanel {...userInfo} />
        <LabelPanel {...companyInfo} />
        <LabelPanel {...localizationInfo} />
      </Stack>
    </SettingsLayout>
  );
};
