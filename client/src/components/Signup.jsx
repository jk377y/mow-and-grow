import { useState } from "react";
import { fetchSignup } from "../utils/fetchSignup";
const Signup = () => {
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const handleSignupSubmit = async (e) => {
        e.preventDefault();
        const signupData = { fName, lName, username, password, email };
        fetchSignup(signupData);
    };
    return (
        <form id="form" className="signup-form" onSubmit={handleSignupSubmit}>
            <h3>Signup</h3>
            {/* <label htmlFor="signup_fName">First Name:</label> */}
            <input type="text" id="signup_fName" name="signup_fName" placeholder="First Name" value={fName} onChange={(e) => setFName(e.target.value)} required />
            {/* <label htmlFor="signup_lName">Last Name:</label> */}
            <input type="text" id="signup_lName" name="signup_lName" placeholder="Last Name" value={lName} onChange={(e) => setLName(e.target.value)} required />
            {/* <label htmlFor="signup_username">Username:</label> */}
            <input type="text" id="signup_username" name="signup_username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
            {/* <label htmlFor="signup_password">Password:</label> */}
            <input type="password" id="signup_password" name="signup_password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            {/* <label htmlFor="signup_email">Email:</label> */}
            <input type="email" id="signup_email" name="signup_email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <button type="submit">Signup</button>
        </form>
    );
};
export default Signup;