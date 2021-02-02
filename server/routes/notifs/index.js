import express from "express";
const router = express.Router();
import UserController from "../../app/controllers/auth/User";
import NotifsController from "../../app/controllers/Notifications";

router.get(
  "/notifs/all",
  UserController.auth,
  NotifsController.getAll
);

export default router;
