import express from "express";
const router = express.Router();
import UserController from "../../app/controllers/auth/User";
import TripsController from "../../app/controllers/Trips";

router.post(
  "/trip/create",
  UserController.auth,
  TripsController.create
);

router.get(
  "/trips/user/:userid",
  UserController.auth,
  TripsController.userTrips
);


export default router;
