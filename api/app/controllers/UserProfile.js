import logger from '../../utils/logger';
import getProfileDetails from '../../services/userProfile/getProfileDetails';
// import getBadge from '../../services/userProfile/getBadge';

class UserProfile {

  async getDetails(req, res){
    try{
      const {userid} = req.params;
      const data = await getProfileDetails(userid);

      return res.status(200).json(data);
    }catch(err){
      logger.error(`Get user profile details Controller ERROR: ${err}`);
      return res.status(500).json('Oops');
    }
  }

}

export default new UserProfile();
