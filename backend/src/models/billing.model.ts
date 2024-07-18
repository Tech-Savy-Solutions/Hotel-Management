import mongoose from 'mongoose';
import { DB_CONSTANTS } from '../constants/db.constants';

const Schema = mongoose.Schema;

const BillingSchema = new Schema(
    {
        billingID: {
            type: String,
            required: true,
            unique: true,
        },
        reservationID: {
            type: String,
            required: true,
            ref: DB_CONSTANTS.COLLECTIONS.RESERVATIONS,
        },
        totalAmount: {
            type: Number,
            required: true,
        },
        paymentStatus: {
            type: String,
            required: true,
        },
        billingDate: {
            type: Date,
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

export default mongoose.model('Billing', BillingSchema, DB_CONSTANTS.COLLECTIONS.BILLINGS);
