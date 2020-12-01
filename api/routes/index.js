/**
* ? API Routes 
*/

import OAuthUser from './auth/OAuthUser';

module.exports = (app) => {

  app.use(OAuthUser)

}
