import mongoose from 'mongoose';

import bcrypt from 'bcrypt';

import { DB_CONSTANTS } from '../constants/db.constants';
import { USER_ROLE } from '../constants/app.constants';

const Schema = mongoose.Schema;

const RoleSchema = new Schema(
    {
        roleName: {
            type: String,
            required: true,
            enum: Object.values(USER_ROLE),
            unique: true,
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
    'Role',
    RoleSchema,
    DB_CONSTANTS.COLLECTIONS.ROLES
);
