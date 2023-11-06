const express = require('express');
const router = express.Router();

router.get("/register", (req, res, next) => {
    res.render("auth/register"); // auth folder, register.hbs
  });


module.exports = router;
