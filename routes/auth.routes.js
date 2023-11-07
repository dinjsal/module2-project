const router = require("express").Router();
const Destination = require("../models/Destination.model");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("../models/User.model");

// GET routes

// only made login.hbs, now it's still empty
router.get("/login", (req, res, next) => {
  res.render("auth/login");
});

router.get("/signup", (req, res, next) => {
  res.render("auth/signup");
});

// // POST routes
// router.post("/signup", async (req, res, next) => {
//   const { firstName, lastName, email, password } = req.body;

//   try {
//     //check if user exists in the database
//     const userExists = await User.findOne({ email });
//     if (userExists) {
//       res.render("auth/register", { errorMessage: "Email already exists" });
//       return;
//     }
//     //hash password
//     const salt = bcrypt.genSaltSync(10);
//     const hashedPassword = bcrypt.hashSync(password, salt);

//     //create new user
//     const newUser = new User({
//       firstName,
//       lastName,
//       email,
//       password: hashedPassword,
//     });

//     //save this new user
//     await newUser.save();

//     res.send("User successfully registered");
//   } catch (error) {
//     next(error);
//   }
// });

// //Login POST route, when existing User logs in
// router.post("/login", async (req, res, next) => {
//   try {
//     const user = await User.findOne({ email: req.body.email });

//     if (user) {
//       const passwordCorrect = await bcrypt.compare(
//         req.body.password,
//         user.password
//       );
//       if (passwordCorrect) {
//         req.session.currentUser = user;
//         res.redirect("/profile");
//       } else {
//         res.render("auth/login", {
//           errorMessage: "Incorrect credentials, please try again",
//         });
//       }
//     }
//   } catch (error) {
//     next(error);
//   }
// });

// router.get("/profile", (req, res, next) => {
//   if (req.session.currentUser) {
//     res.render("profile", { user: req.session.currentUser });
//   } else {
//     // Redirect to login if not logged in
//     res.redirect("/login");
//   }
// });

module.exports = router;
