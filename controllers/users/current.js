const { Contact } = require("../../models/contactSchema");

const getAllContact = async (req, res, next) => {
  try {
    const { _id: owner } = req.user;
    const { page = 1, limit = 20, favorite } = req.query;
    const skip = (page - 1) * limit;
    const filter = { owner };
    
    if (favorite) {
      filter.favorite = favorite === "true";
    }

    const result = await Contact.find(filter, "-createdAt -updatedAt", {
      skip,
      limit: Number(limit),
    }).populate("owner", "email name");

    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = getAllContact;
