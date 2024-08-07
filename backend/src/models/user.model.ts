import mongoose from 'mongoose';

import { DB_CONSTANTS } from '../constants/db.constants';
import { USER_ROLE } from '../constants/app.constants';

const Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
        username: { type: String, required: true },
        password: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        phoneNumber: { type: String, required: true, unique: true },
        roles: {
            type: [String], // Array of strings
            enum: Object.values(USER_ROLE), // Validate against UserRole enum
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
    'User',
    UserSchema,
    DB_CONSTANTS.COLLECTIONS.USERS
);
