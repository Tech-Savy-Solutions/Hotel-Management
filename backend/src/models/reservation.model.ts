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

export default mongoose.model(
    'Reservation',
    ReservationSchema,
    DB_CONSTANTS.COLLECTIONS.RESERVATIONS
);
