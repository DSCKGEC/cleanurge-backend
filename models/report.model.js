const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reportSchema = new Schema(
    {
        author: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        picture_url: {
            type: String,
            default: null,
        },
        address: {
            type: String,
            required: true,
        },
        is_resolved: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);

let Report = mongoose.model('Report', reportSchema);

module.exports = Report;
