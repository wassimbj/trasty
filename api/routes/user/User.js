import express from "express";
const router = express.Router();
import UserController from "../../app/controllers/auth/User";

// get logged in user info
router.get(
  "/me",
  UserController.auth,
  UserController.me
);

export default router;
