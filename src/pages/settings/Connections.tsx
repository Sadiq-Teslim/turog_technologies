import React from "react";
import { SettingsLayout } from "../layouts/SettingsLayout";
import { useFetchConnections } from "../../shared/hooks/useFetchConnections";
import { Grid } from "@mantine/core";
import { ConnectionPanel } from "@adiba-banking-cloud/backoffice";

export const ConnectionsListPage = () => {
  const { isLoading, hasError, connections } = useFetchConnections();
  return (
    <SettingsLayout>
      <Grid>
        {connections.map((connection, index) => {
          return (
            <Grid.Col
              maw={1024}
              key={`connection-${index}`}
              span={{ base: 12, lg: 6 }}
            >
              <ConnectionPanel {...connection} />
            </Grid.Col>
          );
        })}
      </Grid>
    </SettingsLayout>
  );
};
