const reportService = require('../services/report.service');

/* ------------ Controllers ----------- */

const Create = async (req, res) => {
    try {
        const result = await reportService.Create(req.body);
        res.status(200).json(result);
    } catch (err) {
        res.status(400).json(err);
    }
};

const FetchAllReports = async (req, res) => {
    try {
        const result = await reportService.FetchAllReports();
        res.status(200).json(result);
    } catch (err) {
        res.status(400).json(err);
    }
};

const FetchReportByID = async (req, res) => {
    const { report_id } = req.params;
    try {
        const result = await reportService.FetchReportByID(report_id);
        res.status(200).json(result);
    } catch (err) {
        res.status(400).json(err);
    }
};

const FetchReportByUserID = async (req, res) => {
    const { user_id } = req.params;
    try {
        const result = await reportService.FetchReportByUserID(user_id);
        res.status(200).json(result);
    } catch (err) {
        res.status(400).json(err);
    }
};

const Resolve = async (req, res) => {
    const { report_id } = req.params;
    try {
        const result = await reportService.Resolve(report_id);
        res.status(200).json(result);
    } catch (err) {
        res.status(400).json(err);
    }
};

module.exports = {
    Create,
    FetchAllReports,
    FetchReportByID,
    FetchReportByUserID,
    Resolve,
};
