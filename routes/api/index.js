const express = require("express");
const router = express.Router();
const { isValidId } = require("../../helpers");
const { authenticate } = require("../../helpers");

const { validateContact } = require("../../controllers");

const {
  addContact,
  getAllContact,
  getContactById,
  removeContact,
  updateById,
  updateFavorite,
} = require("./contactOperation");

router.get("/", getAllContact);
router.get("/:contactId", isValidId, getContactById);
router.post("/", authenticate, validateContact, addContact);
router.put("/:contactId", isValidId, updateById);
router.patch("/:contactId/favorite", isValidId, updateFavorite);
router.delete("/:contactId", isValidId, removeContact);

module.exports = router;