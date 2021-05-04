const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const userSchema = new Schema(
    {
        is_admin: {
            type: Boolean,
            default: false,
        },
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        phone: {
            type: Number,
            unique: true,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            default: 'verified',
        },
    },
    {
        timestamps: true,
    }
);

userSchema.pre('save', async function (next) {
    if (!this.isModified || !this.isNew) {
        next();
    } else this.isModified('password');
    if (this.password)
        this.password = await bcrypt.hash(String(this.password), 12);
    next();
});

let User = mongoose.model('User', userSchema);

module.exports = User;
