import React from 'react'; 
import navbarCss from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={navbarCss.nav}>
            <div className={navbarCss.mainNav}>
                <div className={navbarCss.item}>
                    <NavLink
                        activeClassName={navbarCss.activeLink}
                        to='/profile'>
                        Profile
                    </NavLink>
                </div>
                <div className={navbarCss.item}>
                    <NavLink
                        to='/dialogs'
                        activeClassName={navbarCss.activeLink}
                    >
                        Dialogs
                    </NavLink>
                </div>
                <div className={navbarCss.item}>
                    <NavLink
                        to='/news'
                        activeClassName={navbarCss.activeLink}
                    >
                        News
                    </NavLink>
                </div>
                <div className={navbarCss.item}>
                    <NavLink
                        to='/music'
                        activeClassName={navbarCss.activeLink}
                    >
                        Music
                    </NavLink>
                </div>
                <div className={navbarCss.item}>
                    <NavLink
                        to='/setting'
                        activeClassName={navbarCss.activeLink}
                    >
                        Setting
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;