const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

/* ------------ JWT Configs ----------- */

const expiry_length = parseInt(process.env.EXPIRY) * 86400;
const jwt_headers = {
    algorithm: 'HS256',
    expiresIn: expiry_length,
};

/* ------------ Services ----------- */

const Register = async (userBody) => {
    try {
        return await User.create(userBody);
    } catch (error) {
        throw error;
    }
};

const Login = async (email, password) => {
    try {
        const user = await User.findOne({ email });
        if (!user) throw 'Invalid Email or Password';
        if (!(await bcrypt.compare(password, user.password)))
            throw 'Invalid Email or Password';
        if (user.status !== 'verified')
            throw 'Wait for your account to be approved for logging in';
        const accessToken = jwt.sign(
            { email: user.email, user_id: user._id },
            process.env.JWT_SECRET,
            jwt_headers
        );
        return {
            token: accessToken,
            user: user,
        };
    } catch (error) {
        throw error;
    }
};

const FetchAllUsers = async () => {
    try {
        return await Users.find();
    } catch (error) {
        throw error;
    }
};

const FetchUserByID = async (user_id) => {
    try {
        return await User.findOne({ _id: user_id });
    } catch (error) {
        throw error;
    }
};

module.exports = {
    Register,
    Login,
    FetchAllUsers,
    FetchUserByID,
};
