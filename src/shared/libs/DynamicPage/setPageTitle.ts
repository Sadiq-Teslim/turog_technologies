import { IconsProps } from "@adiba-banking-cloud/backoffice/build/typings/components/general/icons/Icons.types";
import { EditMemberForm } from "../../../pages/members/EditMemberForm";
import {
  CreateButtonProps,
  SwitcherProps,
} from "@adiba-banking-cloud/backoffice/build/typings/components/general/title/Title.types";
import { AddConnectionForm } from "../../../pages/connections/AddConnectionForm";
import { useLocation } from "react-router";
import { useApplicationDrawerState } from "../../hooks/useApplicationDrawerState";

type PathMapping = [RegExp, object];

export const setPageTitle = () : object => {
  const location = useLocation();
  const pathname = location.pathname;
  const [drawer, setDrawer] = useApplicationDrawerState();
  const memberCreateBtn: CreateButtonProps = {
    icon: { name: "UserAdd", size: 20 } as IconsProps,
    label: "Create Member",
    createFn: () =>
      setDrawer({
        ...drawer,
        title: "Create Member",
        page: EditMemberForm(),
        opened: true,
      }),
  };

  const connectionCreateBtn: CreateButtonProps = {
    icon: { name: "Flashy", size: 20 } as IconsProps,
    label: "Create Connection",
    createFn: () =>
      setDrawer({
        ...drawer,
        title: "Create Connection",
        page: AddConnectionForm(),
        opened: true,
      }),
  };

  const fullScreenCreateBtn: CreateButtonProps = {
    icon: { name: "Maximize", size: 20 } as IconsProps,
    label: " ",
    createFn: () => void 0,
    variant: "transparent",
  };

  const applicationSwitcher: SwitcherProps = {
    items: ["All Applications", "My Applications"],
    value: "All Applications",
    onChange: () => () => alert("change"),
  };

  const paths: PathMapping[] = [
    [/^\/$/, { withCreate: true, create: fullScreenCreateBtn}],
    [/^\/documents$/, {}],
    [/^\/messages$/, {}],
    [
      /^\/settings\/applications/,
      { withSwitcher: true, switcher: applicationSwitcher },
    ],
    [
      /^\/settings\/connections/,
      { withCreate: true, create: connectionCreateBtn},
    ],
    [
      /^\/settings\/members/,
      { withSwitcher: false, withCreate: true, create: memberCreateBtn },
    ],
  ];

  // Find the first matching regex and return its second item
  const matchingPath = paths.find(([regex]) => regex.test(pathname));
  return matchingPath
    ? {withSwitcher: false, withCreate: false,...matchingPath[1]}
    : { withSwitcher: false, withCreate: false };
};