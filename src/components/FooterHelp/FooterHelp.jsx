import React from "react";
import Line from "../Line/Line";
import Nav from "../Nav/Nav";


import footerNavLinks from '../../data/footerNavLinks';


const FooterHelp = () => {
    return(
        <div className="footer-help">
            <p>Help</p>
            <Line lineClass="footer__line"/>
            <Nav links={footerNavLinks} navClass="footer-nav" classLink="footer-nav__help"/>
        </div>
    )
}

export default FooterHelp;