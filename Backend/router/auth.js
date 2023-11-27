const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();
const jwt = require('jsonwebtoken');

const User = require("../Model/userSchema");

router.get("/", (req, res) => {
  res.send("Hello");
});

router.post("/register", async (req, res) => {
  console.log(req.body);
  const { fname,lname, email, password } = req.body;

  if (!fname || !lname || !email || !password) {
    return res.status(422).json({ error: "Fill all the fields properly" });
  }

  try {
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(422).json({ error: "Email already exists" });
    } else {
      const user = new User({ fname,lname, email, password });
      await user.save();

      res.status(201).json({ message: "User registered successfully" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Please fill in all the fields" });
    }

    const userLogin = await User.findOne({ email: email });

    if (!userLogin) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const isPasswordMatch = await bcrypt.compare(password, userLogin.password);

    if (!isPasswordMatch) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    // Generate an authentication token if the credentials match
    const token = jwt.sign({ _id: userLogin._id }, process.env.SECRET_KEY);

    res.cookie("jwtoken", token, {
      expires: new Date(Date.now() + 25892000000),
      httpOnly: true,
    });

    res.json({ message: "Successfully logged in" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;