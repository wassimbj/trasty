import db from '../../database/init';
import logger from '../../utils/logger';
import { nanoid, customAlphabet } from 'nanoid';

async function oauthUser(
  fullname, 
  email, 
  photo, 
  provider, 
  is_phone_verified, 
  is_email_verified
) {
  try {
    const existedUser = await db.query("SELECT id FROM users WHERE email = $1", [ email ]);
    // console.log('existedUser: ', existedUser);
    if (existedUser.rowCount > 0) {
      // login
       return {new_user: false, user_id: existedUser.rows[0].id};
    } else {
      const phoneVerifyToken = customAlphabet('1234567890', 6);
      const emailVerifyToken = nanoid(20);
      // console.log('Phone Token: ', phoneVerifyToken);
      // Create an account
      const newUser = await db.query(
        `INSERT INTO 
          users(
            fullname,
            email, 
            image,
            phone,
            join_method,
            is_phone_verified, 
            is_email_verified,
            phone_verify_token,
            email_verify_token
          ) 
          VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9)
          RETURNING id`,
        [
          fullname, 
          email, 
          photo,
          '20123456',
          `${provider}`, 
          is_phone_verified, 
          is_email_verified,
          phoneVerifyToken(),
          emailVerifyToken
        ]
      );
      // console.log('newUser: ', newUser);
      return {new_user: true, user_id: newUser.rows[0].id};
   }
  } catch (err) {
    logger.error(`OAUTH USER (${provider || "none"}) ERROR: ${err}`);
  }
}

export default oauthUser;
