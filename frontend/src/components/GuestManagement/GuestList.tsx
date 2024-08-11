import { Flex, Stack } from "@mantine/core";
import React from "react";
import {
  COLOR_KEYS,
  FONT_WEIGHTS,
  STRINGS_CONSTANT,
  TEXT_COLORS,
  TEXT_SIZES,
  TITLE_ORDERS,
} from "src/common";
import AppShellContainer from "src/common/components/AppShellConatiner";
import TextAtom from "src/common/components/TextAtom";
import TitleAtom from "src/common/components/TitleAtom";

interface GuestsListProps {}

const GuestsList: React.FC<GuestsListProps> = ({}) => {
  return (
    <AppShellContainer>
      <Flex
        gap="md"
        justify="space-between"
        align="center"
        direction="row"
        // mih="100%"
      >
        <Stack gap={2}>
          <TitleAtom order={TITLE_ORDERS.subsection_title}>
            {STRINGS_CONSTANT.GUESTS + " " + STRINGS_CONSTANT.LISTS}
          </TitleAtom>
          <Flex gap={2} align="center" justify="flex-start">
            <TextAtom
              weight={FONT_WEIGHTS.bold}
              size={TEXT_SIZES.sm}
              color={COLOR_KEYS.PRIMARY}
            >
              2300
            </TextAtom>
            <TextAtom size={TEXT_SIZES.sm} color={TEXT_COLORS.dimmed}>
              {STRINGS_CONSTANT.ARE +
                " " +
                STRINGS_CONSTANT.STAYING +
                " " +
                STRINGS_CONSTANT.NOW}
            </TextAtom>
          </Flex>
        </Stack>
      </Flex>
    </AppShellContainer>
  );
};

export default GuestsList;
