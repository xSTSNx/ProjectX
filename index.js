
const express = require('express')
const dotenv = require('dotenv').config();
const port = dotenv.BACKENDPORT|| 4000;
const path = require('path')
const app = express();
const cors = require('cors')


app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.use(cors())
app.use('/openai', require ('./routes/openaiRoutes'))
app.use('/', express.static(__dirname + '/frontend'));
app.listen(port, () => console.log(`Example app is listining on port ${port}`));  //Tells the app to listen to Port XY//

