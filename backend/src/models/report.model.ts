import mongoose from 'mongoose';

const reportSchema = new mongoose.Schema(
    {
        reportName: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        generatedDate: {
            type: Date,
        },
        createdBy: {
            type: mongoose.Types.ObjectId,
            ref: 'User',
            required:true
        },
        updatedBy: {
            type: mongoose.Types.ObjectId,
            ref: 'User',
            required:true
        },
    },
    { timestamps: true }
);

export default mongoose.model('Report', reportSchema);
