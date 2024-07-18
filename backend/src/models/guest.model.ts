import mongoose from 'mongoose';

import { DB_CONSTANTS } from '../constants/db.constants';

const Schema = mongoose.Schema;

const GuestSchema = new Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        address: { type: String, required: true },
        Email: { type: String, required: true, unique: true },
        PhoneNumber: { type: String, required: true, unique: true },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            unique: true,
        },
        updatedBy: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            unique: true,
        },
    },
    { timestamps: true }
);

export default mongoose.model(
    'Guest',
    GuestSchema,
    DB_CONSTANTS.COLLECTIONS.GUESTS
);
