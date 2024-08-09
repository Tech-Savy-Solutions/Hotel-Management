import React from "react";
import { AppShell, Burger, Button, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { COLOR_KEYS } from "src/common";
import Header from "./Header";

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = ({}) => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 250, breakpoint: "sm", collapsed: { mobile: !opened } }}
      padding="md"
      bg={COLOR_KEYS.BACKGROUND}
    >
      <Header opened={opened} toggle={toggle} />
      <Navbar />
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
};

export default Dashboard;
