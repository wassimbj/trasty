import express from "express";
const router = express.Router();
import UserController from "../../app/controllers/auth/User";
import RequestsController from "../../app/controllers/Requests";

// search for countries or cities
router.get(
  "/search/location",
  RequestsController.searchLocation
);

router.post(
  "/request/create",
  UserController.auth,
  RequestsController.create
);

router.post(
  "/request/delete",
  UserController.auth,
  RequestsController.delete
);

router.get(
  "/requests/all",
  RequestsController.getAll
);

router.get(
  "/request/details/:slug",
  RequestsController.getSingle
);

// get user (profile) requests
router.get(
  '/requests/user/:userid',
  RequestsController.userRequests
);

export default router;
