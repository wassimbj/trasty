const express = require('express');
const app = express();
const helmet = require('helmet');
const constants = require('./config/constants')

// use helmet for basic security
app.use(helmet());
app.use(helmet.xssFilter())
app.use(helmet.noSniff());
app.use(helmet.hidePoweredBy({ setTo: 'Django' }));

// Parse incoming requests data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

if(constants.IS_PROD){
  app.set('trust proxy', 1) // trust first proxy
}

app.get('/', (req, res) => {
  return res.json('HELLLLLLLLLLLLLLLLLOOOOOOOOOOOOO')
});


module.exports = app;
