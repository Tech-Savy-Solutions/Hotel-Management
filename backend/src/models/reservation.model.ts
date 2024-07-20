import mongoose from 'mongoose';

import { DB_CONSTANTS } from '../constants/db.constants';

import {
    RESERVATION_STATUS,
    DEFAULT_RESERVATION_STATUS,
} from '../constants/app.constants';

const Schema = mongoose.Schema;

const ReservationSchema = new Schema(
    {
        guestID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: DB_CONSTANTS.COLLECTIONS.GUESTS,
            required: true,
        },
        roomID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: DB_CONSTANTS.COLLECTIONS.ROOMS,
            required: true,
        },
        checkInDate: {
            type: Date,
            required: true,
        },
        checkOutDate: {
            type: Date,
            required: true,
        },
        status: {
            type: String,
            required: true,
            enum: RESERVATION_STATUS,
            default: DEFAULT_RESERVATION_STATUS,
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: DB_CONSTANTS.COLLECTIONS.USERS,
            required: true,
        },
        updatedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: DB_CONSTANTS.COLLECTIONS.USERS,
            required: true,
        },
    },
    { timestamps: true }
);

// Add a compound index to ensure a unique reservation for each room within a given time period
ReservationSchema.index(
    { roomID: 1, checkInDate: 1, checkOutDate: 1 },
    { unique: true }
);

export default mongoose.model(
    'Reservation',
    ReservationSchema,
    DB_CONSTANTS.COLLECTIONS.RESERVATIONS
);
