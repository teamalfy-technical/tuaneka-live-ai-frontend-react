const express = require('express');
const router = express.Router();
const { createBot, getBotResponse, sendToBot } = require('../controllers/control'); // Destructure to extract the createBot function

router.post('/create', createBot); // Pass the actual function

router.post('/tobot', sendToBot); // Pass the actual function

module.exports = router;
