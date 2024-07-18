import mongoose from 'mongoose';
import { DB_CONSTANTS } from '../constants/db.constants.js';

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
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },
        updatedBy: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },
    },
    { timestamps: true }
);

export default mongoose.model('room', RoomSchema, DB_CONSTANTS.COLLECTIONS.ROOMS);
