import { NavLink } from "react-router-dom";
import classes from './Navbar.module.css';
import { useSelector } from "react-redux";
const Navbar = () => {
    const movies = useSelector(state => state.movies.movies)

    return (
        <header >
            <nav >
                <ul>
                    <li>
                        <NavLink className={(navData) => navData.isActive ?  classes.active : classes.nav } to='/homepage'>Homepage</NavLink>
                    </li>
                    <li>
                        <NavLink className={(navData) => navData.isActive ?  classes.active : classes.nav } to='/movies'>Movies</NavLink>
                    </li>
                    <li>
                        <NavLink className={(navData) => navData.isActive ?  classes.active : classes.nav } to='/characters'>Characters</NavLink>
                    </li>

                </ul>
            </nav>
        </header>
    )
}

export default Navbar;