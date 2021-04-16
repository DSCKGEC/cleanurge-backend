const express = require('express');
const Router = express.Router();

const reportController = require('../controllers/report.controller');
const userAuth = require('../middlewares/auth.middleware');

/* ------------ Endpoint Definitions ----------- */

/**
 * @swagger
 * /api/report/create:
 *   post:
 *     description: Creates a new report in the database
 *     responses:
 *       200:
 *         description: Creates and returns a new report in the database.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: The user ID.
 *                         example: 0
 *                       name:
 *                         type: string
 *                         description: The user's name.
 *                         example: Leanne Graham
 */
Router.post('/create', userAuth(), reportController.Create);

/**
 * @swagger
 * /api/report/:
 *   get:
 *     description: Retrieves a list of issued reports | ONLY FOR ADMINS
 */
Router.get('/', userAuth('admin'), reportController.FetchAllReports);

/**
 * @swagger
 * /api/report/user/{user_id}:
 *   get:
 *     description: Retrieves reports issued by the corresponding user
 */
Router.get('/user/:user_id', userAuth(), reportController.FetchReportByUserID);

/**
 * @swagger
 * /api/report/{id}:
 *   get:
 *     description: Retrieves the corresponding report document
 */
Router.get('/:report_id', userAuth(), reportController.FetchReportByID);

/**
 * @swagger
 * /api/report/{id}:
 *   put:
 *     description: Marks the issue as resolved | ONLY FOR ADMINS
 */
Router.put('/:report_id', userAuth('admin'), reportController.Resolve);

module.exports = Router;
