import mongoose from 'mongoose';

import dotenv from 'dotenv';

import { DB_CONSTANTS } from '../constants/db.constants.js';

dotenv.config();

const db = process.env.DB_KEY;

/* Replace <password> with your database password */
console.log('DB_KEY', db);

mongoose.set('strictQuery', true, 'useNewUrlParser', true);

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            dbName: DB_CONSTANTS.DB_NAME,
        });

        console.log('MongoDB is Connected...');
    } catch (err) {
        console.error(err.message);

        process.exit(1);
    }
};

export default connectDB;
