import mongoose from 'mongoose';

import { DB_CONSTANTS } from '../constants/db.constants';

const Schema = mongoose.Schema;

const ReportsSchema = new Schema(
    {
        reportName: {
            type: mongoose.Schema.Types.ObjectId,
            ref: DB_CONSTANTS.COLLECTIONS.RESERVATIONS,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        generatedDate: {
            type: Date,
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
    'Reports',
    ReportsSchema,
    DB_CONSTANTS.COLLECTIONS.REPORTS
);
