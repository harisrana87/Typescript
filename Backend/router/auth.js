const express = require("express");
const crypto = require("crypto");
const jwt = require('jsonwebtoken');

const router = express.Router();
const User = require("../Model/userSchema");

router.get("/", (req, res) => {
  res.send("Hello");
});

router.post("/register", async (req, res) => {
  console.log(req.body);
  const { fname, lname, email, password } = req.body;

  if (!fname || !lname || !email || !password) {
    return res.status(422).json({ error: "Fill all the fields properly" });
  }

  try {
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(422).json({ error: "Email already exists" });
    } else {
      // Using basic hashing with the crypto module
      const hashedPassword = crypto.createHash('sha256').update(password).digest('hex');

      const user = new User({ fname, lname, email, password: hashedPassword });
      await user.save();

      res.status(201).json({ message: "User registered successfully" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
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

    // Using basic hashing with the crypto module for comparison
    const hashedPassword = crypto.createHash('sha256').update(password).digest('hex');

    if (hashedPassword !== userLogin.password) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    // Replace 'your_secret_key_here' with your actual secret key
    const token = jwt.sign({ _id: userLogin._id }, 'your_secret_key_here');

    res.cookie("jwtoken", token, {
      expires: new Date(Date.now() + 25892000000),
      httpOnly: true,
    });

    res.json({ message: "Successfully logged in" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});
router.post('/reset-password', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user in the database based on the email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Update the user's password
    user.password = password;
    await user.save();

    // Password updated successfully, send a response
    res.status(200).json({ message: 'Password changed successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
router.delete('/delete-user', async (req, res) => {
  const { email } = req.body;

  try {
    // Find the user in the database based on the email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Delete the user
    await user.deleteOne();

    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
