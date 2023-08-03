import calendar from '../assets/icons/calendar.png'
import home from '../assets/icons/home.png'
const Navbar = () => {
    return (
        <nav>
            <a href="/">
                <img src={home} alt="home button" />
            </a>
            <a href="/schedule">
                <img src={calendar} alt="calendar button" />
            </a>
        </nav>
    )
}
export default Navbar