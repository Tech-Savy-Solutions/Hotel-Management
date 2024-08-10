import { AppShell, Burger, Flex, Group, Skeleton, Title } from "@mantine/core";
import React from "react";
import { HEX_COLORS } from "src/common";
import { IconHome } from "@tabler/icons-react";
import MenuDropdown from "./MenuDropdown";

interface HeaderProps {
  opened: boolean;
  toggle: () => void;
  isLoading: boolean;
}

const Header: React.FC<HeaderProps> = ({ opened, toggle, isLoading }) => {
  return (
    <AppShell.Header>
      <Flex
        gap="md"
        justify="space-between"
        align="center"
        direction="row"
        mih="100%"
      >
        <Group h="100%" px="md">
          <IconHome color={HEX_COLORS.sunnyYellow} stroke={1.5} />
          <Title order={3}>NimbleLodge</Title>
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        </Group>
        {isLoading ? (
          <Skeleton height={50} circle mb="xl" />
        ) : (
          <Group h="100%" px="md">
            <MenuDropdown />
          </Group>
        )}
      </Flex>
    </AppShell.Header>
  );
};

export default Header;
