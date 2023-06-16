const { User } = require("../../models/userSchema");

const getCurrent = async (req, res) => {
  const { email } = req.user;

  const user = await User.findOne({ email });

  res.json({
    email,
    subscription: user.subscription,
  });
};

module.exports = getCurrent;