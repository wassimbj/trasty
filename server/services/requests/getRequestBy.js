import db from '../../database/init';

export default async function getRequestBy(requestId){
  try{
    const { rows } = await db.query(`
      SELECT request_by FROM requests WHERE id = $1
    `, [requestId]);
    return rows[0].request_by;
  }catch(err){
    throw new Error(err);
  }

}
