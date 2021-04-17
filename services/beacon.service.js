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
        const beacons = await Beacon.find();
        return { beacons: beacons };
    } catch (error) {
        throw error;
    }
};

const FetchBeaconByID = async (beacon_id) => {
    try {
        const beacon = await Beacon.findOne({ _id: beacon_id });
        return { beacon: beacon };
    } catch (error) {
        throw error;
    }
};

const Edit = async (beacon_id, reqBody) => {
    try {
        const beacon = await Beacon.findOne({ _id: beacon_id });
        if (!beacon) throw { message: "Beacon not found" };
        if (reqBody.address)  beacon.address = reqBody.address;
        if (reqBody.coordinates)  beacon.geo.coordinates = reqBody.coordinates;
        if (reqBody.level)  beacon.level = reqBody.level;

        return await beacon.save();
    } catch (error) {
        throw error;
    }
};

const Delete = async (beacon_id) => {
    try {
        return await Beacon.deleteOne({ _id: beacon_id });
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
