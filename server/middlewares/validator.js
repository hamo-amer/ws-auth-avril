const { body, validationResult } = require("express-validator");

const registerRules = [
  body("name", "Name is required!").notEmpty(),
  body("email", "enter a valid email").isEmail(),
  body("password", "password must be at least 6 characters").isLength({
    min: 6,
  }),
];
const loginRules = [
  body("email", "enter a valid email").isEmail(),
  body("password", "password is required").notEmpty(),
];
const validator = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
module.exports = { registerRules, validator, loginRules };
