import styled from "styled-components";
import Navbar from "./Navbar";

const StyledHeader = styled.header`
	background-image: url(../src/assets/images/header-background.avif);
	display: flex;
	justify-content: flex-end;
	width: 100vw;
	height: 150px;
	background-size: cover;
	border-bottom: 1px solid var(--windowColor);
`;

const Header = () => {
	return (
		<StyledHeader>
			<Navbar />
		</StyledHeader>
	);
};

export default Header;
