// constants/db.constants.js
export const DB_CONSTANTS = {
    MONGODB_URI:
        process.env.MONGODB_URI || 'mongodb://localhost:27017/hotel_management',
    DB_NAME: process.env.DB_NAME || 'Hotel_Management',
    COLLECTIONS: {
        USERS: 'users',
        ROLES: 'roles',
        RESERVATIONS: 'reservations',
        GUESTS: 'guests',
        ROOMS: 'rooms',
        BILLINGS: 'billings',
        POS: 'pos',
        REPORTS: 'reports',
    },
    SALT_ROUNDS: 10,
};
