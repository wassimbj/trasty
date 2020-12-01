import express from 'express';
const app = express();
import helmet from 'helmet';
import constants from './constants';
import passport from 'passport';

// use helmet for basic security
app.use(helmet());
app.use(helmet.xssFilter())
app.use(helmet.noSniff());
app.use(helmet.hidePoweredBy({ setTo: 'Django' }));

// Parse incoming requests data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

if(constants.IS_PROD){
  app.set('trust proxy', 1); // trust first proxy
}

// initialize passport
app.use(passport.initialize());

app.get('/', (req, res) => {
  return res.json('HELLLLLLLLLLLLLLLLLOOOOOOOOOOOOO')
});

require('./routes')(app);

export default app;
