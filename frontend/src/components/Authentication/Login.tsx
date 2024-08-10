import {
  AppShell,
  Button,
  Center,
  Group,
  Loader,
  PasswordInput,
  Stack,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ALPHANUMERIC_REGEX,
  LOGIN_BUTTON_TEXT,
  LOGIN_PAGE_GREETING,
  PASSWORD,
  PASSWORD_PLACEHOLDER,
  ROUTE_HOME,
  TEXT_SIZES,
  TITLE_ORDERS,
  USERNAME,
  USERNAME_PLACEHOLDER,
  USER_ID_KEY,
  USER_TOKEN_KEY,
  WELCOME,
  setStorageItem,
} from "src/common";
import useLoginMutation from "./api/useLoginMutation";
import { LoginRequest } from "./types/auth";
import TextAtom from "src/common/components/TextAtom";
import TitleAtom from "src/common/components/TitleAtom";

interface LoginProps {}

const Login: React.FC<LoginProps> = ({}) => {
  const { mutate: login, isPending, isSuccess, data } = useLoginMutation();

  const navigate = useNavigate();
  const form = useForm({
    mode: "uncontrolled",
    validateInputOnChange: true,
    initialValues: {
      username: "",
      password: "",
    },

    validate: {
      username: (value) =>
        ALPHANUMERIC_REGEX.test(value) ? null : "Invalid username",
    },
  });
  const demoProps = {
    bg: "var(--mantine-color-blue-light)",
    h: "auto",
    // mt: "md",
  };
  const handleLogin = (data: LoginRequest) => {
    login(data);
  };
  useEffect(() => {
    if (isSuccess) {
      navigate(ROUTE_HOME); // Redirect to the desired route, e.g., dashboard
    }
  }, [isSuccess]);

  useEffect(() => {
    if (data?.id) {
      setStorageItem(USER_ID_KEY, data?.id); // Store the user ID in local storage
      setStorageItem(USER_TOKEN_KEY, data?.token); // Store the user ID in local storage
    }
  }, [data]);
  return (
    <AppShell.Main {...demoProps}>
      <Center h={"100vh"} bg="var(--mantine-color-gray-light)">
        <form
          onSubmit={form.onSubmit((values) => {
            handleLogin(values);
            console.log(values);
          })}
        >
          <Stack justify="center" gap="xs" align="center">
            <TitleAtom order={TITLE_ORDERS.page_title}>{WELCOME}</TitleAtom>
            <TextAtom size={TEXT_SIZES.sm}>{LOGIN_PAGE_GREETING}</TextAtom>
          </Stack>
          <TextInput
            mt="md"
            withAsterisk
            label={USERNAME}
            placeholder={USERNAME_PLACEHOLDER}
            key={form.key("username")}
            {...form.getInputProps("username")}
            inputSize="50"
          />
          <PasswordInput
            withAsterisk
            label={PASSWORD}
            key={form.key("password")}
            {...form.getInputProps("password")}
            placeholder={PASSWORD_PLACEHOLDER}
            inputSize="50"
          />
          <Group justify="flex-end" mt="md">
            <Button fullWidth type="submit">
              {isPending ? (
                <Loader color="white" size="sm" />
              ) : (
                LOGIN_BUTTON_TEXT
              )}
            </Button>
          </Group>
        </form>
      </Center>
    </AppShell.Main>
  );
};

export default Login;
