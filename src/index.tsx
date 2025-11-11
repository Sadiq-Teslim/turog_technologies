import * as React from "react";
import { createRoot, Root } from "react-dom/client";
import { LoadingIndicator, ErrorIndicator } from "./pages/core";
import { OidcClient, onHandleAuthentication } from "./apps/auth/auth.config";
import { appRender, instance } from "./apps/instance/instance.config";
import { Piral } from "piral-core";
import { registerPages, pages } from "./apps/routes/routes.config";

const root = createRoot(document.querySelector("#app"));

appRender(root, <LoadingIndicator />);
registerPages({ instance, pages });

const auth = OidcClient.handleAuthentication();
auth
  .then(async ({ shouldRender, state }) => {
    if (state?.finalRedirectUri) {
      location.href = state.finalRedirectUri;
    } else if (shouldRender) {
      const { authenticated, authenticatedState, tenantOrganization } =
        onHandleAuthentication(await OidcClient.account());
      instance.root.setData("authenticated", authenticated);
      instance.context.dispatch((state) => ({
        ...state,
        user: authenticatedState,
        ui: {
          ...state.ui,
          pageTitle: {
            ...state.ui?.pageTitle,
            title: authenticatedState.name,
            subtitle: tenantOrganization.name,
          },
        },
      }));
      appRender(root, <Piral instance={instance} />);
    }
  })
  .catch((error) => {
    if (String(error.message).includes("invalid_grant")) OidcClient.login();

    appRender(root, <ErrorIndicator />);
  });
