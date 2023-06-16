const express = require("express");
const controllers = require("../../controllers/users");

const { controllerWrapper } = require("../../helpers");
const { validateBody, authenticate, upload } = require("../../middleware");
const { schemas } = require("../../models/userSchema");
const router = express.Router();

router.post(
  "/signup",
  validateBody(schemas.registerSchema),
  controllerWrapper(controllers.register)
);

router.post(
  "/login",
  validateBody(schemas.loginSchema),
  controllerWrapper(controllers.login)
);

router.get("/current", authenticate, controllerWrapper(controllers.current));

router.get("/logout", authenticate, controllerWrapper(controllers.logOut));

router.patch(
  "/users/:id/subscription",
  authenticate,
  validateBody(schemas.subscriptionSchema),
  controllerWrapper(controllers.subscription)
);

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  controllerWrapper(controllers.updateAvatar)
);

module.exports = router;