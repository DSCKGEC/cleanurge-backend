const express = require('express');
const Router = express.Router();

const reportController = require('../controllers/report.controller');
const userAuth = require('../middlewares/auth.middleware');

Router.get('/', userAuth('admin'), reportController.FetchAllReports);
Router.get('/user/:user_id', userAuth(), reportController.FetchReportByUserID);
Router.get('/:report_id', userAuth(), reportController.FetchReportByID);
Router.post('/create', userAuth(), reportController.Create);
Router.post('/:report_id', userAuth('admin'), reportController.Resolve);

module.exports = Router;
