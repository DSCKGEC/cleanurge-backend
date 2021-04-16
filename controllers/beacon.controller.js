const beaconService = require('../services/beacon.service');
const { generateCode } = require('../utils/helper');

/* ------------ Controllers ----------- */

const Add = async (req, res) => {
    req.body.code = generateCode(6);
    try {
        const result = await beaconService.Add(req.body);
        res.status(201).json(result);
    } catch (err) {
        res.status(400).json(err);
    }
};

const FetchAllBeacons = async (req, res) => {
    try {
        const result = await beaconService.FetchAllBeacons();
        res.status(200).json(result);
    } catch (err) {
        res.status(400).json(err);
    }
};

const FetchBeaconByID = async (req, res) => {
    const { beacon_id } = req.params;
    try {
        const result = await beaconService.FetchBeaconByID(beacon_id);
        res.status(200).json(result);
    } catch (err) {
        res.status(400).json(err);
    }
};

const Edit = async (req, res) => {
    const { beacon_id } = req.params;
    try {
        const result = await beaconService.Edit(beacon_id, req.body);
        res.status(200).json(result);
    } catch (err) {
        res.status(400).json(err);
    }
};

const Delete = async (req, res) => {
    const { beacon_id } = req.params;
    try {
        const result = await beaconService.Delete(beacon_id);
        res.status(200).json(result);
    } catch (err) {
        res.status(400).json(err);
    }
};

module.exports = {
    Add,
    FetchAllBeacons,
    FetchBeaconByID,
    Edit,
    Delete,
};
