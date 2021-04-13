const Beacon = require('../models/beacon.model');

/* ------------ Services ----------- */

const Add = async (beaconBody) => {
    try {
        return await Beacon.create(beaconBody);
    } catch (error) {
        throw error;
    }
};

const FetchAllBeacons = async () => {
    try {
        return await Beacon.find();
    } catch (error) {
        throw error;
    }
};

const FetchBeaconByID = async (beacon_id) => {
    try {
        return await Beacon.findOne({ _id: beacon_id });
    } catch (error) {
        throw error;
    }
};

const Edit = async (beacon_id, reqBody) => {
    try {
        return await Beacon.updateOne({ _id: beacon_id }, { reqBody });
    } catch (error) {
        throw error;
    }
};

const Delete = async (beacon_id) => {
    try {
        return await Beacon.updateOne({ _id: beacon_id });
    } catch (error) {
        throw error;
    }
};

module.exports = {
    Add,
    FetchAllBeacons,
    FetchBeaconByID,
    Edit,
    Delete,
};
