import {
    useQuery,
    UseQueryResult,
    UseQueryOptions,
} from "@tanstack/react-query";
import { API_TYPE, GUESTS, GUESTS_LISTS_QUERY_KEY } from "src/common";
import apiCaller from "src/common/api/apiCaller";
import { GuestsListResponseSchema } from "src/common/api/zodSchema";
import { showAlert } from "src/common/components/ShowAlert";
import { GuestsListResponseArray } from "../types/guests";

// Define the query function
const fetchGuestsLists = async (): Promise<GuestsListResponseArray> => {
    try {
        const response = await apiCaller<GuestsListResponseArray>({
            url: GUESTS,
            type: API_TYPE.GET,
        });

        const result = GuestsListResponseSchema.safeParse(response);
        console.log('result', result);
        if (!result.success) {
            throw new Error("Invalid Response");
        }
        return result.data;
    } catch (error) {
        console.log("error", error);
        showAlert({
            title: "Error",
            message: `Failed to fetch user details!`,
            color: "red",
        });
        throw error;
    }
};

// Define the hook with explicit return type
export const useGetGuestsLists = (): UseQueryResult<GuestsListResponseArray, Error> => {
    const options: UseQueryOptions<GuestsListResponseArray, Error> = {
        queryKey: [GUESTS_LISTS_QUERY_KEY],
        queryFn: () => fetchGuestsLists(),
        retry: 0,
    };

    return useQuery(options);
};
