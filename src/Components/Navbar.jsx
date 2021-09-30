import React from 'react'; 
import navbarCss from './Navbar.module.css'


const Navbar = () => {
    return (
        <nav className={navbarCss.nav}>
            <div className={navbarCss.item}>
                <a href='#'>Profile</a>
            </div>
            <div className={navbarCss.item}>
                <a href='#'>Messages</a>
            </div>
            <div className={navbarCss.item}>
                <a href='#'>News</a>
            </div>
            <div className={navbarCss.item}>
                <a href='#'>Music</a>
            </div>
            <div className={navbarCss.item}>
                <a href='#'>Setting</a>
            </div>
        </nav>
    )
}

export default Navbar;