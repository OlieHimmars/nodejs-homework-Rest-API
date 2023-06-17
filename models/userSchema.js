const { Schema, model } = require("mongoose");

const Joi = require("joi");

const { handleSaveErrors } = require("../helpers");
const subscriptionVariants = ["starter", "pro", "business"];

const userSchema = new Schema(
  {
    password: {
      type: String,
      required: [true, "Set password for user"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    subscription: {
      type: String,
      enum: subscriptionVariants,
      default: "starter",
    },
    token: String
  },
  {
    versionKey: false,
    timestamps: true,
  }
);


userSchema.post("save", handleSaveErrors);

const registerSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().min(4).required(),
});

const loginSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string()
    .min(4)
    .messages({ "string.min": "Password can't be less then 4 symbols" })
    .required(),
});

const subscriptionSchema = Joi.object({
  subscription: Joi.string()
    .valid(...subscriptionVariants)
    .messages({ "string.valid": "Incorrect type" })
    .required(),
});

const schemas = {
  registerSchema,
  loginSchema,
  subscriptionSchema,
};

const User = model("user", userSchema);

module.exports = { User, schemas };