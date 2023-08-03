const connection = require("../config/connection.js");
const User = require("../models/User");
const userseeds = require('./users.json');

connection.then(async () => {
    try {
        await User.deleteMany({});
        console.log("All users removed from database!");
        await User.create(userseeds);
        console.log("All seed users added to database!");
        console.log("Task complete!");
        process.exit(0);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
});