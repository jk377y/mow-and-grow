import styled from "styled-components";

const StyledLogoutButton = styled.button`
	width: 100px;
	font-size: 1rem;
	color: var(--color2);
	background-color: var(--color3);
	border: 3px inset transparent;
	border-radius: 5px;
	cursor: pointer;
	&:hover {
		background-color: var(--hover);
	}
    &:active {
        border: 3px inset var(--windowColor);
    }
`;

const LogoutButton = () => {
	const handleLogout = () => {
		sessionStorage.clear();
		window.location.href = "/";
	};
	return (
		<StyledLogoutButton type="button" onClick={handleLogout}>
			Logout
		</StyledLogoutButton>
	);
};
export default LogoutButton;
