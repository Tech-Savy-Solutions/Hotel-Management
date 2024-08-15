import {
  useQuery,
  UseQueryResult,
  UseQueryOptions,
} from "@tanstack/react-query";
import { API_TYPE, USER, USER_DETAILS_QUERY_KEY } from "src/common";
import apiCaller from "src/common/api/apiCaller";
import { userDetailsSchema } from "src/common/api/zodSchema";
import { showAlert } from "src/common/components/ShowAlert";
import { UserDetailsResponse, userDetailRequest } from "../types/dashboard";

// Define the query function
const fetchUserDetails = async (
  credentials: userDetailRequest
): Promise<UserDetailsResponse> => {
  try {
    const response = await apiCaller<UserDetailsResponse>({
      url: USER + credentials?.id,
      type: API_TYPE.GET,
    });

    const result = userDetailsSchema.safeParse(response);
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
export const useGetUserDetails = (
  credentials: userDetailRequest
): UseQueryResult<UserDetailsResponse, Error> => {
  const options: UseQueryOptions<UserDetailsResponse, Error> = {
    queryKey: [USER_DETAILS_QUERY_KEY, credentials],
    queryFn: () => fetchUserDetails(credentials),
    enabled: () => credentials !== null,
    retry: 0,
  };

  return useQuery(options);
};
