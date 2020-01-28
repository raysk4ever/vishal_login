const bcrypt = require("bcrypt");
const _ = require("lodash");
const { User } = require("../modules/user");
const mongoose = require("mongoose");
const express = require("express");
const Joi = require("joi");

const router = express.Router();

router.get("/", (req, res)=>{
  res.render("login")
})

router.post("/", async (req, res) => {
  console.log(`req.body`, req.body)
  res.send(req.body)
  // const { error } = validate(req.body);
  // if (error) return res.status(400).send(error.details[0].message);

  // let user = await User.findOne({ email: req.body.email });
  // if (!user) return res.status(400).send("invalid email or password..");

  // const validPassword = await bcrypt.compare(req.body.password, user.password);
  // if (!validPassword) return res.status(400).send("invalid email or password..");

  // const token = user.generateAuthToken();
  // // res.send(token);
  // res.render("home")
});

function validate(req) {
  const schema = {
    email: Joi.string().min(3).max(255).required().email(),
    password: Joi.string().min(3).max(1024).required()
  };
  return Joi.validate(req, schema);
}

module.exports = router;
