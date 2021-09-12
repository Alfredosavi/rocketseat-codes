import { Router } from "express";

import { CreateTagController } from "./controllers/CreateTagController";
import { CreateUserController } from "./controllers/CreateUserController";
import { AuthUserController } from "./controllers/AuthUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";

import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { ListUserSendComplimentsController } from "./controllers/ListUserSendComplimentsController";
import { ListUserReceiveComplimentsController } from "./controllers/ListUserReceiveComplimentsController";

import { ListTagController } from "./controllers/ListTagController";
import { ListUserController } from "./controllers/ListUserController";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authUserController = new AuthUserController();
const createComplimentController = new CreateComplimentController();

const listUserSendComplimentsController =
  new ListUserSendComplimentsController();
const listUserReceiveComplimentsController =
  new ListUserReceiveComplimentsController();

const listTagController = new ListTagController();
const listUserController = new ListUserController();

router.post("/users", createUserController.create);
router.post(
  "/tags",
  ensureAuthenticated,
  ensureAdmin,
  createTagController.create
);
router.post("/session", authUserController.create);
router.post(
  "/compliments",
  ensureAuthenticated,
  createComplimentController.create
);

router.get(
  "/users/compliments/send",
  ensureAuthenticated,
  listUserSendComplimentsController.list
);

router.get(
  "/users/compliments/receive",
  ensureAuthenticated,
  listUserReceiveComplimentsController.list
);

router.get("/tags", ensureAuthenticated, listTagController.list);
router.get("/users", ensureAuthenticated, listUserController.list);

export { router };
