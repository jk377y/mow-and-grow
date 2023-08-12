import styled from "styled-components";
import Navbar from "./Navbar";

// image background - background-color: #535353;
const StyledHeader = styled.header`
	display: flex;
	background-color: #535353;
	justify-content: space-between;
	align-items: center;
	height: 190px;
	width: 100%;
	border-bottom: 1px solid var(--windowColor);

	& img {
		margin: auto 0 auto 3rem;
		width: 170.67px;
		height: 100px;
		border-radius: 50%;
		border: 4px solid var(--windowColor);
	}

	& nav {
		margin-right: 3rem;
	}

	@media screen and (min-width: 600px) {
		& img {
			width: 256px;
			height: 150px;
			left: 3rem;
			border-radius: 50%;
			border: 4px solid var(--windowColor);
			overflow: hidden;
		}
`;

const Header = () => {
	return (
		<StyledHeader>
			<img src="/images/header-image.avif" alt="header image" />
			<Navbar />
		</StyledHeader>
	);
};

export default Header;
