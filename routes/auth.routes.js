const router = require("express").Router();
const Destination = require("../models/Destination.model");
const mongoose = require("mongoose");

// GET routes

router.get("/register", (req, res, next) => {
    res.render("auth/register"); // auth folder, register.hbs
});

// only made login.hbs, now it's still empty

router.get("/login", (req, res, next) => {
    res.render("auth/login"); // auth folder, login.hbs
});

// POST routes
router.post("/register", (req, res, next) => {
    res.render("auth/register"); // auth folder, register.hbs
});

module.exports = router;
