import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import { DB_CONSTANTS } from '../constants/dbConstants.js';

const Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
        Username: { type: String, required: true },
        Password: { type: String, required: true },
        Email: { type: String, required: true, unique: true },
        PhoneNumber: { type: String, required: true, unique: true },
        createdBy: {
            type: String,
            required: true,
            unique: true,
        },
        updatedBy: {
            type: String,
            required: true,
            unique: true,
        },
    },
    { timestamps: true }
);

// Hash the password before saving the user
UserSchema.pre('save', async function (next) {
    const user = this;

    if (!user.isModified('password')) return next();

    try {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(user.password, salt);
        user.password = hash;
        next();
    } catch (err) {
        next(err);
    }
});

// Method to compare a given password with the database hash
UserSchema.methods.comparePassword = async function (candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password);
};

export default mongoose.model('User', UserSchema, DB_CONSTANTS.COLLECTIONS.USERS);


