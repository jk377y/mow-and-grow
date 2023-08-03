const router = require("express").Router();

// const homeRoute = require("./homeRoute");
const loginRoute = require("./loginRoute");
const SignupRoute = require("./signupRoute");

// router.use("/", homeRoute);
router.use("/login", loginRoute);
router.use("/signup", SignupRoute);

module.exports = router;