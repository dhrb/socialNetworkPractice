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
            <div className={navbarCss.login}>
                <input type="text" className={navbarCss.loginBtn}/>
                <br/>
                <input
                    type="password"
                    name="password"
                    id="passwordBtn"
                    className={navbarCss.PasswordBtn}    
                />
                <br />
                <button className={navbarCss.confirmBtn}>Login</button>

            </div>
        </nav>
    )
}

export default Navbar;