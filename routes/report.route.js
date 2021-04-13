const express = require('express');
const Router = express.Router();

const reportController = require('../controllers/report.controller');
const userAuth = require('../middlewares/auth.middleware');

/* ------------ Endpoint Definitions ----------- */

Router.post('/create', userAuth(), reportController.Create);

Router.get('/', userAuth('admin'), reportController.FetchAllReports);

Router.get('/:user_id', userAuth(), reportController.FetchReportByUserID);

Router.get('/:report_id', userAuth('admin'), reportController.FetchReportByID);

Router.put('/:report_id', userAuth('admin'), reportController.Resolve);

module.exports = Router;
