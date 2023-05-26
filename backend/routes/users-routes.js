//middleware that is responsible for routes related to places

//third-party imports
const express = require("express"); //if you need express in more than one file you will need to declare it
const { check } = require("express-validator");

 
const usersControllers = require("../controllers/users-controllers");

const router = express.Router(); //special feature that is the router executed like a function

// router.get("/", usersControllers.getUsers);

router.post(
  "/signup",
  check("name").not().isEmpty(),
  check("password").not().isEmpty(),
  check("email").normalizeEmail().isEmail(),
  usersControllers.signup //this is a callback function to check for validation 
);

router.post("/login", usersControllers.login);

module.exports = router;
