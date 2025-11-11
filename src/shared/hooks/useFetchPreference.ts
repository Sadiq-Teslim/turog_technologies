import { ChangePasswordForm } from "../../pages/profile/ChangePasswordForm";
import { EditCompanyForm } from "../../pages/profile/EditCompanyForm";
import { EditLocalizationForm } from "../../pages/profile/EditLocalizationForm";
import { EditProfileForm } from "../../pages/profile/EditProfileForm";
import { PreferencePageProps } from "../types/PreferencePageProps.types";
import { useApplicationDrawerState } from "./useApplicationDrawerState";

export const useFetchPreference = (): PreferencePageProps => {
  const [drawer, setDrawer] = useApplicationDrawerState();

  const changePasswordFn = () =>
    setDrawer({
      ...drawer,
      opened: true,
      page: ChangePasswordForm(),
      title: "Change Password", // TODO: translate
    });
  const editProfileFn = () =>
    setDrawer({
      ...drawer,
      opened: true,
      page: EditProfileForm(),
      title: "Udpate Current Profile", // TODO: translate
    });
  const editOrganizationFn = () =>
    setDrawer({
      ...drawer,
      opened: true,
      page: EditCompanyForm(),
      title: "Update Company Information", // TODO: translate
    });
  const editLocalizationFn = () =>
    setDrawer({
      ...drawer,
      opened: true,
      page: EditLocalizationForm(),
      title: "Change Locale Settings", // TODO: translate
    });

  const avatarInfo = fakeAvatarInfo(changePasswordFn);
  const userInfo = fakeOtherInfo("Profile Information", editProfileFn);
  const companyInfo = fakeOtherInfo("Company Information", editOrganizationFn);
  const localizationInfo = fakeOtherInfo(
    "Localization Settings",
    editLocalizationFn
  );

  return { avatarInfo, userInfo, companyInfo, localizationInfo };
};

const fakeAvatarInfo = (editFn: () => void) => ({
  editFn,
  name: "John Doe",
  username: "john.doe@contoso.com",
  lastActive: "2 days ago",
  status: "active",
});

const fakeOtherInfo = (title: string, editFn: () => void) => ({
  title: title,
  hasEdit: true,
  labelWidth: 200,
  editFn,
  editLabel: `Update ${title}`,
  items: [
    {
      label: "First Name",
      value: "John",
    },
    {
      label: "Last Name",
      value: "Doe",
    },
    {
      label: "Email Address",
      value: "john.doe@contoso.com",
    },
    {
      label: "Phone Number",
      value: "123-456-7890",
    },
  ],
});
