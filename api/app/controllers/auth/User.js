import db from '../../../database/init';
// import { validationResult } from 'express-validator';
// const edge = require("edge.js");
// const send_mail = require("../../helpers/sendMail");
import logger from '../../../utils/logger';

class User {

  async me(req, res) {
    let me = await db.query(
      "SELECT id, fullname, verified, is_consulter, heading, image FROM users WHERE id = $1",
      [req.session.userid]
    );

    return res.status(200).json({ me: me[0] });
  }

  // Log out the user
  async logout(req, res) {
    req.session.destroy((err) => {
      if (!err) {
        return res.status(200).json("logged out");
      } else {
        logger.error(`LOGOUT ERROR: ${err}`);
        return res.status(400).json("Something went wrong, Cant logout");
      }
    });
  }

  // Authentication middlewares
  // --> see if user is not authenticated else redirect him to login
  async auth(req, res, next) {
    try {
      if (!req.session.userid) {
        return res.status(401).json("unauthorized");
      }

      let logged_in_user = await db.query("SELECT id FROM users WHERE id = $1", [
        req.session.userid,
      ]);

      // check if user is in the DB
      if (!logged_in_user[0]) {
        req.session.userid = null;
        return res.status(401).json("unauthorized");
      }
      // check if user's email is verified !
      // else if(logged_in_user[0] && !logged_in_user[0].verified){
      //     return res.status(401).json('unauthorized');
      // }

      // else
      next();
    } catch (err) {
      logger.error(`MUST AUTH ERROR: ${err}`);
      return res.status(500).json("something went wrong");
    }
  }

  // --> see if user is authenticated
  // ken user is authenticated, w yemchi lel login w ila lel register mat5alichi
  redirectIfAuth(req, res, next) {
    if (req.session.userid) return res.status(401);
    // else
    next();
  }

}

export default new User();
