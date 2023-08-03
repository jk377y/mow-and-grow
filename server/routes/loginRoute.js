const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secretKey = process.env.JWT_SECRET_KEY;

router.post("/", async (req, res) => {
	try {
		const { username, password } = req.body;
		const user = await User.findOne({ username });
		if (!user) {
			return res.status(401).json({ message: "User Not Signed Up" });
		}
		const isPasswordCorrect = await bcrypt.compare(password, user.password);
		if (!isPasswordCorrect) {
			return res.status(401).json({ message: "Wrong password" });
		}
		const token = jwt.sign({ username: user.username, exp: Math.floor(Date.now() / 1000) + (60 * 15) }, secretKey);
		return res.status(200).json({ message: "Login successful", token, fName: user.fName, lName: user.lName, email: user.email, redirect: "/schedule" });
	} catch (err) {
		console.log(err);
		return res.status(500).json({ message: "Internal server error" });
	}
});

module.exports = router;