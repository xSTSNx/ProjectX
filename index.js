const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;

const app = express();

app.use((req, res, next) => {                           //define and pass a middleware function//
    console.log('Time: ', Date.now());
    next();                                             //next() tell the middleware to go to the next middleware function if there is one (important to include at the end!!)//
  });

app.listen(port, () => console.log(`Example app is listening on port ${port}`));  //Tells the app to listen to Port XY//