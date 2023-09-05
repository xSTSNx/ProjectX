
const express = require('express')
const dotenv = require('dotenv').config();
const port = process.env.PORT;
const path = require('path')
const app = express();

app.use('/openai', require ('./routes/openaiRoutes'))
app.use('/', express.static(__dirname + '/frontend'));
app.listen(port, () => console.log(`Example app is listining on port ${port}`));  //Tells the app to listen to Port XY//


