const express = require("express");
const validate = require("../middlewares/validate");
const {  tokenvalidation } = require("../validations");
const { tokenController } = require("../controllers");
const auth = require("../middlewares/auth");

const router = express.Router();

/** Create jsonwebtoken */
router.post(
  "/create-token",
  validate(tokenvalidation.generateToken),
    tokenController.generateToken
);

/** Verify token to get user details */
router.get(
  "/verify-token",
   auth(),
   tokenController.verifyToken);

module.exports = router;