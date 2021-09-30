import React from "react";
import headerCss from './Header.module.css'

const Header = () => {
    return <header className={headerCss.header}>
        <img className={headerCss.image} src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/BMW_logo_%28gray%29.svg/1024px-BMW_logo_%28gray%29.svg.png' alt='logoimage' />
    </header>
}

export default Header;