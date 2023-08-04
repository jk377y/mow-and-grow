import { useState } from "react";
import styled from "styled-components";
import { fetchSignup } from "../utils/fetchSignup";

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	padding: 2rem;
	line-height: 1;

	& input {
		font-size: 1.15rem;
		padding: 0.25rem;
		color: var(--color2);
		text-align: center;
		border: 2px inset var(--color2);
		border-radius: 5px;
	}

	& button {
		width: 50%;
		font-size: 1rem;
		padding: 0.25rem;
		color: var(--color2);
		background-color: var(--color3);
		margin: 2rem 0 0 0;
		border: 3px inset transparent;
		border-radius: 5px;
		cursor: pointer;
	}

    & button:hover {
        background-color: var(--hover);
    }

    & button:active {
        border: 3px inset var(--windowColor);
    }
`;

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
        <StyledForm id="form" onSubmit={handleSignupSubmit}>
            <h3>Signup</h3>
            <input type="text" id="signup_fName" name="signup_fName" placeholder="First Name" value={fName} onChange={(e) => setFName(e.target.value)} required />
            <input type="text" id="signup_lName" name="signup_lName" placeholder="Last Name" value={lName} onChange={(e) => setLName(e.target.value)} required />
            <input type="text" id="signup_username" name="signup_username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
            <input type="password" id="signup_password" name="signup_password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <input type="email" id="signup_email" name="signup_email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <button type="submit">Signup</button>
        </StyledForm>
    );
};
export default Signup;