import React from "react";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import User from "../User/User";

import headerNavLinks from '../../data/headerNavLink';
function Header() {
    return(
        <header className="main-header flex">
            <div className="wrapper flex justify-content-spaceBtw">
                <Nav links={headerNavLinks} navClass={'header-nav'} />
                <Logo/>
            </div>
            <User/>
        </header>
    )
}
export default Header;