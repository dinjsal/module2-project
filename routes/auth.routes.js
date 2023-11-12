const router = require("express").Router();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("../models/User.model");
const { isLoggedOut } = require("../middleware/route.guard");

// GET routes

// isLoggedOut: auth user shouldn't see the profile page
// redirected to login page

router.get("/signup", (req, res, next) => {
  res.render("auth/signup");
});

router.get("/login", isLoggedOut, (req, res, next) => {
  res.render("auth/login");
});


router.get("/booking", (req, res, next) => {
  res.render("auth/booking");
});

// POST routes
router.post("/signup", async (req, res, next) => {
  const { firstName, lastName, birthDate, email, password } = req.body;
  try {
    // regex test for passwords

    const regex = /(?=(.*\d){2})/;
    // const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    if (!regex.test(req.body.password)) {
      res.status(500).render("auth/signup", {
        errorMessage: "Password needs to have at least 2 digits.",
        // "Password needs to have at least 8 chars and must contain at least one number, one lowercase and one uppercase letter.",
      });
      return;
    }

    //check if user exists in the database
    const userExists = await User.findOne({ email: req.body.email });
    if (userExists) {
      res.render("auth/signup", { errorMessage: "Email already exists" });
      return;
    } else {
      //hash password
      const salt = bcrypt.genSaltSync(10);
      const hashedPassword = bcrypt.hashSync(req.body.password, salt);

      //create new user
      const newUser = new User({
        firstName: {
          type: String,
          required: [true, "Please enter your first name"],
        },

        lastName: {
          type: String,
          required: [true, "Please enter your last name"],
        },
        birthDate,
        email,
        password: hashedPassword,
      });

      //save this new user
      await newUser.save();

      //redirect to this page
      res.redirect("/auth/login");
    }
  } catch (error) {
    next(error);
  }
});

// Login POST route, when existing User logs in
router.post("/login", async (req, res, next) => {
  // console.log("SESSION =====> ", req.session);
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      res.render("auth/login", {
        errorMessage:
          "Please try again. Login credentials not found/did not match",
      });
      // if it exists, check the pwd
    } else {
      // always returns a boolean
      const passwordCorrect = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      // if password's correct

      if (passwordCorrect) {
        // // will only be created if the password is a match
        // // ***** SAVE THE USER IN THE SESSION *****
        req.session.currentUser = user;
        res.redirect("/profile");
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

// logout route
router.post("/logout", (req, res, next) => {
  //wrap this in a try catch
  req.session.destroy((err) => {
    if (err) {
      next(err);
    } else {
      res.render("auth/login", {
        errorMessage: "Logout successful",
      });
    }
  });
});





module.exports = router;
