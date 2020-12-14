import express from "express";
const router = express.Router();
import UserController from "../../app/controllers/auth/User";
import RequestsController from "../../app/controllers/Requests";
// import imageUploader from '../../utils/imageUploader';

// search for countries or cities
router.get(
  "/search/location",
  UserController.auth,
  RequestsController.searchLocation
);

router.post(
  "/request/create",
  UserController.auth,
  RequestsController.create
);

export default router;
