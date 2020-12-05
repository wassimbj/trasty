/**
* ? API Routes 
*/
import OAuthUser from './auth/OAuthUser';
import User from './user/User';
import UserRequests from './requests/UserRequests';

module.exports = (app) => {
  // ----------------------------------------
  // OAuth (login/signup)
  app.use(OAuthUser);
  
  app.use(User);
  
  app.use(UserRequests);
  
  // ----------------------------------------
}
