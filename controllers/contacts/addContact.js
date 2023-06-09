const { createError, postContactJoiSchema } = require("../../helpers");
const { Contact } = require("../../models/contactSchema");

const validateContact = (req, res, next) => {
  const { error } = postContactJoiSchema.validate(req.body);
  if (error) {
    throw createError(400, "JoiError. Missing required field");
  }
  next();
};

const addContact = async (req, res, next) => {
  try {
    const { _id } = req.user;
    const contact = await Contact.create({ ...req.body, owner: _id });
    if (!contact) {
      throw createError(404);
    }
    res.status(201).json(contact);
  } catch (error) {
    if (error.status === 409) {
      res.status(409).json({ message: "Email in use" });
    } else {
      next(error);
    }
  }
};

module.exports = { validateContact, addContact };

