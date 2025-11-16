import { setupOidcClient, OidcProfile } from "piral-oidc";
import { UserStateProps } from "../../shared/types/UserStateProps.types";
import { OrganizationStateProps } from "../../shared/types/OrganizationStateProps.types";

export const OidcClient = setupOidcClient({
  responseType: "code",
  clientId: process.env.CLIENT_ID || "CLEITN",
  scopes: ["openid", "groups", "profile", "email", "phone"],
  identityProviderUri: process.env.AUTH_TOKEN_URL || "URL",
  postLogoutRedirectUri: "https://www.adiba.app",
  signInRedirectParams: {
    state: {
      finalRedirectUri: location.href,
    },
  },
});

export const onHandleAuthentication = (profile: OidcProfile) => {
  console.log(JSON.stringify(profile));
  const authenticatedState: UserStateProps = {
    app: profile?.default_app || "retail-engine",
    email: profile?.email || profile?.sub,
    id: profile?.sub,
    given_name: profile?.given_name,
    family_name: profile?.family_name,
    name: `${profile?.given_name} ${profile?.family_name}`
  };

  const tenantOrganization: OrganizationStateProps = {
    name: profile?.org_name || "Unnamed Organization",
    id: profile?.org_id || "00000000-0000-0000-0000-000000000000",
    logo: profile?.org_logo,
    description: profile?.org_description,
    address: profile?.org_address,
    phone: profile?.org_phone,
    email: profile?.org_email,
    website: profile?.org_website,
    industry: profile?.org_industry,
  };
  return { authenticated: true, authenticatedState, tenantOrganization };
};
