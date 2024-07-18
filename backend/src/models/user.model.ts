import mongoose from 'mongoose';

import { DB_CONSTANTS } from '../constants/db.constants.js';

const Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
        Username: { type: String, required: true },
        Password: { type: String, required: true },
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
    'User',
    UserSchema,
    DB_CONSTANTS.COLLECTIONS.USERS
);
