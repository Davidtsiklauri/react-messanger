const express = require('express'),
      logger = require('morgan'),
      app = express(),
      userRoute = require('./routes/users'),
      uploadsRoute = require('./routes/upload'),
      validations = require('./routes/validations'),
      bodyParser = require('body-parser')
      


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json());

app.use(logger('dev'));

app.use('/api',userRoute );
app.use('/api', validations );
app.use(uploadsRoute);

app.get('/', ( req, res ) => res.send('sucess') );

module.exports = app;
