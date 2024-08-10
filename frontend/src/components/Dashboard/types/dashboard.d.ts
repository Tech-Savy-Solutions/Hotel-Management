export type UserDetailsResponse = {
    _id: string;
    username: string;
    password: string; // Ensure to handle passwords securely
    email: string;
    phoneNumber: string;
    roles: string[];
    createdBy: string;
    updatedBy: string;
    createdAt: string; // Consider using Date type if working with Date objects
    updatedAt: string; // Consider using Date type if working with Date objects
    __v: number;
};

export type userDetailRequest = {
    id?: string;
}
