const express = require("express");
const controllers = require("../../controllers/contacts");
const { controllerWrapper } = require("../../helpers");

const {
  validateBody,
  isValidId,
  authenticate,
} = require("../../middleware");

const { schemas } = require("../../models/contactSchema");
const router = express.Router();

router.get("/", authenticate, controllerWrapper(controllers.listContacts));

router.get(
  "/:contactId",
  authenticate,
  isValidId,
  controllerWrapper(controllers.getContactById)
);

router.post(
  "/",
  authenticate,
  validateBody(schemas.addSchema),
  controllerWrapper(controllers.addContact)
);

router.delete(
  "/:contactId",
  authenticate,
  isValidId,
  controllerWrapper(controllers.deleteContact)
);

router.put(
  "/:contactId",
  authenticate,
  isValidId,
  validateBody(schemas.addSchema),
  controllerWrapper(controllers.updateContact)
);

router.patch(
  "/:contactId/favorite",
  authenticate,
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  controllerWrapper(controllers.updateStatusContact)
);

module.exports = router;