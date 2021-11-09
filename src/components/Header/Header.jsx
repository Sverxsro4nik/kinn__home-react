import React from "react";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import User from "../User/User";

import headerNavLinks from '../../data/headerNavLink';
import navClasses from '../Nav/Nav.module.css';

function Header() {
    return(
        <header className="main-header flex">
            <div className="wrapper flex justify-content-spaceBtw">
                <Nav links={headerNavLinks} navClass={navClasses.NavHeader}/>
                <Logo/>
            </div>
            <User/>
        </header>
    )
}
export default Header;