import searchLocation from '../../services/requests/searchLocation';

class Requests {

  async searchLocation(req, res) {
    try{
      const {searchQuery} = req.query;
      const resp = await searchLocation(String(searchQuery));
      return res.status(200).json(resp);
    }catch(err){
      return res.status(500).json('Ooops');
    }
  }

}

export default new Requests();
