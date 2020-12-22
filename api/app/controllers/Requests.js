import searchLocation from '../../services/requests/searchLocation';
import logger from '../../utils/logger';
import cloudinary from '../../config/cloudinary';
// import db from '../../database/init';
import { nanoid } from 'nanoid';
import getRequests from '../../services/requests/getRequests';
import getSingleDetails from '../../services/requests/getSingleDetails';
import getUserRequests from '../../services/requests/getUserRequests';
import createRequest from '../../services/requests/createRequest';
import deleteRequest from '../../services/requests/deleteRequest';
// import getMyRequests from '../../services/requests/getMyRequests';

class Requests {

  async getAll(req, res){
    try{
      const {limit, offset, filterFrom, filterTo} = req.query;
      const data = await getRequests(offset, limit, filterFrom, filterTo);
      // console.log('Get All!: \n', data);
      return res.status(200).json(data);
    }catch(err){
      logger.error(`Get All requests Error : ${err}`);
      return res.status(500).json('Oops');
    }
  }

  async getSingle(req, res){
    try{
      const {slug} = req.params;
      const data = await getSingleDetails(slug, req.session.userid);
      // console.log('Get All!: \n', data);
      return res.status(200).json(data);
    }catch(err){
      logger.error(`Get single request Error : ${err}`);
      return res.status(500).json('Oops');
    }
  }

  async userRequests(req, res){
    try{
      const {userid} = req.params;
      const {limit, offset} = req.query;
      const data = await getUserRequests(userid, limit, offset);
      // console.log('Get All!: \n', data);
      return res.status(200).json(data);
    }catch(err){
      logger.error(`Get User Requests Error : ${err}`);
      return res.status(500).json('Oops');
    }
  }

  async searchLocation(req, res) {
    try{
      const {searchQuery} = req.query;
      const resp = await searchLocation(String(searchQuery));
      return res.status(200).json(resp);
    }catch(err){
      return res.status(500).json('Ooops');
    }
  }

  async create(req, res){
    try{
      // upload image
      const result = await cloudinary.uploader.upload(req.body.productImageUrl, {
        chunk_size: 2000000,
        resource_type: 'image'
      }); // 2MB max

      const {
        productTitle, productDesc, productUnitPrice,
        productQuantity, deliverFrom, deliverTo,
        deliverBefore, productLink, productSize
      } = req.body;
      const user_id = req.session.userid;

      const urlSlug = nanoid(30);
      await createRequest(
        urlSlug,
        productUnitPrice,
        result.secure_url,
        productDesc,
        productQuantity,
        productLink,
        user_id,
        deliverBefore,
        productTitle,
        deliverTo,
        deliverFrom,
        productSize,
      );
      return res.status(200).json({
        slug: urlSlug,
        success: true
      });
    }catch(err){
      logger.error(`Create Request Error: ${err}`);
      return res.status(500).json({ success: false });
    }
  }

  async delete(req, res){
    try{
      const {request_id} = req.body;
      await deleteRequest(request_id);
    }catch(err){
      logger.error(`Delete Request Error: ${err}`);
      return res.status(500).json('Ooops');
    }
  }
  // async myRequests(req, res){
  //   try{
  //     const {limit, offset} = req.query;
  //     const data = await getMyRequests(req.session.userid, limit, offset);
  //     // console.log('Get All!: \n', data);
  //     return res.status(200).json(data);
  //   }catch(err){
  //     logger.error(`Get my requests Error : ${err}`);
  //     return res.status(500).json('Oops');
  //   }
  // }
}

export default new Requests();
