const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const beaconSchema = new Schema(
    {
        code: {
            type: String,
            required: true,
            unique: true,
        },
        address: {
            type: String,
            required: true,
        },
        geo: {
            type: {
                type: String,
                enum: ['Point'],
                required: true,
            },
            coordinates: {
                type: [Number],
                required: true,
            },
        },
        level: {
            type: String,
            default: null,
        },
    },
    {
        timestamps: true,
    }
);

let Beacon = mongoose.model('Beacon', beaconSchema);

module.exports = Beacon;
