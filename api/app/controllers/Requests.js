import searchLocation from '../../services/requests/searchLocation';
import logger from '../../utils/logger';
import cloudinary from '../../config/cloudinary';
import db from '../../database/init';
import { nanoid } from 'nanoid';

class Requests {

  async getAll(req, res){

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
      // const deliverFromObj = {
      //   country_id: JSON.parse(deliverFrom).country_id,
      //   state_id: JSON.parse(deliverFrom).state_id || 0,
      //   city_id: JSON.parse(deliverFrom).city_id || 0,
      // }
      // const deliverToObj = {
      //   country_id: JSON.parse(deliverTo).country_id,
      //   state_id: JSON.parse(deliverTo).state_id || 0,
      //   city_id: JSON.parse(deliverTo).city_id || 0,
      // }
      await db.query(`
        INSERT INTO requests(
          slug
          ,product_unit_price
          ,product_img
          ,product_desc
          ,quantity
          ,product_link
          ,request_by
          ,deliver_before
          ,product_title
          ,deliver_to
          ,deliver_from
          ,product_size
        ) 
        VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)
      `, [
        nanoid(30),
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
      ]);
      return res.status(200).json('Done');
    }catch(err){
      logger.error(`Create Request Error: ${err}`);
      return res.status(500).json('Ooops');
    }
  }

}

export default new Requests();
