const express = require("express");
const router = express.Router();
const { isLoggedIn } = require("../middleware/route.guard");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

// authenticated user already logged in, able to see the profile page
// no need/can't access /auth/login
router.get("/profile", isLoggedIn, (req, res, next) => {
  const loggedInUser = req.session.currentUser;
  res.render("auth/profile", { loggedInUser });
  // console.log(loggedInUser);
});

module.exports = router;
