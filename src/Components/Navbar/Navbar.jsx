import React from 'react'; 
import navbarCss from './Navbar.module.css'

const Navbar = () => {
    return (<div className={navbarCss.mainNav}>
        <nav className={navbarCss.nav}>

            <div className={navbarCss.item}>
                <a href='/profile'>Profile</a>
            </div>

            <div className={navbarCss.item}>
                <a href='/dialogs'>Messages</a>
            </div>

            <div className={navbarCss.item}>
                <a href='/news'>News</a>
            </div>

            <div className={navbarCss.item}>
                <a href='/music'>Music</a>
            </div>

            <div className={navbarCss.item}>
                <a href='/setting'>Setting</a>
            </div>

            <div className={navbarCss.login}>
                <input 
                    type="text"
                    id="loginBtn"
                    placeholder="put your login here"
                    className={navbarCss.loginInput}/>
                    
                <br/>

                <input
                    type="password"
                    name="password"
                    id="passwordBtn"
                    placeholder="put your password here"
                    className={navbarCss.passwordInput}    
                />
                <br />
                <button className={navbarCss.loginBtn}>Login</button>
            </div>
        </nav>
    </div>
    )
}

export default Navbar;