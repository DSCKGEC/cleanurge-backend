const express = require('express');
const Router = express.Router();

const beaconController = require('../controllers/beacon.controller');
const userAuth = require('../middlewares/auth.middleware');

Router.get('/', userAuth(), beaconController.FetchAllBeacons);
Router.get('/:beacon_id', userAuth(), beaconController.FetchBeaconByID);
Router.get('/del/:beacon_id', userAuth('admin'), beaconController.Delete);
Router.post('/add', userAuth('admin'), beaconController.Add);
Router.post('/:beacon_id', userAuth('admin'), beaconController.Edit);
 
module.exports = Router;