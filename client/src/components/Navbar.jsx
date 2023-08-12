import styled from "styled-components";
import calendar from "../assets/icons/calendar.png";
import home from "../assets/icons/home.png";

const StyledNav = styled.nav`
	display: flex;
	flex-direction: column;
	gap: 1rem;

	& a img {
		width: 35px;
		height: 35px;
		transition: all ease 250ms;
	}

	& a img:hover {
		transform: scale(1.2);
		border: 2px solid var(--hover);
	}

	@media screen and (min-width: 600px) {
		flex-direction: row;
		gap: 0rem;

		& a img {
			width: 50px;
			height: 50px;
		}
	}
`;

const Navbar = () => {
	return (
		<StyledNav>
			<a href="/">
				<img src={home} alt="home button" />
			</a>
			<a href="/schedule">
				<img src={calendar} alt="calendar button" />
			</a>
		</StyledNav>
	);
};
export default Navbar;
