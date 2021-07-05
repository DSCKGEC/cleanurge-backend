const Report = require('../models/report.model');

const Create = async (reportBody) => {
    try {
        const newReport = new Report({
            author: reportBody.user_id,
            content: reportBody.content,
            picture_url: reportBody.picture_url,
            address: reportBody.address,
        });
        const report = await newReport.save();
        return { report: report };
    } catch (error) {
        throw error;
    }
};

const FetchAllReports = async () => {
    try {
        const reports = await Report.find({ is_resolved: false }).populate({
            path: 'author',
            select: 'name email phone address',
        });
        return { reports: reports };
    } catch (error) {
        throw error;
    }
};

const FetchReportByID = async (report_id) => {
    try {
        const report = await Report.findOne({ _id: report_id }).populate({
            path: 'author',
            select: 'name email phone address',
        });
        return { report: report };
    } catch (error) {
        throw error;
    }
};

const FetchReportByUserID = async (user_id) => {
    try {
        const reports = await Report.find({ author: user_id }).populate({
            path: 'author',
            select: 'name email phone address',
        });
        return { reports: reports };
    } catch (error) {
        throw error;
    }
};

const Resolve = async (report_id) => {
    try {
        return await Report.updateOne(
            { _id: report_id },
            { is_resolved: true }
        );
    } catch (error) {
        throw error;
    }
};

module.exports = {
    Create,
    FetchAllReports,
    FetchReportByID,
    FetchReportByUserID,
    Resolve,
};
