import express from "express";
const router = express.Router();
import UserProfile from "../../app/controllers/UserProfile";

router.get(
  '/user/profile/:userid',
  UserProfile.getDetails
);

export default router;
