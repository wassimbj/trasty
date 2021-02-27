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

router.get(
  "/messages/check/:roomId",
  UserController.auth,
  MessagesController.roomExists
);

router.post(
  "/room/delete",
  UserController.auth,
  MessagesController.delete
);

export default router;
