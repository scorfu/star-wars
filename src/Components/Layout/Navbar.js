import React, { useRef, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../features/starWarsAuthSlice";
import classes from '../../styles/styles/Navbar.module.css';
import starWarsImg from '../../styles/img/star-wars-logo.png'


const Navbar = () => {
    const isLoggedIn = useSelector(state => state.auth.token);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const menuRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current != event.target) {
                document.getElementById('hamburger_input').checked = false;
            };
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuRef]);

    const logoutHandler = () => {
        dispatch(logout());
        navigate('/auth');
    };

    return (
        <header >
            <img src={starWarsImg} alt="Star Wars logo"/>
            <input type="checkbox" className={`${classes.burger_shower} ${classes.hamburger_input}`} id='hamburger_input' />
            <label htmlFor='hamburger_input' id='hamburger_menu' className={classes.hamburger_menu} >
                <nav className={classes.sidebar_menu} ref={menuRef}>
                    <ul>
                        {!isLoggedIn && (
                            <li>
                                <NavLink className={(navData) => navData.isActive ? classes.active : classes.nav} to='/auth'>Login</NavLink>
                            </li>
                        )}
                        {isLoggedIn && (
                            <React.Fragment>
                                <li>
                                    <button onClick={logoutHandler}>Logout</button>
                                </li>
                                <li>
                                    <NavLink className={(navData) => navData.isActive ? classes.active : classes.nav} to='/homepage'>Homepage</NavLink>
                                </li>
                                <li>
                                    <NavLink className={(navData) => navData.isActive ? classes.active : classes.nav} to='/movies'>Movies</NavLink>
                                </li>
                                <li>
                                    <NavLink className={(navData) => navData.isActive ? classes.active : classes.nav} to='/characters'>Characters</NavLink>
                                </li>
                                <li>
                                    <NavLink className={(navData) => navData.isActive ? classes.active : classes.nav} to='/species'>Species</NavLink>
                                </li>

                                <li>
                                    <NavLink className={(navData) => navData.isActive ? classes.active : classes.nav} to='/planets'>Planets</NavLink>
                                </li>
                                <li>
                                    <NavLink className={(navData) => navData.isActive ? classes.active : classes.nav} to='/starships'>StarShips</NavLink>
                                </li>
                                <li>
                                    <NavLink className={(navData) => navData.isActive ? classes.active : classes.nav} to='/vehicles'>Vehicles</NavLink>
                                </li>
                            </React.Fragment>
                        )}
                    </ul>
                </nav>
            </label>
            <div className={classes.overlay}></div>


            <nav className={classes.main_menu}>
                <ul>
                    {!isLoggedIn && (
                        <li>
                            <NavLink className={(navData) => navData.isActive ? classes.active : classes.nav} to='/auth'>Login</NavLink>
                        </li>
                    )}
                    {isLoggedIn && (
                        <React.Fragment>
                            <li>
                                <button onClick={logoutHandler}>Logout</button>
                            </li>
                            <li>
                                <NavLink className={(navData) => navData.isActive ? classes.active : classes.nav} to='/homepage'>Homepage</NavLink>
                            </li>
                            <li>
                                <NavLink className={(navData) => navData.isActive ? classes.active : classes.nav} to='/movies'>Movies</NavLink>
                            </li>
                            <li>
                                <NavLink className={(navData) => navData.isActive ? classes.active : classes.nav} to='/characters'>Characters</NavLink>
                            </li>
                            <li>
                                <NavLink className={(navData) => navData.isActive ? classes.active : classes.nav} to='/species'>Species</NavLink>
                            </li>

                            <li>
                                <NavLink className={(navData) => navData.isActive ? classes.active : classes.nav} to='/planets'>Planets</NavLink>
                            </li>
                            <li>
                                <NavLink className={(navData) => navData.isActive ? classes.active : classes.nav} to='/starships'>StarShips</NavLink>
                            </li>
                            <li>
                                <NavLink className={(navData) => navData.isActive ? classes.active : classes.nav} to='/vehicles'>Vehicles</NavLink>
                            </li>
                        </React.Fragment>
                    )}
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;