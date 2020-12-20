import express from "express";
const router = express.Router();
import UserController from "../../app/controllers/auth/User";
import OffersController from "../../app/controllers/Offers";

router.post(
  "/offer/create",
  UserController.auth,
  OffersController.create
);

router.post(
  "/offer/delete",
  UserController.auth,
  OffersController.delete
);

export default router;
