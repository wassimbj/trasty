import db from '../../database/init';

async function deleteRequest(request_id){
  try{
    await db.query(`DELETE FROM requests WHERE id = $1`, [request_id]);
  }catch(err){
    throw new Error(err);
  }
}

export default deleteRequest;
