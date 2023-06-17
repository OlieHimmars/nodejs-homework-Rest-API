const listContacts = require("./getAllContact");
const getContactById = require("./getContactById");
const addContact = require("./addContact");
const deleteContact = require("./removeContact");
const updateContact = require("./updateContactById");
const updateStatusContact = require("./updateFavoriteContact");

module.exports = {
  listContacts,
  getContactById,
  addContact,
  deleteContact,
  updateContact,
  updateStatusContact,
};