import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../features/starWarsAuthSlice";

import classes from '../../styles/styles/Navbar.module.css';

const Navbar = () => {
    const isLoggedIn = useSelector(state => state.auth.token);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutHandler = () => {
        dispatch(logout());
        navigate('/auth');
    }

    return (
        <header >
            {/* <div>InsertLogoHere</div> */}
            <nav >
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