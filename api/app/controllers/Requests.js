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

  async create(req, res){
    upload.single('productImage')
    (req, res, async (fileError) => {
        try{
          console.log(req.body);
            // Error occured
            if (fileError !== undefined) {
                // console.log('File_Error: ', fileError)
                if (fileError.code == 'LIMIT_FILE_SIZE')
                    return res.status(400).json('Image must be at least 2MB');
                else
                    return res.status(400).json(fileError)

            }
          }catch(err){
            console.log(err);
            return res.status(500).json('Ooops');
          }
    });
  }

}

export default new Requests();
