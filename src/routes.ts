import { Router } from "express";

import { CreateTagController } from "./controllers/CreateTagController";
import { CreateUserController } from "./controllers/CreateUserController";
import { AuthUserController } from "./controllers/AuthUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";

import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authUserController = new AuthUserController();
const createComplimentController = new CreateComplimentController();

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

export { router };
