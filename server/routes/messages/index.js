import express from "express";
const router = express.Router();
import UserController from "../../app/controllers/auth/User";
import MessagesController from "../../app/controllers/Messages";

router.get(
  "/messages/chatrooms",
  UserController.auth,
  MessagesController.chatRooms
);

router.post(
  "/messages/create",
  UserController.auth,
  MessagesController.create
);

router.get(
  "/messages/get/:roomId",
  UserController.auth,
  MessagesController.getAll
);


router.get(
  "/messages/details/:roomId",
  UserController.auth,
  MessagesController.details
);


export default router;
