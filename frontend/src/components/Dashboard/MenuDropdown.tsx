import {
  Avatar,
  Button,
  Group,
  Menu,
  Text,
  UnstyledButton,
  rem,
} from "@mantine/core";
import {
  IconChevronDown,
  IconLogout,
  IconSettings,
  IconUserFilled,
} from "@tabler/icons-react";
import { useQueryClient } from "@tanstack/react-query";
import React from "react";
import {
  HEX_COLORS,
  ROUTE_LOGIN,
  USER_DETAILS_QUERY_KEY,
  USER_ID_KEY,
  USER_TOKEN_KEY,
  getStorageItem,
  removeStorageItem,
} from "src/common";
import { UserDetailsResponse } from "./types/dashboard";
import { useNavigate } from "react-router";

interface MenuDropdownProps {}

const MenuDropdown: React.FC<MenuDropdownProps> = ({}) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const id = getStorageItem("id") || "";
  const userDetails: UserDetailsResponse | undefined = queryClient.getQueryData(
    [USER_DETAILS_QUERY_KEY, { id }]
  );

  const handleLogout = () => {
    removeStorageItem(USER_ID_KEY);
    removeStorageItem(USER_TOKEN_KEY);
    queryClient.clear();
    navigate(ROUTE_LOGIN);
  };
  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <UnstyledButton>
          <Group>
            <Avatar radius="xl" />
            <Text size="sm">{userDetails?.username}</Text>
            <IconChevronDown
              color={HEX_COLORS.primary}
              stroke={2}
              style={{ width: rem(20), height: rem(20) }}
            />
          </Group>
        </UnstyledButton>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item
          leftSection={
            <IconUserFilled style={{ width: rem(14), height: rem(14) }} />
          }
        >
          Profile
        </Menu.Item>
        <Menu.Item
          leftSection={
            <IconSettings style={{ width: rem(14), height: rem(14) }} />
          }
        >
          Settings
        </Menu.Item>

        <Menu.Divider />
        <Menu.Item
          color="red"
          leftSection={
            <IconLogout style={{ width: rem(14), height: rem(14) }} />
          }
          onClick={handleLogout}
        >
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default MenuDropdown;
