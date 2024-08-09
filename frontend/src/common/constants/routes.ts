export const ROUTE_HOME = "/";
export const ROUTE_RESERVATIONS = "/reservations";
export const ROUTE_RESERVATIONS_NEW = `${ROUTE_RESERVATIONS}/new`;
export const ROUTE_RESERVATIONS_CALENDAR = `${ROUTE_RESERVATIONS}/calendar`;
export const ROUTE_RESERVATIONS_LIST = `${ROUTE_RESERVATIONS}/list`;

export const ROUTE_GUESTS = "/guests";
export const ROUTE_GUESTS_LIST = `${ROUTE_GUESTS}/list`;
export const ROUTE_GUESTS_PROFILE = `${ROUTE_GUESTS}/:guestId`;

export const ROUTE_ROOMS = "/rooms";
export const ROUTE_ROOMS_LIST = `${ROUTE_ROOMS}/list`;
export const ROUTE_ROOMS_DETAILS = `${ROUTE_ROOMS}/:roomId`;
export const ROUTE_ROOMS_HOUSEKEEPING = `${ROUTE_ROOMS}/housekeeping`;

export const ROUTE_BILLING = "/billing";
export const ROUTE_BILLING_GENERATE = `${ROUTE_BILLING}/generate`;
export const ROUTE_BILLING_INVOICE = `${ROUTE_BILLING}/:invoiceId`;

export const ROUTE_POS = "/pos";
export const ROUTE_REPORTS = "/reports";

export const ROUTE_USERS = "/users";
export const ROUTE_USERS_LIST = `${ROUTE_USERS}/list`;
export const ROUTE_USERS_PROFILE = `${ROUTE_USERS}/profile`;

export const ROUTE_LOGIN = "/login";
export const ROUTE_REGISTER = "/register";
export const ROUTE_NOT_FOUND = "*";
