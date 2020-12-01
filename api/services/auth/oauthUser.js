// const { error } = require("winston");
import db from '../../database/init';
// const logger = require("../../helpers/logger");
// const addToMailchimp = require('../user/addToMailchimp');

async function oauthUser(fullname, email, photo, provider, is_verified) {
  try {
    const existedUser = await db.query("SELECT id FROM users WHERE email = $1", [ email ]);

    if (existedUser) {
       return {new_user: false, user_id: existedUser[0].id};
    } else {
      // Create an account
      const newUser = await db.query(
        "INSERT INTO users(fullname, email, image, method, verified) VALUES($1,$2,$3,$4,$5)",
        [fullname, email, photo, `${provider}`, is_verified || 1]
      );

      return {new_user: true, user_id: newUser.insertId};

      // ? add this user to mailchimp
      // addToMailchimp(email, fullname)

   }
  } catch (err) {
    // logger.error(`OAUTH USER (${provider || "none"}) ERROR: ${err}`);
    console.log(`OAUTH USER (${provider || "none"}) ERROR: ${err}`)
    throw new Error('OAUTH USER (${provider || "none"}) ERROR: ${err}');
  }
}

export default oauthUser;
