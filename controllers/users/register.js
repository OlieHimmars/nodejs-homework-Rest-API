const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");
require("dotenv").config();
const { User } = require("../../models/userSchema");
const idGenerate = require("bson-objectid");

const { httpError, sendEmail } = require("../../helpers");

const { BASE_URL } = process.env;

const register = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    throw httpError(409, "Email in use");
  }

  const hashPassword = await bcrypt.hash(password, 10);
  const avatarURL = gravatar.url(email);
  const verificationToken = idGenerate();
  const newUser = await User.create({
    name,
    email,
    password: hashPassword,
     avatarURL,
    verificationToken,
  });

  const mail = {
    to: email,
    subject: "Verify email",
    html: `<a target="_blank" href="${BASE_URL}/api/auth/verify/${verificationToken}">Click to verify</a>`,
  };

  await sendEmail(mail);

  res.status(201).json({
    name: newUser.name,
    email: newUser.email,
  });
};

module.exports = register;