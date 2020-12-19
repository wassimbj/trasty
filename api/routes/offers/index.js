import express from "express";
const router = express.Router();
import UserController from "../../app/controllers/auth/User";
import OffersController from "../../app/controllers/Offers";
// import imageUploader from '../../utils/imageUploader';

// search for countries or cities
router.post(
  "/offer/create",
  UserController.auth,
  OffersController.create
);

export default router;
