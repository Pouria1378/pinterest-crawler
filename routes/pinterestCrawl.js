const express = require('express');

const controller = require('../controllers/pinterestCrawlerController');

const router = express.Router();

router.post("/", controller.getImagesByID)

module.exports = router;