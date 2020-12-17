/**
* ? API Routes 
*/
import OAuthUser from './auth/OAuthUser';
import UserProfile from './userProfile/User';
import UserRequests from './requests/UserRequests';

module.exports = (app) => {
  // ----------------------------------------
  // OAuth (login/signup)
  app.use(OAuthUser);
  
  app.use(UserProfile);
  
  app.use(UserRequests);
  
  // ----------------------------------------
}
