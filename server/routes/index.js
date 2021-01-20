/**
* ? API Routes 
*/
import OAuthUser from './auth/OAuthUser';
import UserProfile from './userProfile/User';
import UserRequests from './requests/UserRequests';
import Offers from './offers';
import Messages from './messages';
import Trips from './trips';

module.exports = (app) => {
  // ----------------------------------------
  // OAuth (login/signup)
  app.use(OAuthUser);
  
  app.use(UserProfile);
  
  app.use(UserRequests);
  
  app.use(Offers);
  
  app.use(Messages);
  
  app.use(Trips);
  // ----------------------------------------
}
