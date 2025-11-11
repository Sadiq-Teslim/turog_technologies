import { DashboardContainerProps, useGlobalStateContext } from "piral";
import React from "react";
import { useActiveApplication } from "../../shared/hooks/useActiveApplication";
import { RetailEnginePage } from "../dashboard/RetailEngine";
import { LedgerSyncPage } from "../dashboard/LedgerSync";
import { ProcessEnginePage } from "../dashboard/ProcessEngine";
import { PaymentEngine } from "../dashboard/PaymentEngine";
import { CardManager } from "../dashboard/CardManager";
import { OpenBanking } from "../dashboard/OpenBanking";
import { CRMHelpdesk } from "../dashboard/CRMHelpdesk";
import { AgentBanking } from "../dashboard/AgentBanking";

export const DashboardContainer: React.ComponentType<
  DashboardContainerProps
> = () => {
  const { application } = useActiveApplication();
  const LandingPages = {
    "retail-engine": <RetailEnginePage />,
    "ledgersync": <LedgerSyncPage />,
    "process-engine": <ProcessEnginePage/>,
    "payment-engine": <PaymentEngine/>,
    "card-manager": <CardManager/>,
    "open-banking": <OpenBanking/>,
    "crm-helpdesk": <CRMHelpdesk/>,
    "agent-banking": <AgentBanking/>
  };

  return <> {LandingPages[application]}</>;
};
