require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.set("strictQuery", true);

mongoose.connect(process.env.MONGODB_URI, 
	{ 
		useNewUrlParser: true, 
		useUnifiedTopology: true 
	}).then(() => {	
		console.log("Connected to MongoDB") 
	}).catch((err) => { 
		console.error("Failed to connect to MongoDB", err) 
	});

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.listen(PORT, () => { console.log(`Server is connected at http://localhost:${PORT}`) });