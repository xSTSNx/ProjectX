const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT;

const app = express();

app.use('/openai', require ('./routes/openaiRoutes'))

app.listen(port, () => console.log(`Example app is listining on port ${port}`));  //Tells the app to listen to Port XY//