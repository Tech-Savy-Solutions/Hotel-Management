export const RESERVATION_STATUS = [
    'Pending',
    'Confirmed',
    'CheckedIn',
    'CheckedOut',
    'Cancelled',
];

export const DEFAULT_RESERVATION_STATUS = 'Pending';

export const BASE_PATH = '/api/v1';

export const END_POINTS = {
    USERS: 'users',
    ROLES: 'roles',
    GUESTS: 'guests',
    RESERVATIONS: 'reservations',
    ROOMS: 'rooms',
    BILLINGS: 'billings',
    POS: 'pos',
    REPORTS: 'reports',
};

export const ROUTE_PATHS = {
    TEST: '/test',
    GET_ALL: '/',
    GET_BY_ID: '/:id',
    ADD: '/',
    UPDATE: '/:id',
    DELETE: '/:id',
};
