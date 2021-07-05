const express = require('express');
const Router = express.Router();

const beaconController = require('../controllers/beacon.controller');
const userAuth = require('../middlewares/auth.middleware');

/* ------------ Beacon Document -------------- */

/**
 * @swagger
 * components:
 *   schemas:
 *     Beacon:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: The beacon ID.
 *           example: 6079e5399d39fd3fbbd73db1
 *         code:
 *           type: string
 *           description: Unique beacon code.
 *           example: 4AB3D
 *         address:
 *           type: string
 *           description: The user's address.
 *           example: 221 B, Baker's Street ...
 *         geo:
 *           type: object
 *           description: stores geo coordinates of beacon
 *           properties:
 *             coordinates:
 *               type: array
 *               items:
 *                 type: integer
 *               example: [-22.3, 88.352]
 *         level:
 *           type: string
 *           description: stores level of waste in the bin.
 *           example: 70%
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
 * /api/beacon/add:
 *   post:
 *     description: Adds a new beacon to the database
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               address:
 *                 type: string
 *                 description: The bin's address.
 *                 example: 221 B, Baker's Street ...
 *               coordinates:
 *                 type: array
 *                 description: geo coordinates of beacon
 *                 example: [-22.4531, 88.138140]
 *     responses:
 *       200:
 *         description: Created beacon.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 beacon:
 *                   $ref: '#/components/schemas/Beacon'
 */
Router.post('/add', userAuth('admin'), beaconController.Add);

/**
 * @swagger
 * /api/beacon/:
 *   get:
 *     description: Retrieves a list of beacons added
 *     responses:
 *       200:
 *         description: A list of beacons.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 beacons:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Beacon'
 */
Router.get('/', userAuth(), beaconController.FetchAllBeacons);

/**
 * @swagger
 * /api/beacon/{id}:
 *   get:
 *     description: Retrieves details of a beacon.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the beacon to be retrieved.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The entire document of the beacon.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 beacon:
 *                   $ref: '#/components/schemas/Beacon'
 */

Router.get('/:beacon_id', userAuth(), beaconController.FetchBeaconByID);

/**
 * @swagger
 * /api/beacon/{id}:
 *   put:
 *     description: Edits details of a beacon, _id passed in params and updated properties in body
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the beacon to be updated.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               address:
 *                 type: string
 *                 description: The bin's address.
 *                 example: 221 B, Baker's Street ...
 *               coordinates:
 *                 type: array
 *                 description: geo coordinates of beacon
 *                 example: [-22.4531, 88.138140]
 *               level:
 *                 type: string
 *                 description: updated level of bin.
 *                 example: 40%
 *     responses:
 *       200:
 *         description: Success | no content.
 */
Router.put('/:beacon_id', userAuth('admin'), beaconController.Edit);

/**
 * @swagger
 * /api/beacon/{id}:
 *   delete:
 *     description: Deletes the beacon with id as passed in params | ADMINS ONLY
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the beacon to be deleted.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success | no content.
 */
Router.delete('/:beacon_id', userAuth('admin'), beaconController.Delete);

module.exports = Router;
