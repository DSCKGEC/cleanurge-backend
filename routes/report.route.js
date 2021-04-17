const express = require('express');
const Router = express.Router();

const reportController = require('../controllers/report.controller');
const userAuth = require('../middlewares/auth.middleware');

/* ------------ Report Document -------------- */

/**
 * @swagger
 * components:
 *   schemas:
 *     Report:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: The report ID.
 *           example: 6079e5399d39fd3fbbd73db1
 *         author:
 *           type: string
 *           description: The author ID.
 *           example: 6079e5399d39fd3fbbd73db1
 *         content:
 *           type: string
 *           description: Issue description.
 *           example: Garbaged dumped outside of bin. Kindly attend and fix.
 *         picture_url:
 *           type: string
 *           description: Image URL.
 *           example: https://picture.com/img.png
 *         address:
 *           type: string
 *           description: Raing.
 *           example: 221 B, Baker Street
 *         is_resolved:
 *           type: boolean
 *           description: stores issue status
 *           example: false
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
 *     FullReport:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: The report ID.
 *           example: 6079e5399d39fd3fbbd73db1
 *         author:
 *           $ref: '#/components/schemas/User'
 *         content:
 *           type: string
 *           description: Issue description.
 *           example: Garbaged dumped outside of bin. Kindly attend and fix.
 *         picture_url:
 *           type: string
 *           description: Image URL.
 *           example: https://picture.com/img.png
 *         address:
 *           type: string
 *           description: Raing.
 *           example: 221 B, Baker Street
 *         is_resolved:
 *           type: boolean
 *           description: stores issue status
 *           example: false
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
 * /api/report/create:
 *   post:
 *     description: Creates a new report in the database
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               content:
 *                 type: string
 *                 description: Issue description.
 *                 example: Garbaged dumped outside of bin. Kindly attend and fix.
 *               picture_url:
 *                 type: string
 *                 description: Image URL.
 *                 example: https://picture.com/img.png
 *               address:
 *                 type: string
 *                 description: Raing.
 *                 example: 221 B, Baker Street ...
 *     responses:
 *       200:
 *         description: Creates and returns a new report in the database.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 report:
 *                   $ref: '#/components/schemas/Report'
 */
Router.post('/create', userAuth(), reportController.Create);

/**
 * @swagger
 * /api/report/:
 *   get:
 *     description: Retrieves a list of issued reports | ONLY FOR ADMINS
 *     responses:
 *       200:
 *         description: A list of reports.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 reports:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/FullReport'
 */
Router.get('/', userAuth('admin'), reportController.FetchAllReports);

/**
 * @swagger
 * /api/report/user/{user_id}:
 *   get:
 *     description: Retrieves reports issued by the corresponding user
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the user 
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of reports authored by the user.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 reports:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/FullReport'
 */
Router.get('/user/:user_id', userAuth(), reportController.FetchReportByUserID);

/**
 * @swagger
 * /api/report/{id}:
 *   get:
 *     description: Retrieves the corresponding report document
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the report to be retrieved.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The entire document of the report.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 report:
 *                   $ref: '#/components/schemas/FullReport'
 */
Router.get('/:report_id', userAuth(), reportController.FetchReportByID);

/**
 * @swagger
 * /api/report/{id}:
 *   put:
 *     description: Marks the issue as resolved | ONLY FOR ADMINS
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the report to be resolved
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: No content.
 */
Router.put('/:report_id', userAuth('admin'), reportController.Resolve);

module.exports = Router;
