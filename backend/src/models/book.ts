import mongoose from 'mongoose';

const Schema = mongoose.Schema;

// Create Schema
const BookSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    published_date: {
        type: Date,
    },
    publisher: {
        type: String,
    },
    updated_date: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.model('book', BookSchema);
