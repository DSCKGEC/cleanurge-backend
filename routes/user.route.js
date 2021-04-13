const express = require('express');
const Router = express.Router();

const userController = require('../controllers/user.controller');
const userAuth = require('../middlewares/auth.middleware');

/* ------------ Endpoint Definitions ----------- */

Router.post('/register', userController.Register);

Router.post('/login', userController.Login);

Router.get('/', userAuth(), userController.FetchAllUsers);

Router.get('/:user_id', userAuth(), userController.FetchUserByID);

module.exports = Router;
