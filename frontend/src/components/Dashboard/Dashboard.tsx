import React from "react";
import { AppShell, Burger, Button, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { COLOR_KEYS, getStorageItem } from "src/common";
import Header from "./Header";
import { useGetUserDetails } from "./api/useGetUserDetails";
import { userDetailRequest } from "./types/dashboard";

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = ({}) => {
  const [opened, { toggle }] = useDisclosure();
  const id = getStorageItem("id") || "";
  const { isLoading } = useGetUserDetails({ id });

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 250, breakpoint: "sm", collapsed: { mobile: !opened } }}
      padding="md"
      bg={COLOR_KEYS.BACKGROUND}
    >
      <Header opened={opened} toggle={toggle} isLoading={isLoading} />
      <Navbar />
      <AppShell.Main bg={COLOR_KEYS.SUNNY_YELLOW}>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
};

export default Dashboard;
