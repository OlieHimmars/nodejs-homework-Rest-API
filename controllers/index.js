const addContact = require("./contacts/addContact");
const getAllContact = require("./contacts/getAllContact");
const getContactById = require("./contacts/getContactById");
const updateContactById = require("./contacts/updateContactById");
const updateFavoriteContact = require("./contacts/updateFavoriteContact");
const removeContact = require("./contacts/removeContact");

const login = require("./users/login");
const getCurrent = require("./users/current");
const logout = require("./users/logout");
const signup = require("./users/register");

module.exports = {
  addContact,
  getAllContact,
  getContactById,
  updateContactById,
  updateFavoriteContact,
  removeContact,
  signup,
  login,
  getCurrent,
  logout,
};