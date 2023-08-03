const router = require("express").Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const secretKey = process.env.JWT_SECRET_KEY;

router.post("/", async (req, res) => {
    try {
        const { fName, lName, username, password, email } = req.body;
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: "Username already exists" });
        }
        const existingEmail = await User.findOne({ email });
        if (existingEmail) {
            return res.status(400).json({ message: "Email already exists" });
        }
        const newUser = new User({ fName, lName, username, password, email });
        await newUser.save();
        const token = jwt.sign({ username: newUser.username, exp: Math.floor(Date.now() / 1000) + (60 * 15) }, secretKey);
        return res.status(201).json({ message: "User created successfully", token, fName: newUser.fName, lName: newUser.lName, email: newUser.email, redirect: "/schedule" });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal server error" });
    }
});

module.exports = router;