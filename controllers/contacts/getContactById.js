const { Contact } = require("../../models/contactSchema");

const { httpError } = require("../../helpers");

const getContactById = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await Contact.findById(contactId);
  if (!result) {
    throw httpError(404, "Not found");
  }
  res.json(result);
};

module.exports = getContactById;