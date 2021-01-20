import express from "express";
const router = express.Router();
import UserController from "../../app/controllers/auth/User";
import MessagesController from "../../app/controllers/Messages";

router.get(
  "/messages/chatrooms",
  UserController.auth,
  MessagesController.chatRooms
);


export default router;
