import { AppShell, Burger, Container, Group, Title, rem } from "@mantine/core";
import React from "react";
import { HEX_COLORS } from "src/common";
import { IconHome } from "@tabler/icons-react";

interface HeaderProps {
  opened: boolean;
  toggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ opened, toggle }) => {
  return (
    <AppShell.Header>
      <Group h="100%" px="md">
        <IconHome color={HEX_COLORS.sunnyYellow} stroke={1.5} />
        <Title order={3}>NimbleLodge</Title>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
      </Group>
    </AppShell.Header>
  );
};

export default Header;
