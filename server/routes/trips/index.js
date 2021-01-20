import express from "express";
const router = express.Router();
import UserController from "../../app/controllers/auth/User";
import TripsController from "../../app/controllers/Trips";

router.post(
  "/trip/create",
  UserController.auth,
  TripsController.create
);


export default router;
