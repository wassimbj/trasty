import storage from '../config/cloudinary';
import multer from 'multer';

const imgUploader = multer({
  storage: storage
});

export default imgUploader;
