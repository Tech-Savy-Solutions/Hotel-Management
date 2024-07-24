// Enums for reservation status
export enum RESERVATION_STATUS {
    PENDING = 'Pending',
    CONFIRMED = 'Confirmed',
    CHECKED_IN = 'CheckedIn',
    CHECKED_OUT = 'CheckedOut',
    CANCELLED = 'Cancelled',
}

// Default reservation status
export const DEFAULT_RESERVATION_STATUS = RESERVATION_STATUS.PENDING;

// Enums for user roles
export enum USER_ROLE {
    ADMIN = 'Admin',
    MANAGER = 'Manager',
    FRONT_DESK_STAFF = 'FrontDeskStaff',
    HOUSEKEEPING_STAFF = 'HousekeepingStaff',
    POS_STAFF = 'POSStaff',
    GUEST = 'Guest',
    FINANCE = 'Finance',
}

// Enums for room status
export enum ROOM_STATUS {
    AVAILABLE = 'Available',
    OCCUPIED = 'Occupied',
    MAINTENANCE = 'Maintenance',
    CLEANING = 'Cleaning',
}

// Enums for payment status
export enum PAYMENT_STATUS {
    PENDING = 'Pending',
    COMPLETED = 'Completed',
    FAILED = 'Failed',
    REFUNDED = 'Refunded',
    PARTIALLY_REFUNDED = 'PartiallyRefunded',
    CANCELLED = 'Cancelled',
    IN_PROGRESS = 'InProgress',
    DECLINED = 'Declined',
    CHARGEBACK = 'Chargeback',
}

// Enums for payment types
export enum PAYMENT_TYPE {
    CREDIT_CARD = 'CreditCard',
    DEBIT_CARD = 'DebitCard',
    CASH = 'Cash',
    BANK_TRANSFER = 'BankTransfer',
    MOBILE_PAYMENT = 'MobilePayment',
    PAYPAL = 'PayPal',
    VOUCHER = 'Voucher',
}


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
    LOGIN: '/login'
};
