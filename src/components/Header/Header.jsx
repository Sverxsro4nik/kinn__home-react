import React from "react";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import User from "../User/User";
import navLinks from "../../data/navLinks";

function Header() {
    return(
        <header className="main-header flex">
            <div className="wrapper flex justify-content-spaceBtw">
                <Nav links={navLinks} navClass={'header-nav'} className="true"/>
                <Logo/>
            </div>
            <User/>
        </header>
    )
}
export default Header;