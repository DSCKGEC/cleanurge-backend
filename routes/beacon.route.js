const express = require('express');
const Router = express.Router();

const beaconController = require('../controllers/beacon.controller');
const userAuth = require('../middlewares/auth.middleware');

/* ------------ Endpoint Definitions ----------- */

/**
 * @swagger
 * /api/beacon/add:
 *   post:
 *     description: Adds a new beacon to the database
 */
Router.post('/add', userAuth('admin'), beaconController.Add);

/**
 * @swagger
 * /api/beacon/:
 *   get:
 *     description: Retrieves a list of beacons added
 */
Router.get('/', userAuth(), beaconController.FetchAllBeacons);

/**
 * @swagger
 * /api/beacon/{id}:
 *   get:
 *     description: Retrieves details of a beacon, _id passed in params
 */
Router.get('/:beacon_id', userAuth(), beaconController.FetchBeaconByID);

/**
 * @swagger
 * /api/beacon/{id}:
 *   put:
 *     description: Edits details of a beacon, _id passed in params and updated properties in body
 */
Router.put('/:beacon_id', userAuth('admin'), beaconController.Edit);

/**
 * @swagger
 * /api/beacon/add:
 *   delete:
 *     description: Deletes the beacon with id as passed in params
 */
Router.delete('/:beacon_id', userAuth('admin'), beaconController.Delete);

module.exports = Router;
