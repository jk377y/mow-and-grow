import { useState } from "react";
import { Link } from "react-router-dom";
import { fetchLogin } from "../utils/fetchLogin";
const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const loginData = { username, password };
        fetchLogin(loginData);
    };
    return (
        <form id="login_form" className="login-form" onSubmit={handleLoginSubmit}>
            <h3>Login</h3>
            {/* <label htmlFor="username">Username:</label> */}
            <input type="text" id="username" name="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
            {/* <label htmlFor="password">Password:</label> */}
            <input type="password" id="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit">Login</button>
            {/* <Link to="/pwreset">Forgot Password?</Link> */}
            
        </form>
    );
};
export default Login;