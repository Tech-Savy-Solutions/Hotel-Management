export const USER = "/users"
export const LOGIN = "/login"
export const GUESTS = "/guests"

export const API_TYPE = {
    POST: "POST",
    GET: "GET",
    PUT: "PUT",
    DELETE: "DELETE"
} as const;

export const API_PAYLOAD_KEYS = {
    FIRST_NAME: "firstName",
    LAST_NAME: "lastName",
    EMAIL: "email",
    PASSWORD: "password",
    GUEST_IDS: "guestIds",
    ROOM_ID: "roomId",
    ADDRESS: 'address'
}