import mongoose from 'mongoose';

import { DB_CONSTANTS } from '../constants/db.constants';

const Schema = mongoose.Schema;

const GuestSchema = new Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        address: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        phoneNumber: { type: String, required: true, unique: true },
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
    'Guest',
    GuestSchema,
    DB_CONSTANTS.COLLECTIONS.GUESTS
);
