import {
  AppShell,
  Button,
  Center,
  Group,
  Loader,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ALPHANUMERIC_REGEX, ROUTE_HOME, USER } from "src/common";
import useLoginMutation from "./api/useLoginMutation";
import { LoginRequest } from "./types/auth";

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
      console.log("data", data);
      localStorage.setItem("id", data?.id); // Store the user ID in local storage
      localStorage.setItem("token", data?.token); // Store the user ID in local storage
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
            <Title order={1}>Welcome</Title>
            <Text size="sm">We are glad to see you back with us</Text>
          </Stack>
          <TextInput
            mt="md"
            withAsterisk
            label="Username"
            placeholder="please enter your username"
            key={form.key("username")}
            {...form.getInputProps("username")}
            inputSize="50"
          />
          <PasswordInput
            withAsterisk
            label="Password"
            key={form.key("password")}
            {...form.getInputProps("password")}
            placeholder="please enter your password"
            inputSize="50"
          />
          <Group justify="flex-end" mt="md">
            <Button fullWidth type="submit">
              {isPending ? <Loader color="white" size="sm" /> : "Login"}
            </Button>
          </Group>
        </form>
      </Center>
    </AppShell.Main>
  );
};

export default Login;
