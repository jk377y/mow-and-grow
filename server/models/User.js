const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = new Schema(
    {
        fName: { 
            type: String, 
            trim: true, 
            required: "First Name is required" 
        },
        lName: { 
            type: String, 
            trim: true, 
            required: "Last Name is required" 
        },
        username: { 
            type: String, 
            unique: true, 
            trim: true, 
            required: "Username is required" 
        },
        email: {
            type: String,
            unique: true,
            trim: true,
            required: "Email address is required",
            match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please provide a valid email address"],
        },
        password: { 
            type: String, 
            trim: true, 
            required: "Password is required", 
            validate: [({ length }) => length >= 3, "Password should be longer."] },
    }
);
userSchema.pre("save", async function (next) {
    if (this.isNew || this.isModified("password")) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next();
});
userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};
const User = model("User", userSchema);
module.exports = User;