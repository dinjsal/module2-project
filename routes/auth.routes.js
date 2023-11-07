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
router.post("/signup", async (req, res, next) => {});

module.exports = router;
