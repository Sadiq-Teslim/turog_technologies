import {
  ApplicationsListPage,
  ConnectionsListPage,
  MembersListPage,
  PreferencesOverviewPage,
  SubscriptionsOverviewPage,
} from "../../pages/settings";

export const registerPages = ({ instance, pages }) => {
  Object.keys(pages).map((key, index) => {
    instance.root.registerPage(key, pages[key]);
  });
};

export const pages = {
  "/settings/preferences": PreferencesOverviewPage,
  "/settings/connections": ConnectionsListPage,
  "/settings/members": MembersListPage,
  "/settings/subscriptions": SubscriptionsOverviewPage,
  "/settings/applications": ApplicationsListPage,
};
