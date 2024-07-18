import mongoose from 'mongoose'

import dotenv from 'dotenv'

import { DB_CONSTANTS } from '../constants/db.constants'

dotenv.config()

const db = process.env.MONGODB_URI!

/* Replace <password> with your database password */
// console.log('DB_KEY', db)

mongoose.set({ strictQuery: true })

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            dbName: DB_CONSTANTS.DB_NAME,
        })

        console.log('MongoDB is Connected...')
    } catch (err: any) {
        console.error(err.message)

        process.exit(1)
    }
}

export default connectDB
