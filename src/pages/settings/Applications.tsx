import React from "react";
import { SettingsLayout } from "../layouts/SettingsLayout";
import {
  ApplicationPanel,
  SearchPanel,
  useModal,
} from "@adiba-banking-cloud/backoffice";
import { useFetchApplications } from "../../shared/hooks/useFetchApplications";
import {  SimpleGrid, Text } from "@mantine/core";

import RetailEngine from "../../shared/images/applications/process-engine.png";
import ProcessEngine from "../../shared/images/applications/process-engine.png";
import PaymentEngine from "../../shared/images/applications/payment-engine.png";
import CardManager from "../../shared/images/applications/card-manager.png";
import CrmHelpdesk from "../../shared/images/applications/crm-helpdesk.png";
import Ledgersync from "../../shared/images/applications/ledgersync.png";
import AgentBanking from "../../shared/images/applications/agent-banking.png";
import OpenBanking from "../../shared/images/applications/open-banking.png";

const MIN_APPLICATION_WIDTH = 310;
const LOCAL_IMAGES = {
  "retail-engine": RetailEngine,
  "ledgersync": Ledgersync,
  "process-engine": ProcessEngine,
  "payment-engine": PaymentEngine,
  "card-manager": CardManager,
  "open-banking": OpenBanking,
  "crm-helpdesk": CrmHelpdesk,
  "agent-banking": AgentBanking,
};

export const ApplicationsListPage = () => {
  const { isLoading, hasError, applications } = useFetchApplications();
  const { SimpleModal } = useModal();
  return (
    <SettingsLayout>
      <SearchPanel
        p={0}
        placeholder="Search for applications by name"
        radius={0}
        filterIcon={{ name: "Setting5" }}
        filterFn={() =>
          SimpleModal({
            title: "Hello",
            message: <Text fw={300}>Hello full text</Text>,
            size: "lg",
            labels: {
              cancel: "Cancel",
              confirm: "Confirm",
            },
            // buttonProps: {
            //   cancelProps: {
            //     label: "Cancel",
            //     radius: "xl",
            //     // size: "lg",
            //   },
            //   confirmProps: {
            //     label: "Confirm",
            //     radius: "xl",
            //     // size: "lg",
            //   },
            // },
          })
        }
      >
        <SimpleGrid
          cols={{ base: 1, sm: 2, lg: 3, xl: 4 }}
          spacing={{ base: "sm", xl: "xl" }}
          verticalSpacing={{ base: "sm", xl: "xl" }}
        >
          {applications.map((application, index) => {
            const { coverImage } = { ...application };
            return (
              <ApplicationPanel
                miw={MIN_APPLICATION_WIDTH}
                key={`application-${index}`}
                {...application}
                coverImage={
                  coverImage?.startsWith("https://")
                    ? coverImage
                    : LOCAL_IMAGES[coverImage]
                }
              />
            );
          })}
        </SimpleGrid>
      </SearchPanel>
    </SettingsLayout>
  );
};
