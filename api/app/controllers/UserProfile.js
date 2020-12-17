import logger from '../../utils/logger';
import getProfileDetails from '../../services/userProfile/getProfileDetails';
// import getBadge from '../../services/userProfile/getBadge';
// import getBadge from '../../services/userProfile/getBadge';

class UserProfile {

  async getDetails(req, res){
    try{
      const {userid} = req.params;
      const userProfile = await getProfileDetails(userid);
      // const reviewsBadge = getBadge(userid);

      // const useDetails = {...userProfile[0], ...reviewsBadge}
      return res.status(200).json(userProfile);
    }catch(err){
      logger.error(`Get user profile details Controller ERROR: ${err}`);
      return res.status(500).json('Oops');
    }
  }

}

export default new UserProfile();
