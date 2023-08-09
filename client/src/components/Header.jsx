import styled from "styled-components";
import Navbar from "./Navbar";

const StyledHeader = styled.header`
	display: flex;
	justify-content: flex-end;
	background-image: url(../src/assets/images/header-background.avif);
	background-repeat: no-repeat;
	background-size: auto 100%;
	background-position: top left;
	height: auto;
	width: 2560px;
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
