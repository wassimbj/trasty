import { nanoid } from 'nanoid';
import db from '../../database/init';
import logger from '../../utils/logger';

async function createRequest({
  productUnitPrice,
  productImage,
  productDesc,
  productQuantity,
  productLink,
  user_id,
  deliverBefore,
  productTitle,
  deliverTo,
  deliverFrom,
  productSize,
}){
  try{
    
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
      productImage,
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
  }catch(err){
    logger.error(`Get User Requests Error: ${err}`);
  }

}

export default createRequest;
