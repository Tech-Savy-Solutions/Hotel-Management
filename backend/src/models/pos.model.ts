import mongoose from 'mongoose';

import { DB_CONSTANTS } from '../constants/db.constants';

import {
    RESERVATION_STATUS,
    DEFAULT_RESERVATION_STATUS,
} from '../constants/app.constants';

const Schema = mongoose.Schema;

const PosSchema = new Schema(
    {
        reservationID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: DB_CONSTANTS.COLLECTIONS.RESERVATIONS,
            required: true,
        },
        itemName: {
            type: String,
            required: true,
        },
        quantity: {
            type: String,
            required: true,
        },
        price: {
            type: String,
            required: true,
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
    'POS',
    PosSchema,
    DB_CONSTANTS.COLLECTIONS.POS
);
