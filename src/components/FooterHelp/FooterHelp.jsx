import React from "react";
import Line from "../Line/Line";



const FooterHelp = () => {
    return(
        <div className="footer-help">
            <p>Help</p>
            <Line lineClass="footer__line"/>
            <nav className="footer-nav">
                <a href="#" className="footer-nav__help">faqs + shipping</a>
                <a href="#" className="footer-nav__help">contact</a>
                <a href="#" className="footer-nav__help">terms</a>
                <a href="#" className="footer-nav__help">trade</a>
            </nav>
        </div>
    )
}

export default FooterHelp;