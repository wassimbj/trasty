// const { qry } = require('../../database/db');
// const logger = require('../../helpers/logger');
const oauthUser = require('../../services/auth/oauthUser')

class UserOauth {

    // facebook login, check if there is a user, else create one
    async facebookLoginCallback(req, accessToken, refreshToken, profile, done) {
        try {
            let user_res = await oauthUser(profile.displayName, profile.emails[0].value, profile.photos[0].value, 'facebook', 1);
            
            if(user_res.new_user){
                req.session.userid = user_res.user_id;
                done(null, {new_user: true})
            }else{
                req.session.userid = user_res.user_id;
                done(null, {new_user: false})
            }
        } catch (err) {
            // logger.error(`FACEBOOK_AUTH_ERROR: ${err}`)
            console.log(`FACEBOOK_AUTH_ERROR: ${err}`)
            done(false, null)
        }
    }

    // google login, check if there is a user, else create one
    async googleLoginCallback(req, accessToken, refreshToken, profile, done) {
        try {
            let user_res = await oauthUser(profile.displayName, profile.emails[0].value, profile.photos[0].value, 'google', 1);
            
            if(user_res.new_user){
                req.session.userid = user_res.user_id;
                done(null, {new_user: true})
            }else{
                req.session.userid = user_res.user_id;
                done(null, {new_user: false})
            }
        } catch (err) {
            logger.error(`GOOGLE_AUTH_ERROR: ${err}`)
            done(false, null)
        }
    }

    // google login, check if there is a user, else create one
    // async twitterLoginCallback(req, accessToken, refreshToken, profile, done) {
    //     try {
    //         let user_res = await oauthUser(profile.displayName, profile.emails[0].value, profile.photos[0].value, 'twitter', 1);
            
    //         if(user_res.new_user){
    //             req.session.userid = user_res.user_id;
    //             done(null, {new_user: true})
    //         }else{
    //             req.session.userid = user_res.user_id;
    //             done(null, {new_user: false})
    //         }
    //     } catch (err) {
    //         logger.error(`GOOGLE_AUTH_ERROR: ${err}`)
    //         done(false, null)
    //     }
    // }

}

module.exports = new UserOauth();