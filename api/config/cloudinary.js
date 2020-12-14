import cloudinary from 'cloudinary';
// import { CloudinaryStorage }  from 'multer-storage-cloudinary';
import constants from '../constants';

// Cloudinary config
cloudinary.v2.config({
    cloud_name: constants.CLOUDINARY_CLOUD_NAME,
    api_key: constants.CLOUDINARY_API_KEY,
    api_secret: constants.CLOUDINARY_API_SECRET,
});

// const storage = new CloudinaryStorage({
//     cloudinary: cloudinary,
//     params: {
//       folder: "products",
//       allowedFormats: ["jpg", "png", 'jpeg'],
//     }
//     // transformation: [{ width: 500, height: 500, crop: "limit" }]
// });

export default cloudinary;
