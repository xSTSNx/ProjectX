const express = require('express')
const router = express.Router();
const OpenAI = require('../controllers/openaicontroller')
const {generateImage} = require('../controllers/openaicontroller')

router.post('/generateimg', generateImage);

module.exports = router;

