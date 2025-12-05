const express = require('express');
const router = express.Router();
const adminAllReport = require('../../controllers/adminAllReport');

router.get('/', adminAllReport.getAllReports);

module.exports = router;