const register = require("./register");
const login = require("./login");
const getCurrent = require("./current");
const logOut = require("./logout");
const subscription = require("./subscription");
const updateAvatar = require("./updateAvatar");
const verify = require("./verify");
const resendEmail = require("./resendEmail");

module.exports = {
  register,
  verify,
  login,
  getCurrent,
  logOut,
  subscription,
  updateAvatar,
  resendEmail,
};