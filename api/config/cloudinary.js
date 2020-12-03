import cloudinary from 'cloudinary';
import cloudinaryStorage from 'multer-storage-cloudinary';
import constants from '../constants';

// Cloudinary config
cloudinary.config({
    cloud_name: constants.CLOUDINARY_CLOUD_NAME,
    api_key: constants.CLOUDINARY_API_KEY,
    api_secret: constants.CLOUDINARY_API_SECRET
});

const storage = cloudinaryStorage({
    cloudinary: cloudinary,
    folder: "products",
    allowedFormats: ["jpg", "png", 'jpeg'],
    // transformation: [{ width: 500, height: 500, crop: "limit" }]
});

export default storage;
