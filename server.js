const express = require('express');
const serveIndex = require('serve-index');              //import serve-index package//

const app = express();

app.use((req, res, next) => {                           //define and pass a middleware function//
    console.log('Time: ', Date.now());
    next();                                             //next() tell the middleware to go to the next middleware function if there is one (important to include at the end!!)//
  });

app.use('/request-type', (req, res, next) => {
    console.log('Request type: ', req.method);          // "/request-type" app.use() will only run for localhost:3000/request-type//
    next();
  });

app.use('/public', express.static('public'));           
app.use('/public', serveIndex('public'));


app.get('/', (req, res) => {                        //handle GET request to  our server (similar to POST,PUT)//
    res.send('Successful response.');
  });                                       //calling our function to send back a response: successful response//


app.listen(3000, () => console.log('Example app is listening on port 3000.'));  //Tells the app to listen to Port 3000//

