import mongoose from 'mongoose';

import bcrypt from 'bcrypt';

import { DB_CONSTANTS } from '../constants/db.constants.js';

const Schema = mongoose.Schema;

const RoleSchema = new Schema(
    {
        RoleName: { type: String, required: true },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            unique: true,
            ref: DB_CONSTANTS.COLLECTIONS.USERS,
        },
        updatedBy: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            unique: true,
            ref: DB_CONSTANTS.COLLECTIONS.USERS,
        },
    },
    { timestamps: true }
);

export default mongoose.model(
    'Role',
    RoleSchema,
    DB_CONSTANTS.COLLECTIONS.ROLES
);
