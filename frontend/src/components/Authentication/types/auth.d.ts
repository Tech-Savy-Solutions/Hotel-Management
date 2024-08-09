export type UserResponse = {
    id: string;
    message: string;
    token: string;
    username: string;
};

export type LoginRequest = {
    username: string;
    password: string;
};