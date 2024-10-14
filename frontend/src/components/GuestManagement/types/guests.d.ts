export interface GuestsListResponse {
    _id: string;
    firstName: string;
    lastName: string;
    address: string;
    email: string;
    phoneNumber: string;
    createdAt: string; // ISO date string
    updatedAt: string; // ISO date string
    __v: number;
}

// Define an array of GuestsListResponse
export type GuestsListResponseArray = GuestsListResponse[];