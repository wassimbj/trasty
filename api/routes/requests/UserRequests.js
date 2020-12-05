import express from "express";
const router = express.Router();
import UserController from "../../app/controllers/auth/User";
import RequestsController from "../../app/controllers/Requests";

// search for countries or cities
router.get(
  "/search/location",
  UserController.auth,
  RequestsController.searchLocation
);

export default router;
