import styled from "styled-components";
import calendar from "../assets/icons/calendar.png";
import home from "../assets/icons/home.png";

const StyledNav = styled.nav`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 2rem 2rem 0 0;
	gap: 0.5rem;

	& a img {
		width: 35px;
		height: 35px;
		transition: all ease 250ms;
	}

	& a img:hover {
		transform: scale(1.2);
	}

	@media screen and (min-width: 600px) {
		flex-direction: row;
		margin: 0 2rem 0 0;
		gap: 2rem;
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
