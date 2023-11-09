const router = require("express").Router();
const Destination = require("../models/Destination.model");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("../models/User.model");

// GET routes

router.get("/login", (req, res, next) => {
  res.render("auth/login");
});

router.get("/signup", (req, res, next) => {
  res.render("auth/signup");
});

// POST routes
router.post("/signup", async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  if (req.body.email === "" || req.body.password === "") {
    res.render("auth/signup", {
      errorMessage:
        "All fields are mandatory. Please provide your first and last name, birth date, email and password.",
    });
    return;
  }

  // regex test for passwords

  const regex = /(?=(.*\d){2})/;
  if (!regex.test(req.body.password)) {
    res.status(500).render("auth/signup", {
      errorMessage: "Password needs to have at least 2 digits.",
      // "Password needs to have at least 8 chars and must contain at least one number, one lowercase and one uppercase letter.",
    });
    return;
  }

  try {
    //check if user exists in the database
    const userExists = await User.findOne({ email });
    if (userExists) {
      res.render("auth/signup", { errorMessage: "Email already exists" });
      return;
    }
    //hash password
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    //create new user
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      birthDate: req.body.birthDate,
    });

    //save this new user
    await newUser.save();

    res.render("auth/login");
  } catch (error) {
    next(error);
  }
});

// Login POST route, when existing User logs in
router.post("/login", async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (user) {
      const passwordCorrect = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (passwordCorrect) {
        res.redirect("/auth/profile");
      } else {
        res.render("auth/login", {
          errorMessage: "Incorrect credentials, please try again",
        });
      }
    }
  } catch (error) {
    next(error);
  }
});

router.get("/profile", (req, res, next) => {
  res.render("auth/profile");
});

module.exports = router;
