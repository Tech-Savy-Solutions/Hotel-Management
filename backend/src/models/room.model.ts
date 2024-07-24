import mongoose from 'mongoose';
import { DB_CONSTANTS } from '../constants/db.constants';
import { ROOM_STATUS } from '../constants/app.constants';

const Schema = mongoose.Schema;

const RoomSchema = new Schema(
    {
        roomNumber: {
            type: String,
            required: true,
            unique: true,
        },
        roomType: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            required: true,
            enum: Object.values(ROOM_STATUS),
            default: ROOM_STATUS.AVAILABLE,
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
    'room',
    RoomSchema,
    DB_CONSTANTS.COLLECTIONS.ROOMS
);
