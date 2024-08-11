import { AppShell, Burger, Flex, Group, Skeleton } from "@mantine/core";
import React from "react";
import { HEX_COLORS, STRINGS_CONSTANT, TITLE_ORDERS } from "src/common";
import { IconHome } from "@tabler/icons-react";
import MenuDropdown from "./MenuDropdown";
import TitleAtom from "src/common/components/TitleAtom";

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
          <TitleAtom order={TITLE_ORDERS.subsection_title}>
            {STRINGS_CONSTANT.NIMBLE_LOGDE}
          </TitleAtom>
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
