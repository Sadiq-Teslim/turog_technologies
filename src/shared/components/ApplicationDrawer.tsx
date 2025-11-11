import React from "react";
import { useApplicationDrawerState } from "../hooks/useApplicationDrawerState";
import { Drawer } from "@adiba-banking-cloud/backoffice";
import { Stack } from "@mantine/core";

export const ApplicationDrawer = () => {
  const [drawer, setDrawer] = useApplicationDrawerState();
  const { opened, title, page, position, size } = drawer;
  return (
    <Drawer
      opened={opened}
      onClose={() =>
        setDrawer({
          ...drawer,
          opened: false,
          page: undefined,
          title: "",
        })
      }
      position={position || "right"}
      size={size || "lg"}
      title={title}
      page={
        <Stack h={"calc(100vh - 60px - 20px - 32px)"}>
          {page}
        </Stack>
      }
    />
  );
};
