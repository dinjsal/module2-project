const express = require("express");
const router = express.Router();
const { isLoggedIn } = require("../middleware/route.guard");
const Passenger = require("../models/Passenger.model");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});



//to render the profile page and
//to fetch the passenger information from the database

router.get('/profile', isLoggedIn, async (req, res, next) => {
  try {
    const loggedInUser = req.session.currentUser;
    const userId = loggedInUser._id;

    const passenger = await Passenger.findOne({ userId: userId }); 
    console.log(passenger);

    if (passenger) {
      
      res.render('auth/profile', { loggedInUser, passenger });
    } else {
      
      res.render('auth/profile', { loggedInUser });
    }
  } catch (err) {
    console.error('Error fetching passenger information:', err);
    res.status(500).send('Error loading profile page');
  }
});










//to update the passenger info
router.post('/update-passenger/:id', async (req, res) => {
  try {
      const { id } = req.params; 
      const updateData = req.body; 

      // fetch adn update
      await Passenger.findByIdAndUpdate(id, updateData, { new: true });
      res.redirect('/profile');
      
  } catch (err) {
     
      console.error(err);
      res.status(500).send('Error updating passenger data.');
  }
});



router.get('/delete-passenger/:id', async (req, res) => {
  try {
      const { id } = req.params;
      await Passenger.findByIdAndDelete(id);
      
      res.redirect('/profile');
  } catch (err) {
      console.error(err);
      res.status(500).send('Error deleting passenger data.');
  }
});




module.exports = router;
