import React from "react";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import User from "../User/User";

function Header() {
    return(
        <header className="main-header flex">
            <div className="wrapper flex justify-content-spaceBtw">
                <Nav/>
                <Logo/>
            </div>
            <User/>
        </header>
    )
}
export default Header;