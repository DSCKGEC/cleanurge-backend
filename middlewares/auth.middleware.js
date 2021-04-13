const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

/* ------------ Authentication Middleware ----------- */

// UserAuthenticationMiddleware ... validates the user through jwt token passed in authorization header
const UserAuthenticationMiddleware = (is_admin) => {
    return async (req, res, next) => {
        // Access token from header
        let token = req.header('Authorization');

        // Token not found
        if (!token) res.status(401).json('Token not found');

        // fetch token string
        token = token.split(' ')[1];

        try {
            // Unsign and verify the jwt token
            let decoded = jwt.verify(token, process.env.JWT_SECRET);

            // Failed verification
            if (!decoded)
                return res.status(401).json('Expired or Invalid token');

            // Fetch user from DB
            let user = await User.findOne({ email: decoded.email });

            // Check for user authenticity
            if (!user || user.status !== 'verified')
                return res.status(401).json({ message: 'Invalid User' });

            // Check for user permissions
            if (is_admin && !user.is_admin)
                return res.status(401).json({ message: 'Permission Denied' });

            // Add user properties to the request body
            req.body.email = user.email;
            req.body.user_id = user._id;
            req.body.is_admin = is_admin ? true : false;

            // Call next middleware on successful validation
            next();
        } catch (error) {
            return res.status(500).json(error);
        }
    };
};

module.exports = UserAuthenticationMiddleware;
