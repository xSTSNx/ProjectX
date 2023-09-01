
const express = require('express')
const dotenv = require('dotenv').config();
const port = process.env.DEV_PORT;

const app = express();

app.use('/openai', require('./routes/openaiRoutes'))

app.listen(port, () => console.log(`Mein Server läuft  auf Port ${port}`));

