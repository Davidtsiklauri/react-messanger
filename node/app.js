const express = require('express');
const logger = require('morgan');
const app = express();
const cors = require('cors');


app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

app.use(logger('dev'));
 
app.get('/', ( req, res ) => res.send('sucess') );

module.exports = app;
