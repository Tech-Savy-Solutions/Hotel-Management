import React from "react";
import { useDisclosure } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import {
  Drawer,
  Button,
  DrawerProps,
  NumberInput,
  TextInput,
  Flex,
} from "@mantine/core";
import {
  API_PAYLOAD_KEYS,
  DRAWER_POSITION,
  FLEX_ALIGNMENT,
  FONT_WEIGHTS,
  STRINGS_CONSTANT,
  TEXT_ALIGNMENTS,
  TEXT_SIZES,
} from "src/common";
import TextAtom from "src/common/components/TextAtom";
import PlacesSearch from "src/common/components/PlacesSearch";

interface AddGuestProps {}

const AddGuest: React.FC<AddGuestProps> = ({}) => {
  const [opened, { open, close }] = useDisclosure(false);
  const { FIRST_NAME, LAST_NAME, EMAIL, ADDRESS } = API_PAYLOAD_KEYS;
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      age: 0,
      address: "",
    },

    // functions will be used to validate values at corresponding key
    validate: {
      firstName: (value: string) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      lastName: (value: string) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      age: (value) =>
        value < 18 ? "You must be at least 18 to register" : null,
    },
  });

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        title={
          <TextAtom
            size={TEXT_SIZES.md}
            weight={FONT_WEIGHTS.bold}
            align={TEXT_ALIGNMENTS.center}
          >
            {STRINGS_CONSTANT.ADD_GUEST}
          </TextAtom>
        }
        position={DRAWER_POSITION.RIGHT as DrawerProps["position"]}
      >
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <Flex
            align={FLEX_ALIGNMENT.CENTER}
            justify={FLEX_ALIGNMENT.SPACE_BETWEEN}
            gap={5}
          >
            <TextInput
              label="First Name"
              placeholder="First Name"
              key={form.key(FIRST_NAME)}
              {...form.getInputProps(FIRST_NAME)}
              flex={1}
            />
            <TextInput
              label="Last Name"
              placeholder="lastName"
              key={form.key(LAST_NAME)}
              {...form.getInputProps(LAST_NAME)}
              flex={1}
            />
          </Flex>

          <TextInput
            mt="sm"
            label="Email"
            placeholder="Email"
            key={form.key(EMAIL)}
            {...form.getInputProps(EMAIL)}
          />
          <NumberInput
            mt="sm"
            label="Age"
            placeholder="Age"
            min={0}
            max={99}
            key={form.key("age")}
            {...form.getInputProps("age")}
          />
          <PlacesSearch
            key={form.key(ADDRESS)}
            title="Address"
            selectedPlace={(value) => form.setFieldValue("address", value)}
          />
          <Button type="submit" mt="sm">
            Submit
          </Button>
        </form>
      </Drawer>

      <Button onClick={open}>{STRINGS_CONSTANT.ADD_GUEST}</Button>
    </>
  );
};

export default AddGuest;
