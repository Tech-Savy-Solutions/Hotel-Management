import { Flex, Stack } from "@mantine/core";
import { createColumnHelper } from "@tanstack/react-table";
import React from "react";
import {
  COLOR_KEYS,
  FONT_WEIGHTS,
  STRINGS_CONSTANT,
  TABLE_HEADERS,
  TEXT_COLORS,
  TEXT_SIZES,
  TITLE_ORDERS,
} from "src/common";
import AppShellContainer from "src/common/components/AppShellContainer";
import CustomTable from "src/common/components/CustomTable";
import TextAtom from "src/common/components/TextAtom";
import TitleAtom from "src/common/components/TitleAtom";
import { useGetGuestsLists } from "./api/useGetGuestsList";
import { GuestsListResponse } from "./types/guests";
import AddGuest from "./AddGuest";

interface GuestsListProps {}

const GuestsList: React.FC<GuestsListProps> = ({}) => {
  const { isLoading, data } = useGetGuestsLists();
  console.log("data", data);
  const columnHelper = createColumnHelper<GuestsListResponse>();

  const columns = [
    columnHelper.accessor(
      TABLE_HEADERS.FIRST_NAME as keyof GuestsListResponse,
      {
        header: () => TABLE_HEADERS.FIRST_NAME.toUpperCase(),
        cell: (info) => info.getValue(),
      }
    ),
    columnHelper.accessor(TABLE_HEADERS.LAST_NAME as keyof GuestsListResponse, {
      header: () => TABLE_HEADERS.LAST_NAME.toUpperCase(),
      cell: (info) => info.getValue(),
    }),
    // you can use different aproach here
    columnHelper.accessor(TABLE_HEADERS.EMAIL as keyof GuestsListResponse, {
      header: () => TABLE_HEADERS.EMAIL.toUpperCase(),
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor(
      TABLE_HEADERS.PHONE_NUMBER as keyof GuestsListResponse,
      {
        header: () => TABLE_HEADERS.PHONE_NUMBER.toUpperCase(),
        cell: (info) => info.renderValue(),
      }
    ),
    columnHelper.accessor(TABLE_HEADERS.ADDRESS as keyof GuestsListResponse, {
      header: () => TABLE_HEADERS.ADDRESS.toUpperCase(),
      cell: (info) => info.renderValue(),
    }),
  ];
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
              {data?.length}
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
        <AddGuest />
      </Flex>
      <CustomTable columns={columns} data={data ?? []} />
    </AppShellContainer>
  );
};

export default GuestsList;
