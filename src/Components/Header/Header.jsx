import React from "react";
import headerCss from './Header.module.css'

const Header = () => {
    return <header className={headerCss.header}>
        <img className={headerCss.image}
             src='https://logopond.com/logos/889585449f8f238b46df162273188972.png'
             alt='logoimage' />
    </header>
}

export default Header;