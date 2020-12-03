/**
* ? API Routes 
*/
import OAuthUser from './auth/OAuthUser';
import User from './user/User';

module.exports = (app) => {

  // OAuth (login/signup)
  app.use(OAuthUser);

  app.use(User);

}
