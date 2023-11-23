const router = require("express").Router();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("../models/User.model");
const Passenger = require("../models/Passenger.model");
const session = require("express-session");
const { isLoggedIn } = require("../middleware/route.guard");

const { isLoggedOut } = require("../middleware/route.guard");

const uploader = require("../middleware/cloudinary.config");


// GET routes

// isLoggedOut: auth user shouldn't see the profile page
// redirected to login page
router.get("/", (req, res, next) => {
  res.render("/index");
});

router.get("/login", isLoggedOut, (req, res, next) => {
  res.render("auth/login");
});

router.get("/signup", (req, res, next) => {
  res.render("auth/signup");
});

// router.get("/profile", (req, res, next) => {
//   const loggedUser = req.session.currentUser;

//   console.log("loggedUser:", loggedUser);
//     res.render("/profile", { loggedUser});
// });

router.get("/booking", (req, res, next) => {
  res.render("auth/booking");
});

//User can Update and Delete the booking here + create a post route
// router.get("/booking-confirmation", (req, res, next) => {
//   res.render("auth/booking-confirmation");
// });

router.get("/passenger-info", (req, res, next) => {
  res.render("auth/passenger-info");
});

router.get("/payment", (req, res, next) => {
  res.render("auth/payment");
});

router.get("/payment-confirmation", (req, res, next) => {
  res.render("auth/payment-confirmation");
});

router.get("/crew", (req, res, next) => {
  res.render("auth/crew");
});

router.get("/our-fleet", (req, res, next) => {
  res.render("auth/our-fleet");
});

router.get("/passenger-details", (req, res, next) => {
  Passenger.find()
    .then((response) => {
      res.render("auth/passenger-details", { details: response });
    })
    .catch((err) => console.log(err));
});

router.get("/passenger-details/:passengerId", async (req, res) => {
  try {
    const passenger = await Passenger.findById(req.params.passengerId);
    console.log(passenger);
    if (passenger) {
      res.render("auth/passenger-details", { passenger: passenger });
    } else {
      res.send("Passenger not found");
    }
  } catch (error) {
    res.send("Error retrieving passenger information");
  }
});

router.get("/passenger-details/:id/delete", (req, res, next) => {
  res.render("auth/delete-booking");
});

// POST routes
router.post("/signup", uploader.single('imageUrl'),async (req, res, next) => {
  const { firstName, lastName, birthDate, email, password } = req.body;
  console.log('file is:', req.file)
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

    if (!req.file) {
      console.log("there was an error uploading the file")
      next(new Error('No file uploaded!'));
    
      return;
    }

    const imageUrl = req.file.path;

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
        firstName,
        lastName,
        birthDate,
        email,
        password: hashedPassword,
        profilePic: imageUrl,
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

      if (passwordCorrect) {
        const userObject = user.toObject();
        // add the user to the session object
        //ellipsis is a spread operator, for the object to be expanded into individual elements
        req.session.currentUser = {
          ...userObject,
          profilePic: userObject.profilePic
        }

        req.session.save((err) => {
          if (err) {
            next(err);
          } else {
            console.log("Session is saved", req.session);
            res.redirect("/profile");
          }
        });
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

//To create a new passenger
router.post("/passenger-info", async (req, res, next) => {
  try {
    const newPassenger = new Passenger(req.body);
    await newPassenger.save();
    res.redirect("/auth/payment");
  } catch (err) {
    console.error("Error saving new passenger:", err);
  }
});

// delete a booking/passenger
router.post("/passenger-details/:id/delete", (req, res, next) => {
  const passengerId = req.params.id;
  Passenger.findByIdAndDelete(passengerId)
    .then(() => res.redirect("/auth/booking"))
    .catch((error) => next(error));
});

// update passenger info page

module.exports = router;
