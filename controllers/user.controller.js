const userService = require('../services/user.service');

/* ------------ Controllers ----------- */

const Register = async (req, res) => {
    try {
        const result = await userService.Register(req.body);
        res.status(201).json(result);
    } catch (err) {
        res.status(400).json(err);
    }
};

const Login = async (req, res) => {
    try {
        const result = await userService.Login(
            req.body.email,
            req.body.password
        );
        res.status(200).json(result);
    } catch (err) {
        res.status(400).json(err);
    }
};

const FetchAllUsers = async (req, res) => {
    try {
        const result = await userService.FetchAllUsers();
        res.status(200).json(result);
    } catch (err) {
        res.status(400).json(err);
    }
};

const FetchUserByID = async (req, res) => {
    const { user_id } = req.params;
    try {
        const result = await userService.FetchUserByID(user_id);
        res.status(200).json(result);
    } catch (err) {
        res.status(400).json(err);
    }
};

module.exports = {
    Register,
    Login,
    FetchAllUsers,
    FetchUserByID,
};
