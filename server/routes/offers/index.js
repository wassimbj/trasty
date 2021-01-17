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

// offers for a signle request
router.get(
  "/offers/request/:request_id",
  UserController.auth,
  OffersController.requestOffers
);

// get my offers
router.get(
  "/offers/mine",
  UserController.auth,
  OffersController.myOffers
);


// get my offers
router.post(
  "/offer/accept",
  UserController.auth,
  OffersController.accept
);


export default router;
