import express from 'express';
const app = express();
import helmet from 'helmet';
import constants from './constants';
import passport from 'passport';
import session from './config/session';
import cors from 'cors';

// use helmet for basic security
app.use(helmet());
app.use(helmet.xssFilter())
app.use(helmet.noSniff());
app.use(helmet.hidePoweredBy({ setTo: 'Django' }));

// Parse incoming requests data
app.use(express.json({ extended: true, limit: '3mb' }));
app.use(express.urlencoded({ extended: false, limit: '3mb' }));

const acceptedOrigins = [
  'http://localhost:3000',
  'http://192.168.1.12:3000',
  // 'https://trusty.netlify.app',
  'https://www.trusty.tn',
  'https://trusty.tn',
]
// use cors
app.use(cors({
  origin: acceptedOrigins,
  credentials: true
}))


if(constants.IS_PROD){
  app.set('trust proxy', 1); // trust first proxy
}

// session
app.use(session());

// initialize passport
app.use(passport.initialize());

// app.get('*', (req, res, next) => {
//   console.log('LOGGEDIN_USER_ID: ', req.session.userid);
//   next();
// });

app.get('/', (req, res) => {
  return res.json('HELLLLLLLLLLLLLLLLLOOOOOOOOOOOOO')
});

require('./routes')(app);

// 404 Catcher 
app.use((req, res, next) => {
  res.status(404).json('Not Found');
  next();
});

export default app;
