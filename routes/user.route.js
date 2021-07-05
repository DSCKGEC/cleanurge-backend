const express = require('express');
const Router = express.Router();

const userController = require('../controllers/user.controller');
const userAuth = require('../middlewares/auth.middleware');

/* ------------ User Document -------------- */

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: The user ID.
 *           example: 6079e5399d39fd3fbbd73db1
 *         name:
 *           type: string
 *           description: The user's name.
 *           example: Chris Evans
 *         email:
 *           type: string
 *           description: The user's email.
 *           example: chris@evans.com
 *         password:
 *           type: string
 *           description: The user's password.
 *           example: supersecretpassword
 *         phone:
 *           type: Number
 *           description: The user's 10 digit phone number.
 *           example: 4242424242
 *         address:
 *           type: string
 *           description: The user's address.
 *           example: 221 B, Baker's Street ...
 *         createdAt:
 *           type: string
 *           format: date
 *           description: stores time of creation
 *           example: 2021-04-17T05:04:35.394Z
 *         updatedAt:
 *           type: string
 *           format: date
 *           description: stores time of last update
 *           example: 2021-04-17T05:04:35.394Z
 */

/* ------------ Endpoint Definitions ----------- */

/**
 * @swagger
 * /api/user/register:
 *   post:
 *     description: Adds a new user in the database
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The user's name.
 *                 example: Chris Evans
 *               email:
 *                 type: string
 *                 example: chris@evans.com
 *               password:
 *                 type: string
 *                 description: The user's password.
 *                 example: supersecretpassword
 *               phone:
 *                 type: Number
 *                 description: The user's 10 digit phone number.
 *                 example: 4242424242
 *               address:
 *                 type: string
 *                 description: The user's address.
 *                 example: 221 B, Baker's Street ...
 *     responses:
 *       200:
 *         description: A single user.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 user:
 *                   $ref: '#/components/schemas/User'
 */
Router.post('/register', userController.Register);

/**
 * @swagger
 * /api/user/login:
 *   post:
 *     description: Logs in the requesting user into the app
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: chris@evans.com
 *               password:
 *                 type: string
 *                 description: The user's password.
 *                 example: supersecretpassword
 *     responses:
 *       200:
 *         description: A single user.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: signed jwt token
 *                   example: aaaaaa.bbbbbb.cccccc
 *                 user:
 *                   $ref: '#/components/schemas/User'
 */
Router.post('/login', userController.Login);

/**
 * @swagger
 * /api/user/:
 *   get:
 *     description: Retrieves a list of all users
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 users:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/User'
 */
Router.get('/', userAuth(), userController.FetchAllUsers);

/**
 * @swagger
 * /api/user/{id}:
 *   get:
 *     description: Retrieves the corresponding user's documents
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the user to be retrieved.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The entire document of the user.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 user:
 *                   $ref: '#/components/schemas/User'
 */
Router.get('/:user_id', userAuth(), userController.FetchUserByID);

module.exports = Router;
