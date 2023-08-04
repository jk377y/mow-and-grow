import { useState } from "react";
import styled from "styled-components";
import { fetchLogin } from "../utils/fetchLogin";

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

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const handleLoginSubmit = (e) => {
		e.preventDefault();
		const loginData = { username, password };
		fetchLogin(loginData);
	};
	return (
		<StyledForm id="login_form" onSubmit={handleLoginSubmit}>
			<h3>Login</h3>
			<input type="text" id="username" name="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
			<input type="password" id="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
			<button type="submit">Login</button>
			{/* <Link to="/pwreset">Forgot Password?</Link> */}
		</StyledForm>
	);
};
export default Login;
